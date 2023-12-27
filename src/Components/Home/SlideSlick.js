import React from 'react';
import Slider from 'react-slick';
import './SlideSlick.scss';
import slide1 from '../../../src/assets/img/1a459042-2795-4e80-a443-6dd6f04af18d.png';

const SlideSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className='slick-warp'>
      <Slider {...settings}>
        <div className='slick-content'>
          <img src={slide1} />
        </div>
        <div className='slick-content'>
          <img src={slide1} />
        </div>
        <div className='slick-content'>
          <img src={slide1} />
        </div>
        <div className='slick-content'>
          <img src={slide1} />
        </div>
        <div className='slick-content'>
          <img src={slide1} />
        </div>
        <div className='slick-content'>
          <img src={slide1} />
        </div>
      </Slider>
    </div>
  );
};

export default SlideSlick;
