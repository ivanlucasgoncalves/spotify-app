import SpotifyWebApi from 'spotify-web-api-js'

const spotifyApi = new SpotifyWebApi()

export const GET_MADE_FOR = 'GET_MADE_FOR'

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
