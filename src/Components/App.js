import React from 'react'
import SpotifyWebApi from 'spotify-web-api-js'

// Instantiating
const spotifyApi = new SpotifyWebApi()

class App extends React.Component {
	constructor() {
		super()

		const params = this.getHashParams()
		const token = params.access_token
		if (token) spotifyApi.setAccessToken(token)

		this.state = {
			loggedIn: token ? true : false,
			user: {
				name: ''
			}
		}
	}
	getHashParams = () => {
		const hashParams = {}
		let e,
			r = /([^&;=]+)=?([^&;]*)/g,
			q = window.location.hash.substring(1)
		e = r.exec(q)
		while (e) {
			hashParams[e[1]] = decodeURIComponent(e[2])
			e = r.exec(q)
		}
		return hashParams
	}
	componentDidMount = () => {
		if (this.state.loggedIn) this.getUser()
	}
	getUser = () => {
		spotifyApi
			.getMe()
			.then(res => this.setState({ user: { name: res.display_name } }))
	}
	render() {
		const { loggedIn, user } = this.state
		return (
			<React.Fragment>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col col-md-6'>
							{!loggedIn ? (
								<div>
									<a
										className='text-decoration-none text-white'
										href='http://localhost:8899/login'
									>
										<i className='fab fa-spotify' /> Login to Spotify
									</a>
								</div>
							) : (
								<div>
									<span>
										<i className='far fa-smile-wink' /> Hi, {user.name}
									</span>
								</div>
							)}
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default App
