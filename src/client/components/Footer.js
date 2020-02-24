import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import s from '../styles/Footer.scss';
const Footer = () => {
  return (<footer className={s.footer}>
    <div className={s.text}>
      <span>Made with ❤️ in India</span>
    </div>
  </footer>)
}
export default withStyles(s)(Footer);
