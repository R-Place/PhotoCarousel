import React from 'react';
import DetailsBanner from './DetailsBanner.jsx';

const ImageBox = (props) => {
  console.log(props.listing.id);

  return (

    <div className="hero-container">
      <div className="tile-container">
        <DetailsBanner new={props.listing.new}/>
        <div className="tile-background">
          <div className="box">
            <div className="column mainimage zoom">
              <img className="primary" src={props.listing.image} />
            </div>
            <div className="column secondaryimage zoom">
              <img className="secondary" src={props.listing.interior1} />
            </div>
            <div className="tertiaryimage zoom">
              <img className="tertiary" src={props.listing.interior2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageBox;