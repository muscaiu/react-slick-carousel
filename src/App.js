import React, { Component } from 'react';
import Slider from 'react-slick'

import './App.css';

class App extends Component {
  render() {

    let settings = {
      dots: true,
      autoplay: false,
      infinite: false,
      speed: 500,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 6,
          }
        }],
    }
    return (
      <div className="render">
        <Slider {...settings}>
          <div className="product-item">
            <a className="product-link">
              <div><img src="https://cdn1-images.nutaku.com/images/manage/games/dragon-providence/banner_220_150.jpg" alt="" /></div>
            </a>
          </div>
          <div className="product-item">
            <a className="product-link">
              <div><img src="https://cdn1-images.nutaku.com/images/manage/games/millennium-war-aigis/banner_220_150.jpg" alt="" /></div>
            </a>
          </div>
          <div className="product-item">
            <a className="product-link">
              <div><img src="https://cdn1-images.nutaku.com/images/manage/games/mononofu/banner_220_150.jpg" alt="" /></div>
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}

export default App;
