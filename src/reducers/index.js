import { combineReducers } from 'redux'

import token from './authLoginReducer'
import user from './userReducer'
import user_playlists from './userPlaylistsReducer'
import recently_played from './recentlyPlayedReducer'
import made_for from './madeForReducer'
import new_releases from './newReleasesReducer'

// Combining all Reducers
const reducer = combineReducers({
	token,
	user,
	user_playlists,
	recently_played,
	made_for,
	new_releases
})

export default reducer
