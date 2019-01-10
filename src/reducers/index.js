import { combineReducers } from 'redux'

import userReducer from './userReducer'
import userPlaylists from './userPlaylistsReducer'
import recentlyPlayedReducer from './recentlyPlayedReducer'
import madeForReducer from './madeForReducer'
import authLoginReducer from './authLoginReducer'
import newReleasesReducer from './newReleasesReducer'

// Combining all Reducers
const reducer = combineReducers({
	token: authLoginReducer,
	user: userReducer,
	user_playlists: userPlaylists,
	recently_played: recentlyPlayedReducer,
	made_for: madeForReducer,
	new_releases: newReleasesReducer
})

export default reducer
