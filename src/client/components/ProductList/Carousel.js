import React from 'react';
import Slider from 'react-slick';
import withStyles from 'isomorphic-style-loader/withStyles'
import carouselStyle from '../../styles/Carousel.scss';
const sliderSettings = {
	dots: true,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: true,
	autoplay: true
}
const Carousel = (props) => {
	return (
		<div className={carouselStyle.carousel}>
			<Slider {...sliderSettings}>
			{
				props.carouselData.map((carouselEle, carouselIndex) => {
					return (<img key={`carousle-${carouselIndex}`}
						className={carouselStyle.element}
						src={carouselEle.url} 
						alt={carouselEle.title} /> )
				})
			}
			</Slider>
		</div>
	)
}
export default withStyles(carouselStyle)(Carousel);
