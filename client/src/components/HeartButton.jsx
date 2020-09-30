import React from 'react';
import {HeartButtonEmpty, HeartButtonFilled} from './Styled.jsx';
const HeartButton = (props) => {
  if(!props.saved) {
    return ( <HeartButtonEmpty onClick={props.saveListing} >
      <i className="far fa-heart"></i>
    </HeartButtonEmpty> )
  }

  return (
    <HeartButtonFilled onClick={props.saveListing} >
      <i className="fas fa-heart"></i>
    </HeartButtonFilled>
  )
};

export default HeartButton;
