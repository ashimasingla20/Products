import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import s from '../../styles/ProductElements.scss';
const ProductElements = (props) =>  {
  return props.products.map((product, index) => <li key={index} className={s.element}>
    <div className={s.block}>
      <a href={`/pdp/${product.id}`}>
        <img src={product.img} 
          alt={`${product.name}`} 
          className={s.image}/>
      </a>
      <a href={`/pdp/${product.id}`} className={s.name}>
        {product.name}
      </a>
      {/* <Link to={`/pdp/${product.id}`} className={s.name}>
        {product.name}
      </Link> */}
      <p className={s.price}>
        Price: Rs{product.price}
      </p>
    </div>
  </li>);
}
export default withStyles(s)(ProductElements);
