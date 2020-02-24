import React from 'react';
import { Link } from 'react-router-dom';
const ProductElements = (props) =>  {
  return props.products.map((product, index) => <li key={index}>
    <Link to={`/pdp/${product.id}`}>
      <img src={product.img} alt={`${product.name}`}/>
    </Link>
    <Link to={`/pdp/${product.id}`}>
      {product.name}
    </Link>
  </li>);
}
export default ProductElements;
