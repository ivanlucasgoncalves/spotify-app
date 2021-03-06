import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import './styles/app.scss'
import App from './containers/app'

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)

// Adding HMR
module.hot && module.hot.accept()
