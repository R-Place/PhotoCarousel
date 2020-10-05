import React from 'react';
import { DetailFooter } from './Styled.jsx';

const PhotoCounter = (props) => {

  return (
    <DetailFooter onClick={props.togggleModal}>
      <i className='photoicon far fa-image'></i>
      {props.count}
    </DetailFooter>

  )
}

export default PhotoCounter;