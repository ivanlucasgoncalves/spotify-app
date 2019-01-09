import { GET_MADE_FOR } from '../actions'

const initialState = []

const madeForReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MADE_FOR:
			return action.payload
		default:
			return state
	}
}

export default madeForReducer
