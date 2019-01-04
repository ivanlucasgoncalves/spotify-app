import React from 'react'
import logo from './logo.svg'

const App = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					React with <code>webpack</code>.
				</p>
				<a href='http://localhost:8899/login'> Login to Spotify </a>
			</header>
		</div>
	)
}

export default App
