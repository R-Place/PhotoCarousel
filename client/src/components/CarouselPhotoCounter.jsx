import React from 'react';

const CarouselPhotoCounter = (props) => (
  <div className="carouselphotocounter">
    <span>
      {`${props.activeIndex + 1}/${props.imageCount}`}
    </span>
  </div>
)

export default CarouselPhotoCounter;