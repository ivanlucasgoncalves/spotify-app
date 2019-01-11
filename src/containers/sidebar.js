import React from 'react'
import { connect } from 'react-redux'

import { getUser } from '../actions/user'
import { getRecentlyPlayed } from '../actions/recentlyPlayed'
import { getUserPlaylists } from '../actions/userPlaylists'

import logo from '../images/spotify-logo.svg'

class Sidebar extends React.Component {
	componentDidMount = () => {
		this.props.getUser()
		this.props.getUserPlaylists()
		this.props.getRecentlyPlayed()
	}
	fetchRecentlyPlayed = ({ recently_played } = this.props) => {
		return recently_played.map((item, index) => {
			if (index <= 3) {
				return (
					<a key={item.track.id} href='#' className='list-group__item'>
						<div className='d-flex w-100 align-items-center justify-content-between'>
							<h5 className='list-group__item__title mb-0'>
								<i className='fas fa-music mr-1' />
								{item.track.artists[0].name}
							</h5>
							<small>{item.track.artists[0].type}</small>
						</div>
						<small>{item.track.name}</small>
					</a>
				)
			}
		})
	}
	fetchUserPlaylists = ({ user_playlists } = this.props) => {
		return user_playlists.map(playlist => (
			<a key={playlist.id} href='#' className='list-group__item'>
				<h5 className='list-group__item__title mb-0'>
					<i className='fas fa-music mr-1' />
					{playlist.name}
				</h5>
			</a>
		))
	}
	render({ name, image } = this.props) {
		return (
			<aside className='sidebar'>
				<img className='sidebar__spotify-logo img-fluid mb-5' src={logo} />
				<div>
					<h4 className='sidebar__title'>Recently Played</h4>
					<div className='list-group mt-3'>{this.fetchRecentlyPlayed()}</div>
				</div>
				<div className='pt-5'>
					<h4 className='sidebar__title'>Playlists</h4>
					<div className='list-group mt-3'>{this.fetchUserPlaylists()}</div>
				</div>
				<div className='pt-3'>
					<a
						href='#'
						className='btn btn-success btn-block btn-add-playlist'
						role='button'
					>
						Add New Playlist
					</a>
				</div>
				<div className='sidebar__user-details d-flex align-items-center mt-5 pt-5'>
					<img src={image} className='sidebar__user-image' />
					<span className='sidebar__user-name'>Hi, {name}</span>
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
