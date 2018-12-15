import React from "react"
import ReactDOM from "react-dom"

import './app.scss'

const App = () => {
  return <p>Hello React!!!!!</p>;
}

ReactDOM.render(<App />, document.getElementById("app"));

// Adding HMR
module.hot && module.hot.accept()