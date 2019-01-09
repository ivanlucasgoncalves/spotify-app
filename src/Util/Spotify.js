import dotenv from 'dotenv'
import express from 'express'
import request from 'request'
import cors from 'cors'
import queryString from 'querystring'
import cookieParser from 'cookie-parser'

dotenv.config()
const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const redirect_uri = process.env.REDIRECT_URI

const generateRandomString = length => {
	let text = ''
	const possible =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

	for (let i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length))
	}
	return text
}

const stateKey = 'spotify_auth_state'
const app = express()

app.use(cors()).use(cookieParser())

app.get('/login', (req, res) => {
	const state = generateRandomString(16)
	res.cookie(stateKey, state)

	const scope =
		'user-read-private user-read-email user-read-recently-played user-top-read'
	res.redirect(
		'https://accounts.spotify.com/authorize?' +
			queryString.stringify({
				response_type: 'code',
				client_id,
				scope,
				redirect_uri,
				state
			})
	)
})

app.get('/callback', (req, res) => {
	const code = req.query.code || null
	const state = req.query.state || null
	const storedState = req.cookies ? req.cookies[stateKey] : null

	if (state === null || state !== storedState) {
		res.redirect(
			'/#' +
				queryString.stringify({
					error: 'state_mismatch'
				})
		)
	} else {
		res.clearCookie(stateKey)
		const authOptions = {
			url: 'https://accounts.spotify.com/api/token',
			form: {
				code,
				redirect_uri,
				grant_type: 'authorization_code'
			},
			headers: {
				Authorization:
					'Basic ' +
					new Buffer(client_id + ':' + client_secret).toString('base64')
			},
			json: true
		}

		request.post(authOptions, (error, response, body) => {
			if (!error && response.statusCode === 200) {
				const access_token = body.access_token,
					refresh_token = body.refresh_token

				res.redirect(
					'http://localhost:9099/#' +
						queryString.stringify({
							access_token,
							refresh_token
						})
				)
			} else {
				res.redirect(
					'/#' +
						queryString.stringify({
							error: 'invalid_token'
						})
				)
			}
		})
	}
})

app.get('/refresh_token', (req, res) => {
	const refresh_token = req.query.refresh_token
	const authOptions = {
		url: 'https://accounts.spotify.com/api/token',
		headers: {
			Authorization:
				'Basic ' +
				new Buffer(client_id + ':' + client_secret).toString('base64')
		},
		form: {
			grant_type: 'refresh_token',
			refresh_token
		},
		json: true
	}

	request.post(authOptions, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			const access_token = body.access_token
			res.send({
				access_token
			})
		}
	})
})

console.log('Listening on 8899')
app.listen(8899)
