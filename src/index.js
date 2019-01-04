import React from "react"
import ReactDOM from "react-dom"

import './app.scss'
import App from './Components/App'

ReactDOM.render(<App />, document.getElementById("app"))

// Adding HMR
module.hot && module.hot.accept()