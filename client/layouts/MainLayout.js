import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../redux/actions/auth/authActions'
import { Link } from 'react-router'
import Footer from '../components/common/Footer'
import { PageHeader } from 'react-bootstrap'
import Navigation from '../components/common/Navigation'

class MainLayout extends React.Component {

	_logout = () => {
		this.props.dispatch(logout())
		this.context.router.push('/')
	}

	render() {
		return (
			<div className='app'>
				<header className='primary-header'></header>
				<Navigation isAuth={this.props.auth ? true : false} _logout={this._logout}/>
				<main>
					{this.props.children}
				</main>
				<Footer
					footerText={ footerConfig.footerText }
				/>
			</div>
		)
	}
}

const footerConfig = {
	footerText: 'Home Layout'
}

MainLayout.contextTypes = {
	router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
	return {
		auth: state.auth.authToken
	}
}

export default connect(mapStateToProps)(MainLayout)
