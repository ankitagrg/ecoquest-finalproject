import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Badge from './Badge';

const Carousel = ({ badges }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0'
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {badges.map((badge, index) => (
          <Badge key={index} src={badge.src} alt={badge.alt} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
