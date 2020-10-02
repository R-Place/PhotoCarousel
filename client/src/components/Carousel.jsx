import React from 'react';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import Photo from './Photo.jsx';
import CarouselPhotoCounter from './CarouselPhotoCounter.jsx';
import CarouselHomeDetails from './CarouselHomeDetails.jsx';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      arrLength: this.props.images.length
    };
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  goToPrevSlide() {
    let index = this.state.activeIndex;
    let length = this.state.arrLength;

    if (index < 1) {
      index = length - 1;
    } else {
      index--;
    }
    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide() {
    console.log('i ran goToNextSlide');
    let index = this.state.activeIndex;
    let length = this.state.arrLength;

    if (index === (length - 1)) {
      index = 0;
    } else {
      index++;
    }

    console.log(index);

    this.setState({
      activeIndex: index
    }, () => (console.log(this.state)))
  }

  render() {
    return(
      <div className="carouselContainer">
        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <div className="mainphoto">
          <Photo activeIndex={this.state.activeIndex} images={this.props.images} />
        </div>
        <RightArrow goToNextSlide={this.goToNextSlide} />
        <div className="staticscheduler">
          <img className="staticschedulerphoto"src="https://test-awuradjoa-quansah.s3-us-west-1.amazonaws.com/Screen+Shot+2020-10-01+at+7.36.38+PM.png"></img>
        </div>
        <CarouselPhotoCounter activeIndex={this.state.activeIndex} imageCount={this.state.arrLength} />
        <CarouselHomeDetails price={this.props.price} homeAddress={this.props.homeAddress} />
      </div>
    )
  }
};

export default Carousel;
