import React from 'react'
import { Col } from 'react-bootstrap'

const Footer = ({ footerText }) => {
	return (
		<Col md={7}>
			<hr></hr>
			<p>{ footerText }</p>
		</Col>
	)
}

Footer.propTypes = {
	footerText: React.PropTypes.string
}

export default Footer
