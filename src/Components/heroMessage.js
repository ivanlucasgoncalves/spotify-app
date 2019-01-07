import React from 'react'

const HeroMessage = () => {
	const handleClick = e => {
		e.preventDefault()

		const hideHero = e.target
		hideHero.parentElement.style.display = 'none'
	}
	return (
		<section className='main__hello jumbotron'>
			<h1 className='display-4'>Hello, world!!</h1>
			<p className='lead'>
				This is a simple hero unit, a simple jumbotron-style component for
				calling extra attention to featured content or information.
			</p>
			<hr className='my-4' />
			<p>
				It uses utility classes for typography and spacing to space content out
				within the larger container.
			</p>
			<a className='btn btn-info' href='#' role='button' onClick={handleClick}>
				Close
			</a>
		</section>
	)
}

export default HeroMessage
