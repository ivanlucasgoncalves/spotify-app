import React from 'react'
import { connect } from 'react-redux'

import { getMadeFor } from '../actions'

class MadeFor extends React.Component {
	componentDidMount = () => {
		this.props.getMadeFor()
	}
	render({ name, made_for } = this.props) {
		return (
			<React.Fragment>
				<h2 className='mb-3'>Made for {name}</h2>
				<div className='row'>
					{made_for.map(track => (
						<div key={track.id} className='media mb-3 col-12 col-sm-6 col-xl-4'>
							<img
								src={track.album.images[1].url}
								className='align-self-center mr-3 rounded'
							/>
							<div className='media-body'>
								<h5 className='mt-0'>
									<i className='fas fa-music mr-1' /> {track.name}
								</h5>
								<small>{track.artists[0].name}</small>
							</div>
						</div>
					))}
				</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	name: state.user.name,
	made_for: state.made_for
})

export default connect(
	mapStateToProps,
	{
		getMadeFor
	}
)(MadeFor)
