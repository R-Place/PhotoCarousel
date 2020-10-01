import React from 'react';
import { DetailFooter } from './Styled.jsx';

const PhotoCounter = ({count}) => {

  return (
    <DetailFooter>
      {count}
    </DetailFooter>

  )
}

export default PhotoCounter;