import React from 'react';
import {HeartButtonEmpty, HeartButtonFilled} from './Styled.jsx';
const HeartButton = (props) => {
  if(!props.saved) {
    return ( <HeartButtonEmpty>
      <i className="far fa-heart"></i>
    </HeartButtonEmpty> )
  }

  return (
    <HeartButtonFilled>
      <i className="fas fa-heart"></i>
    </HeartButtonFilled>
  )
};

export default HeartButton;
