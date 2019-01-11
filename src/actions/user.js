import SpotifyWebApi from 'spotify-web-api-js'

const spotifyApi = new SpotifyWebApi()

export const GET_USER = 'GET_USER'

export const getUser = () => dispatch => {
	dispatch({
		type: GET_USER,
		payload: spotifyApi.getMe().then(user => ({
			name: user.display_name,
			image: user.images[0].url
		}))
	})
}
