import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import footerStyle from '../styles/Footer.scss';
const Footer = () => {
	return (<footer className={footerStyle.footer}>
		<div className={s.text}>
			<span>Made with ❤️ in India</span>
		</div>
	</footer>)
}
export default withStyles(footerStyle)(Footer);
