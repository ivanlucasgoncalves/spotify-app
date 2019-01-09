import React from 'react'
import logo from './spotify-logo.svg'

class Login extends React.Component {
	state = {
		clicked: false
	}
	handleClick = () => {
		this.setState({ clicked: true })
	}
	render({ clicked } = this.state) {
		return (
			<div className='col-8 col-sm-5 col-md-4 col-lg-3'>
				<div className='login__box d-flex flex-column align-items-center'>
					<img className='img-fluid mb-4' src={logo} />
					<a
						className='btn btn-success login__link'
						href='http://localhost:8899/login'
						onClick={this.handleClick}
					>
						{clicked ? <span>Loading...</span> : <span>Log in</span>}
					</a>
				</div>
			</div>
		)
	}
}

export default Login
