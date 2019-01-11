import { GET_NEW_RELEASES } from '../actions/newReleases'

const initialState = []

const getNewReleases = (state = initialState, action) => {
	switch (action.type) {
		case GET_NEW_RELEASES:
			return action.payload
		default:
			return state
	}
}

export default getNewReleases
