import SpotifyWebApi from 'spotify-web-api-js'

const spotifyApi = new SpotifyWebApi()

export const GET_USER = 'GET_USER'

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
