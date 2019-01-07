import { combineReducers } from 'redux'

import userReducer from './userReducer'
import userPlaylists from './userPlaylistsReducer'
import recentlyPlayedReducer from './recentlyPlayedReducer'

// Combining all Reducers
const reducer = combineReducers({
	user: userReducer,
	user_playlists: userPlaylists,
	recently_played: recentlyPlayedReducer
})

export default reducer
