import { GET_RECENTLY_PLAYED } from '../actions'

const initialState = []

const recentlyPlayedReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_RECENTLY_PLAYED:
			return action.payload
		default:
			return state
	}
}

export default recentlyPlayedReducer
