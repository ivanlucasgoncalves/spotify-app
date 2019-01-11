import { GET_USER_PLAYLISTS } from '../actions/userPlaylists'

const initialState = []

const userPlaylists = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_PLAYLISTS:
			return action.payload
		default:
			return state
	}
}

export default userPlaylists
