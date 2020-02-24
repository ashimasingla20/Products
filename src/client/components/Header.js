import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import s from '../styles/Header.scss';
const Header = () => {
  return (
    <nav className={s.header}>
      <div className={s.company}>
        <span className={s.companyText}>Tokopedia</span>
      </div>
    </nav>
  );
};
export default withStyles(s)(Header);
