import React from 'react'
import { connect } from 'react-redux'

import { getNewReleases } from '../actions/newReleases'

class NewReleases extends React.Component {
	componentDidMount() {
		this.props.getNewReleases()
	}
	fetchNewReleases = ({ new_releases } = this.props) => {
		return new_releases.map(album => (
			<div key={album.id} className='col-6 col-lg-3 mb-4 mb-lg-0'>
				<img src={album.images[0].url} className='img-fluid rounded' />
			</div>
		))
	}
	render() {
		return (
			<React.Fragment>
				<h2 className='mb-3'>New Releases</h2>
				<div className='row'>{this.fetchNewReleases()}</div>
			</React.Fragment>
		)
	}
}

const mapStatetoProps = state => ({
	new_releases: state.new_releases
})

export default connect(
	mapStatetoProps,
	{
		getNewReleases
	}
)(NewReleases)
