import SpotifyWebApi from 'spotify-web-api-js'

const spotifyApi = new SpotifyWebApi()

export const GET_RECENTLY_PLAYED = 'GET_RECENTLY_PLAYED'

export const getRecentlyPlayed = () => dispatch => {
	spotifyApi.getMyRecentlyPlayedTracks({ limit: 9 }).then(data =>
		dispatch({
			type: GET_RECENTLY_PLAYED,
			payload: data.items
		})
	)
}
