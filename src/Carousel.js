import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const Carouselview = () => {
    return (
        <div style={{ display: 'block', width: '100vw', padding: 30 }}>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
    src={window.location.origin + '/static/images/offers/offer1.jpg'}
                alt="Image One"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
    src={window.location.origin + '/static/images/offers/offer2.jpg'}
                alt="Image Two"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
    src={window.location.origin + '/static/images/offers/offer3.jpg'}
                alt="Image Three"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
    src={window.location.origin + '/static/images/offers/offer4.jpg'}
                alt="Image Four"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
    src={window.location.origin + '/static/images/offers/offer5.jpg'}
                alt="Image Five"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      );
}

export default Carouselview;