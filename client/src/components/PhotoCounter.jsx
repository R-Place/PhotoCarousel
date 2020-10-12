import React from 'react';
import { DetailFooter, BoxPhotoIcon } from './Styled.jsx';

const PhotoCounter = (props) => {
  return (
    <DetailFooter onClick={props.toggleModal}>
      <BoxPhotoIcon className='far fa-image' />
      {props.count}
    </DetailFooter>

  )
}

export default PhotoCounter;