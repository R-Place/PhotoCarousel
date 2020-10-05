import React from 'react';
import ReactDOM from 'react-dom';
import HeartButton from './HeartButton.jsx';
import { SaveButton, ModalSaveButton } from './Styled.jsx';
import Carousel from './Carousel.jsx';
import LeftArrow from './LeftArrow.jsx';

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
      <div className="backdropStyle fadein">
        <div className="modalStyle">
          <div className="modalGrid">
            <div className="headerStyle">
              <div className="closebutton" onClick={(e) => { this.onClose(e) }}> X </div>
              <ModalSaveButton>
                <HeartButton />
              Save
              </ModalSaveButton>
            </div>
            <div className="bodyStyle">
              <Carousel images={this.props.listing[0].image} price={this.props.listing[0].price} homeAddress={this.props.listing[0].homeAddress}/>
            </div>
            <div className="footerStyle">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;