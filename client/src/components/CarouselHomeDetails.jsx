import React from 'react';
import { CarouselHomeDetailsFormat } from './Styled.jsx';

const CarouselHomeDetails = (props) => (

  <CarouselHomeDetailsFormat>
    <span>
      {`${props.homeAddress} | ${props.price.toLocaleString('us-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })} | 3 Beds 2 Baths `}
    </span>
  </CarouselHomeDetailsFormat>
)

export default CarouselHomeDetails;