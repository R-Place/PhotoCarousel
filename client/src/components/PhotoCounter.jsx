import React from 'react';
import { DetailFooter } from './Styled.jsx';
//import {Image2} from 'styled-icons';

const PhotoCounter = ({count}) => {

  return (
    <DetailFooter>
      {/* <Image2 /> */}
      {count}
    </DetailFooter>

  )
}

export default PhotoCounter;