import SpotifyWebApi from 'spotify-web-api-js'

// Instantiating
const spotifyApi = new SpotifyWebApi()

// Action types
export const AUTH_LOGIN = 'AUTH_LOGIN'
export const GET_USER = 'GET_USER'
export const GET_USER_PLAYLISTS = 'GET_USER_PLAYLISTS'
export const GET_RECENTLY_PLAYED = 'GET_RECENTLY_PLAYED'
export const GET_MADE_FOR = 'GET_MADE_FOR'
export const GET_NEW_RELEASES = 'GET_NEW_RELEASES'

// Action creators
const getHashParams = () => {
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

export const authLogin = () => dispatch => {
	const params = getHashParams()
	const token = params.access_token
	dispatch({
		type: AUTH_LOGIN,
		payload: {
			access_token: token
		}
	})
}

export const getUser = () => dispatch => {
	spotifyApi.getMe().then(res =>
		dispatch({
			type: GET_USER,
			payload: {
				name: res.display_name,
				image: res.images[0].url
			}
		})
	)
}

export const getUserPlaylists = () => dispatch => {
	spotifyApi.getUserPlaylists({ limit: 5 }).then(data =>
		dispatch({
			type: GET_USER_PLAYLISTS,
			payload: data.items
		})
	)
}

export const getRecentlyPlayed = () => dispatch => {
	spotifyApi.getMyRecentlyPlayedTracks({ limit: 9 }).then(data =>
		dispatch({
			type: GET_RECENTLY_PLAYED,
			payload: data.items
		})
	)
}

export const getMadeFor = () => dispatch => {
	spotifyApi
		.getMyTopTracks({ time_range: 'medium_term', limit: 6 })
		.then(data =>
			dispatch({
				type: GET_MADE_FOR,
				payload: data.items
			})
		)
}

export const getNewReleases = () => dispatch => {
	spotifyApi.getNewReleases({ limit: 4 }).then(data =>
		dispatch({
			type: GET_NEW_RELEASES,
			payload: data.albums.items
		})
	)
}
