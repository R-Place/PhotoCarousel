import React from 'react';
import { ForwardArrow, Arrow } from './Styled.jsx';

class RightArrow extends React.Component {

  constructor(props) {
    super(props);
  }

  goToNextSlide(e){
    this.props.goToNextSlide && this.props.goToNextSlide(e)
  }

  render(){
    return (
      <ForwardArrow onClick={(e) => {this.goToNextSlide(e)}}>
        <Arrow>
          <i className="fas fa-chevron-right" aria-hidden='true'> </i>
        </Arrow>
      </ForwardArrow>
    )
  }

}

export default RightArrow;