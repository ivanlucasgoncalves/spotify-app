import SpotifyWebApi from 'spotify-web-api-js'

const spotifyApi = new SpotifyWebApi()

export const GET_NEW_RELEASES = 'GET_NEW_RELEASES'

export const getNewReleases = () => dispatch => {
	dispatch({
		type: GET_NEW_RELEASES,
		payload: spotifyApi
			.getNewReleases({ limit: 4 })
			.then(release => release.albums.items)
	})
}
