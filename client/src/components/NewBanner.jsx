import React from 'react';
import { NewTag } from './Styled.jsx';

const NewBanner = (props) => {
  if (!props.new) {
    return null;
  }
  return (
    <NewTag>
      <span>New</span>
    </NewTag>
  )
}

export default NewBanner;