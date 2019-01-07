import { GET_USER } from '../actions'

const initialState = {
	name: '',
	image: null
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER:
			return action.payload
		default:
			return state
	}
}

export default userReducer
