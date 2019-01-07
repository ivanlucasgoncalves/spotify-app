import SpotifyWebApi from 'spotify-web-api-js'

// Instantiating
const spotifyApi = new SpotifyWebApi()

// Action types
export const GET_USER = 'GET_USER'
export const GET_USER_PLAYLISTS = 'GET_USER_PLAYLISTS'
export const GET_RECENTLY_PLAYED = 'GET_RECENTLY_PLAYED'

// Action creators
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
	spotifyApi.getUserPlaylists().then(data =>
		dispatch({
			type: GET_USER_PLAYLISTS,
			payload: data.items
		})
	)
}

export const getRecentlyPlayed = () => dispatch => {
	dispatch({
		type: GET_RECENTLY_PLAYED,
		payload: data.items
	})
}

const data = {
	items: [
		{
			track: {
				artists: [
					{
						external_urls: {
							spotify: 'https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb'
						},
						href: 'https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb',
						id: '5INjqkS1o8h1imAzPqGZBb',
						name: 'Tame Impala',
						type: 'artist',
						uri: 'spotify:artist:5INjqkS1o8h1imAzPqGZBb'
					}
				],
				available_markets: ['CA', 'MX', 'US'],
				disc_number: 1,
				duration_ms: 108546,
				explicit: false,
				external_urls: {
					spotify: 'https://open.spotify.com/track/2gNfxysfBRfl9Lvi9T3v6R'
				},
				href: 'https://api.spotify.com/v1/tracks/2gNfxysfBRfl9Lvi9T3v6R',
				id: '2gNfxysfBRfl9Lvi9T3v6R',
				name: 'Disciples',
				preview_url:
					'https://p.scdn.co/mp3-preview/6023e5aac2123d098ce490488966b28838b14fa2',
				track_number: 9,
				type: 'track',
				uri: 'spotify:track:2gNfxysfBRfl9Lvi9T3v6R'
			},
			played_at: '2016-12-13T20:44:04.589Z',
			context: {
				uri: 'spotify:artist:5INjqkS1o8h1imAzPqGZBb',
				external_urls: {
					spotify: 'https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb'
				},
				href: 'https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb',
				type: 'artist'
			}
		},
		{
			track: {
				artists: [
					{
						external_urls: {
							spotify: 'https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb'
						},
						href: 'https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb',
						id: '5INjqkS1o8h1imAzPqGZBb',
						name: 'Djavan',
						type: 'artist',
						uri: 'spotify:artist:5INjqkS1o8h1imAzPqGZBb'
					}
				],
				available_markets: ['CA', 'MX', 'US'],
				disc_number: 1,
				duration_ms: 467586,
				explicit: false,
				external_urls: {
					spotify: 'https://open.spotify.com/track/2X485T9Z5Ly0xyaghN73ed'
				},
				href: 'https://api.spotify.com/v1/tracks/2X485T9Z5Ly0xyaghN73ed',
				id: '2X485T9Z5Ly0xyaghN73ed',
				name: 'Let It Happen',
				preview_url:
					'https://p.scdn.co/mp3-preview/05dee1ad0d2a6fa4ad07fbd24ae49d58468e8194',
				track_number: 1,
				type: 'track',
				uri: 'spotify:track:2X485T9Z5Ly0xyaghN73ed'
			},
			played_at: '2016-12-13T20:42:17.016Z',
			context: {
				uri: 'spotify:artist:5INjqkS1o8h1imAzPqGZBb',
				external_urls: {
					spotify: 'https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb'
				},
				href: 'https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb',
				type: 'artist'
			}
		}
	]
}
