import React from 'react';
import { StatusTags, SaveButton, HeartButtonEmpty } from './Styled.jsx';
import NewBanner from './NewBanner.jsx';
import HeartButton from './HeartButton.jsx';

const DetailsBanner = (props) => {

  return (
    <div className="detailsbanner">
      <div className="tags">
        <span>
          <StatusTags>
            <span className="for-sale-tag">
              For Sale
          </span>
          </StatusTags>
        </span>
        <span>
          <NewBanner new={props.listing.new} />
        </span>
      </div>
      <div className="savebutton">
        <SaveButton>
          {/* <HeartButtonEmpty>
          <i class="far fa-heart"></i>
          </HeartButtonEmpty> */}
          <HeartButton saved={props.listing.saved} saveListing={props.saveListing} />
          Save
        </SaveButton>
      </div>
    </div>
  )
}

export default DetailsBanner;