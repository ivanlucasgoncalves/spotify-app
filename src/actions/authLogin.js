export const AUTH_LOGIN = 'AUTH_LOGIN'

const getHashParams = () => {
	const hashParams = {}
	let e,
		r = /([^&;=]+)=?([^&;]*)/g,
		q = window.location.hash.substring(1)
	e = r.exec(q)
	while (e) {
		hashParams[e[1]] = decodeURIComponent(e[2])
		e = r.exec(q)
	}
	return hashParams
}

export const authLogin = () => dispatch => {
	const params = getHashParams()
	const token = params.access_token
	dispatch({
		type: AUTH_LOGIN,
		payload: {
			access_token: token
		}
	})
}
