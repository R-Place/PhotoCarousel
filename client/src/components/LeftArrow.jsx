import React from 'react';
import { Arrow } from './Styled.jsx';


class LeftArrow extends React.Component {

  constructor(props) {
    super(props);
  }

  goToPrevSlide(e){
    this.props.goToPrevSlide && this.props.goToPrevSlide(e)
  }

  render() {
    return (
      <div className='backArrow' onClick={(e) => {this.goToPrevSlide(e)}}>
        <Arrow>
          <i className="fas fa-chevron-circle-left" aria-hidden='true'></i>
        </Arrow>
      </div>
    )
  }
}

export default LeftArrow;
