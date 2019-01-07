import React from 'react'

class RecentlyPlayed extends React.Component {
	render() {
		return (
			<React.Fragment>
				<h2 className='mb-3'>Recently Played</h2>
				<div className='media mb-3'>
					<img
						src='http://via.placeholder.com/94'
						className='align-self-center mr-3 rounded'
					/>
					<div className='media-body'>
						<h5 className='mt-0'>Center-aligned media</h5>
						<p className='mb-0'>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
							scelerisque ante sollicitudin.
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
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
							scelerisque ante sollicitudin.
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
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
							scelerisque ante sollicitudin.
						</p>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default RecentlyPlayed
