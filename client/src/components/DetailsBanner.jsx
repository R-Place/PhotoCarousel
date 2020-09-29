import React from 'react';
import { StatusTags } from './Styled.jsx';
import NewBanner from './NewBanner.jsx';

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
          <NewBanner new={props.new} />
        </span>
      </div>
    </div>
  )
}

export default DetailsBanner;