import React from 'react';
import Slider from 'react-slick';
import withStyles from 'isomorphic-style-loader/withStyles'
import s from '../../styles/Carousel.scss';
const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true
}
const Carousel = (props) => {
  console.log(props.carouselData);
  return (
    <div className={s.carousel}>
      <Slider {...sliderSettings}>
        {
          props.carouselData.map((carouselEle, carouselIndex) => {
            return (<img key={`carousle-${carouselIndex}`}
                className={s.element}
                src={carouselEle.url} 
                alt={carouselEle.title} /> )
          })
        }
      </Slider>
    </div>
  )
}
export default withStyles(s)(Carousel);
