import React from 'react';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import Photo from './Photo.jsx';
import CarouselPhotoCounter from './CarouselPhotoCounter.jsx';
import CarouselHomeDetails from './CarouselHomeDetails.jsx';
import { CarouselContainer, MainPhoto, StaticSchedulerFormat, StaticSchedulerPhoto } from './Styled.jsx';
import KeyboardEventHandler from 'react-keyboard-event-handler';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      arrLength: this.props.images.length
    };
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    // this.keyPressLeft = this.keyPressLeft.bind(this);
  }

  goToPrevSlide() {
    console.log('it worked!')
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
    })
  }

  // keyPressLeft() {
  //   console.log('i ran!')
  //   if (e.charCode === '37') {
  //     // this.goToPrevSlide();
  //     console.log('You pressed the left key!')
  //   };
  // }

  render() {
    return(
      <CarouselContainer>
        <KeyboardEventHandler
          handleKeys={['left']}
          onKeyEvent={(key, e) => this.goToPrevSlide()}
        />
        <KeyboardEventHandler
          handleKeys={['right']}
          onKeyEvent={(key, e) => this.goToNextSlide()}
        />
        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <MainPhoto>
          <Photo activeIndex={this.state.activeIndex} images={this.props.images} />
        </MainPhoto>
        <RightArrow goToNextSlide={this.goToNextSlide} />
        <StaticSchedulerFormat>
          <StaticSchedulerPhoto src="https://test-awuradjoa-quansah.s3-us-west-1.amazonaws.com/Screen+Shot+2020-10-01+at+7.36.38+PM.png">
          </StaticSchedulerPhoto>
        </StaticSchedulerFormat>
        <CarouselPhotoCounter activeIndex={this.state.activeIndex} imageCount={this.state.arrLength} />
        <CarouselHomeDetails price={this.props.price} homeAddress={this.props.homeAddress} />
      </CarouselContainer>
    )
  }
};

export default Carousel;
