import React from 'react'
import { connect } from 'react-redux'

class RecentlyPlayed extends React.Component {
	render({ recently_played } = this.props) {
		return (
			<React.Fragment>
				<h2 className='mb-3'>Recently Played</h2>
				<div className='row'>
					{recently_played.map(item => (
						<div
							key={item.track.id}
							className='media mb-3 col-12 col-sm-6 col-xl-4'
						>
							<img
								src={item.track.album.images[1].url}
								className='align-self-center mr-3 rounded'
							/>
							<div className='media-body'>
								<h5 className='mt-0'>{item.track.artists[0].name}</h5>
								<p className='mt-2'>
									<i className='fas fa-music mr-1' />
									{item.track.name}
								</p>
							</div>
						</div>
					))}
				</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	recently_played: state.recently_played
})

export default connect(mapStateToProps)(RecentlyPlayed)
