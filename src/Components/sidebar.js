import React from 'react'
import { connect } from 'react-redux'

import { getUser, getRecentlyPlayed, getUserPlaylists } from '../actions'

import logo from './spotify-logo.svg'

class Sidebar extends React.Component {
	componentDidMount = () => {
		if (this.props.loggedIn) {
			this.props.getUser()
			this.props.getUserPlaylists()
			this.props.getRecentlyPlayed()
		}
	}
	render({ name, image, user_playlists, recently_played } = this.props) {
		console.log(image)
		return (
			<aside className='sidebar'>
				<img className='sidebar__spotify-logo img-fluid mb-5' src={logo} />
				<div>
					<h3>Recently Played</h3>
					<div className='list-group mt-3'>
						{recently_played.map(item => (
							<a
								key={item.track.id}
								href='#'
								className='list-group-item list-group-item-action d-flex align-items-center'
							>
								<i className='fas fa-music' />
								<div className='d-flex w-100 align-items-center justify-content-between ml-2'>
									<h5 className='mb-1'>{item.track.artists[0].name}</h5>
									<small>{item.track.artists[0].type}</small>
								</div>
							</a>
						))}
					</div>
				</div>
				<div className='pt-5'>
					<h3>Playlists</h3>
					<div className='list-group mt-3'>
						{user_playlists.map(playlist => (
							<a
								key={playlist.id}
								href='#'
								className='list-group-item list-group-item-action d-flex align-items-center'
							>
								<i className='fas fa-music' />
								<div className='d-flex w-100 align-items-center justify-content-between ml-2'>
									<h6 className='mb-0'>{playlist.name}</h6>
								</div>
							</a>
						))}
					</div>
				</div>
				<div className='pt-3'>
					<a href='#' className='btn btn-dark btn-lg btn-block' role='button'>
						Add New Playlist
					</a>
				</div>
				<div className='sidebar__user-details d-flex align-items-center mt-5 pt-5'>
					<img src={image} className='sidebar__user-image' />
					<span className='sidebar__user-name'>
						Hi, {name}
						<a href='http://localhost:8899/login'>Log in</a>
					</span>
				</div>
			</aside>
		)
	}
}

const mapStateToProps = state => ({
	name: state.user.name,
	image: state.user.image,
	user_playlists: state.user_playlists,
	recently_played: state.recently_played
})

export default connect(
	mapStateToProps,
	{
		getUser,
		getUserPlaylists,
		getRecentlyPlayed
	}
)(Sidebar)
