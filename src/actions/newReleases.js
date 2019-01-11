import SpotifyWebApi from 'spotify-web-api-js'

const spotifyApi = new SpotifyWebApi()

export const GET_NEW_RELEASES = 'GET_NEW_RELEASES'

export const getNewReleases = () => dispatch => {
	spotifyApi.getNewReleases({ limit: 4 }).then(data =>
		dispatch({
			type: GET_NEW_RELEASES,
			payload: data.albums.items
		})
	)
}
