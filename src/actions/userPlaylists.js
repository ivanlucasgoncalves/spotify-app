import SpotifyWebApi from 'spotify-web-api-js'

const spotifyApi = new SpotifyWebApi()

export const GET_USER_PLAYLISTS = 'GET_USER_PLAYLISTS'

export const getUserPlaylists = () => dispatch => {
	dispatch({
		type: GET_USER_PLAYLISTS,
		payload: spotifyApi
			.getUserPlaylists({ limit: 5 })
			.then(playlist => playlist.items)
	})
}
