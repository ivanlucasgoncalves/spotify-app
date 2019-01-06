import React from 'react'
import SpotifyWebApi from 'spotify-web-api-js'

import logo from './spotify-logo.svg'

// Instantiating
const spotifyApi = new SpotifyWebApi()

class App extends React.Component {
	constructor() {
		super()

		const params = this.getHashParams()
		const token = params.access_token
		if (token) spotifyApi.setAccessToken(token)

		this.state = {
			loggedIn: token ? true : false,
			user: {
				name: ''
			}
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
	componentDidMount = () => {
		if (this.state.loggedIn) this.getUser()
	}
	getUser = () => {
		spotifyApi
			.getMe()
			.then(res => this.setState({ user: { name: res.display_name } }))
	}
	render() {
		const { loggedIn, user } = this.state
		return (
			<React.Fragment>
				<div className='container-fluid'>
					<div className='row no-gutters mx-md-n3'>
						<div className='col-12 col-md-4 col-lg-3'>
							<aside className='aside'>
								<img
									className='aside__spotify-logo img-fluid mb-5'
									src={logo}
								/>
								<div>
									<h3>Recently Played</h3>
									<div className='list-group mt-3'>
										<a
											href='#'
											className='list-group-item list-group-item-action d-flex align-items-center'
										>
											<i className='fas fa-music' />
											<div className='d-flex w-100 align-items-center justify-content-between ml-2'>
												<h5 className='mb-1'>JP Cooper</h5>
												<small>Artist</small>
											</div>
										</a>
										<a
											href='#'
											className='list-group-item list-group-item-action d-flex align-items-center'
										>
											<i className='fas fa-music' />
											<div className='d-flex w-100 align-items-center justify-content-between ml-2'>
												<h5 className='mb-1'>Calvin Harris</h5>
												<small>Artist</small>
											</div>
										</a>
										<a
											href='#'
											className='list-group-item list-group-item-action d-flex align-items-center'
										>
											<i className='fas fa-music' />
											<div className='d-flex w-100 align-items-center justify-content-between ml-2'>
												<h5 className='mb-1'>Rock Classics</h5>
												<small>Playlists</small>
											</div>
										</a>
									</div>
								</div>
								<div className='aside__user-details d-flex align-items-center mt-5 pt-5'>
									<span className='aside__user-image' />
									<span className='aside__user-name'>
										Hi, Ivan Lucas Goncalves {user.name}
									</span>
								</div>
							</aside>
						</div>
						<div className='col-12 col-md-8 col-lg-9'>
							<main className='main'>
								<section className='main__hello jumbotron'>
									<h1 className='display-4'>Hello, world!</h1>
									<p className='lead'>
										This is a simple hero unit, a simple jumbotron-style
										component for calling extra attention to featured content or
										information.
									</p>
									<hr className='my-4' />
									<p>
										It uses utility classes for typography and spacing to space
										content out within the larger container.
									</p>
									<a className='btn btn-info' href='#' role='button'>
										Close
									</a>
								</section>
								<section className='main__made-for mb-5'>
									<h2 className='mb-3'>Made for Ivan Lucas</h2>
									<div className='media mb-3'>
										<img
											src='http://via.placeholder.com/94'
											className='align-self-center mr-3 rounded'
										/>
										<div className='media-body'>
											<h5 className='mt-0'>Center-aligned media</h5>
											<p className='mb-0'>
												Cras sit amet nibh libero, in gravida nulla. Nulla vel
												metus scelerisque ante sollicitudin.
											</p>
										</div>
									</div>
									<div className='media'>
										<img
											src='http://via.placeholder.com/94'
											className='align-self-center mr-3 rounded'
										/>
										<div className='media-body'>
											<h5 className='mt-0'>Center-aligned media</h5>
											<p className='mb-0'>
												Cras sit amet nibh libero, in gravida nulla. Nulla vel
												metus scelerisque ante sollicitudin.
											</p>
										</div>
									</div>
								</section>
								<section className='main__recently-played mb-5'>
									<h2 className='mb-3'>Recently Played</h2>
									<div className='media mb-3'>
										<img
											src='http://via.placeholder.com/94'
											className='align-self-center mr-3 rounded'
										/>
										<div className='media-body'>
											<h5 className='mt-0'>Center-aligned media</h5>
											<p className='mb-0'>
												Cras sit amet nibh libero, in gravida nulla. Nulla vel
												metus scelerisque ante sollicitudin.
											</p>
										</div>
									</div>
									<div className='media mb-3'>
										<img
											src='http://via.placeholder.com/94'
											className='align-self-center mr-3 rounded'
										/>
										<div className='media-body'>
											<h5 className='mt-0'>Center-aligned media</h5>
											<p className='mb-0'>
												Cras sit amet nibh libero, in gravida nulla. Nulla vel
												metus scelerisque ante sollicitudin.
											</p>
										</div>
									</div>
									<div className='media'>
										<img
											src='http://via.placeholder.com/94'
											className='align-self-center mr-3 rounded'
										/>
										<div className='media-body'>
											<h5 className='mt-0'>Center-aligned media</h5>
											<p className='mb-0'>
												Cras sit amet nibh libero, in gravida nulla. Nulla vel
												metus scelerisque ante sollicitudin.
											</p>
										</div>
									</div>
								</section>

								<section className='main__new-releases'>
									<h2 className='mb-3'>New Releases</h2>

									<div className='row'>
										<div className='col-12 col-md-3'>
											<div className='card'>
												<img
													src='http://via.placeholder.com/360'
													className='card-img-top'
													height='220'
												/>
												<div className='card-body'>
													<h5 className='card-title'>Card title</h5>
													<p className='card-text'>
														This is a longer card with supporting text below as
														a natural lead-in to additional content. This
														content is a little bit longer.
													</p>
												</div>
											</div>
										</div>
										<div className='col-12 col-md-3'>
											<div className='card'>
												<img
													src='http://via.placeholder.com/360'
													className='card-img-top'
													height='220'
												/>
												<div className='card-body'>
													<h5 className='card-title'>Card title</h5>
													<p className='card-text'>
														This is a longer card with supporting text below as
														a natural lead-in to additional content. This
														content is a little bit longer.
													</p>
												</div>
											</div>
										</div>
										<div className='col-12 col-md-3'>
											<div className='card'>
												<img
													src='http://via.placeholder.com/360'
													className='card-img-top'
													height='220'
												/>
												<div className='card-body'>
													<h5 className='card-title'>Card title</h5>
													<p className='card-text'>
														This is a longer card with supporting text below as
														a natural lead-in to additional content. This
														content is a little bit longer.
													</p>
												</div>
											</div>
										</div>
										<div className='col-12 col-md-3'>
											<div className='card'>
												<img
													src='http://via.placeholder.com/360'
													className='card-img-top'
													height='220'
												/>
												<div className='card-body'>
													<h5 className='card-title'>Card title</h5>
													<p className='card-text'>
														This is a longer card with supporting text below as
														a natural lead-in to additional content. This
														content is a little bit longer.
													</p>
												</div>
											</div>
										</div>
									</div>
								</section>
							</main>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default App
