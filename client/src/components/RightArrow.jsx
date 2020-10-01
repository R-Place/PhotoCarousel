import React from 'react';
import { Arrow } from './Styled.jsx';

class RightArrow extends React.Component {

  constructor(props) {
    super(props);
  }

  goToNextSlide(e){
    this.props.goToNextSlide && this.props.goToNextSlide(e)
  }

  render(){
    return (
      <div className='forwardArrow' onClick={(e) => {this.goToNextSlide(e)}}>
        <Arrow>
          <i className="fas fa-chevron-circle-right" aria-hidden='true'></i>
        </Arrow>
      </div>
    )
  }

}

export default RightArrow;