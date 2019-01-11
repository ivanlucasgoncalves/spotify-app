import SpotifyWebApi from 'spotify-web-api-js'

const spotifyApi = new SpotifyWebApi()

export const GET_USER_PLAYLISTS = 'GET_USER_PLAYLISTS'

export const getUserPlaylists = () => dispatch => {
	spotifyApi.getUserPlaylists({ limit: 5 }).then(data =>
		dispatch({
			type: GET_USER_PLAYLISTS,
			payload: data.items
		})
	)
}
