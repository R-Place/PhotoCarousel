import React from 'react';

const HomeDetails = (props) => (
  <div>
    <h1>
      <span>{props.listing.homeAddress}</span>
      <span>{props.listing.cityState}</span>
    </h1>
  </div>
);

export default HomeDetails;
