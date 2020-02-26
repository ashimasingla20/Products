import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import HeaderStyle from '../styles/Header.scss';
const Header = () => {
	return (
		<nav className={HeaderStyle.header}>
			<div className={HeaderStyle.company}>
				<span className={HeaderStyle.companyText}>Tokopedia</span>
			</div>
		</nav>
	);
};
export default withStyles(HeaderStyle)(Header);
