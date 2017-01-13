import React from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, NavItem} from 'react-bootstrap'
import { checkWebToken } from '../../utils/authUtils'

const Navigation = ({ _logout, isAuth}) => {
	const authItems = (
		<ul className='nav navbar-nav navbar-right'>
			<li><Link to='/dashboard'>Dashboard</Link></li>
			<li><a href="#" onClick={_logout}>Logout</a></li>
		</ul>
	)

	const	unAuthItems = (
		<ul className='nav navbar-nav navbar-right'>
			<li><Link to='/login'>Sign In</Link></li>
			<li><Link to='/signup'>Sign Up</Link></li>
		</ul>
	)

	return (
		<nav className='navbar navbar-inverse navbar-fixed-top'>
			<div className='container-fluid'>
				<div className='navbar-header'>
					<button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
						<span className='sr-only'>Toggle navigation</span>
						<span className='icon-bar'></span>
						<span className='icon-bar'></span>
						<span className='icon-bar'></span>
					</button>
					<Link className='navbar-brand' to='/'>Koa-React-Starter</Link>
				</div>
				<div id='navbar' className='navbar-collapse collapse'>
					{isAuth ? authItems : unAuthItems}
				</div>
			</div>
		</nav>
	)
}

Navigation.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default Navigation;
