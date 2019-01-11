import { AUTH_LOGIN } from '../actions/authLogin'

const initialState = {
	access_token: null
}

const authLoginReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_LOGIN:
			return action.payload
		default:
			return state
	}
}

export default authLoginReducer
