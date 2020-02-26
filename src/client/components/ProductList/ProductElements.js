import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import ProductElementStyles from '../../styles/ProductElements.scss';
const ProductElements = (props) =>  {
	return props.products.map((product, index) => <li key={index} className={ProductElementStyles.element}>
		<div className={ProductElementStyles.block}>
			<a href={`/pdp/${product.id}`}>
				<img src={product.img} 
					alt={`${product.name}`} 
					className={ProductElementStyles.image}/>
			</a>
			<a href={`/pdp/${product.id}`} className={ProductElementStyles.name}>
				{product.name}
			</a>
			<p className={ProductElementStyles.price}>
				Price: Rs{product.price}
			</p>
		</div>
	</li>);
}
export default withStyles(ProductElementStyles)(ProductElements);
