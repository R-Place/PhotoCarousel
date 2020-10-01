import React from 'react';
import ReactDOM from 'react-dom';
import HeartButton from './HeartButton.jsx';
import { SaveButton, ModalSaveButton } from './Styled.jsx';
import Carousel from './Carousel.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  onClose(e) {
    console.log('i ran onClose')
    this.props.onClose && this.props.onClose(e)
  }

  disableOnClick(e) {
    console.log('i ran disable onClick')
    this.props.disableOnClick && this.props.disableOnClick(e);
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="backdropStyle">
        <div className="modalStyle">
          <div className="headerStyle">
            <ModalSaveButton>
              <HeartButton />
              Save
            </ModalSaveButton>
          </div>
          <div className="bodyStyle">
            <Carousel images={this.props.listing[0].image} />
          </div>
          <div className="footerStyle">
            <button className="test" onClick={(e) => { this.onClose(e) }}> Close</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;