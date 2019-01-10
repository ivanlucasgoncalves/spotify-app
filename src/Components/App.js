import React from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import { connect } from 'react-redux'

import { authLogin } from '../actions'

import Sidebar from './sidebar'
import HeroMessage from './heroMessage'
import MadeFor from './madeFor'
import RecentlyPlayed from './recentlyPlayed'
import NewReleases from './newReleases'
import Login from './login'

// Instantiating
const spotifyApi = new SpotifyWebApi()

class App extends React.Component {
	componentDidMount = () => {
		this.props.authLogin()
	}
	render({ token } = this.props) {
		if (token) spotifyApi.setAccessToken(token)

		return (
			<React.Fragment>
				<div className='container-fluid'>
					{!token ? (
						<div className='row align-items-center justify-content-center login'>
							<Login />
						</div>
					) : (
						<div className='row no-gutters mx-md-n3'>
							<div className='col-12 col-md-3 col-xl-2'>
								<Sidebar />
							</div>
							<div className='col-12 col-md-9 col-xl-10'>
								<main className='main'>
									{/*<HeroMessage />*/}
									<section className='main__made-for mb-5'>
										<MadeFor />
									</section>
									<section className='main__recently-played mb-5'>
										<RecentlyPlayed />
									</section>
									<section className='main__new-releases'>
										<NewReleases />
									</section>
								</main>
							</div>
						</div>
					)}
				</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	token: state.token.access_token
})

export default connect(
	mapStateToProps,
	{
		authLogin
	}
)(App)
