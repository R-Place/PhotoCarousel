import React from 'react';
import { CarouselPhotoCounterFormat } from './Styled.jsx';

const CarouselPhotoCounter = (props) => (
  <CarouselPhotoCounterFormat>
      <span>
        {`${props.activeIndex + 1}/${props.imageCount}`}
      </span>
  </CarouselPhotoCounterFormat>
)

export default CarouselPhotoCounter;