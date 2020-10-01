import React from 'react';
import { Arrow } from './Styled.jsx';


class LeftArrow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.goToPrevSlide);
    return (
      <div className='backArrow' onClick={this.props.goToPrevSlide}>
        <Arrow>
          <i className="fas fa-chevron-circle-left" aria-hidden='true'></i>
        </Arrow>
      </div>
    )
  }
}

export default LeftArrow;
