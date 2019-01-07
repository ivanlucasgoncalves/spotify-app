import React from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import { connect } from 'react-redux'

import Sidebar from './sidebar'
import HeroMessage from './heroMessage'
import MadeFor from './madeFor'
import RecentlyPlayed from './recentlyPlayed'
import NewReleases from './newReleases'

// Instantiating
const spotifyApi = new SpotifyWebApi()

class App extends React.Component {
	constructor() {
		super()

		const params = this.getHashParams()
		const token = params.access_token
		if (token) spotifyApi.setAccessToken(token)

		this.state = {
			loggedIn: token ? true : false
		}
	}
	getHashParams = () => {
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
	render() {
		const { loggedIn } = this.state

		return (
			<React.Fragment>
				<div className='container-fluid'>
					<div className='row no-gutters mx-md-n3'>
						<div className='col-12 col-md-4 col-lg-3'>
							<Sidebar loggedIn={this.state.loggedIn} />
						</div>
						<div className='col-12 col-md-8 col-lg-9'>
							<main className='main'>
								<HeroMessage />
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
				</div>
			</React.Fragment>
		)
	}
}

export default connect()(App)
