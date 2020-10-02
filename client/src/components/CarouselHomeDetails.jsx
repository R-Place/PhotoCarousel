import React from 'react';

const CarouselHomeDetails = (props) => (

  <div class="carouselhomedetails">
    <span>
      {`${props.homeAddress} | ${props.price.toLocaleString('us-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })} | 3 Beds 2 Baths `}
    </span>
  </div>
)

export default CarouselHomeDetails;