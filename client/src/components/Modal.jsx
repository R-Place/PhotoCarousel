import React from 'react';
import ReactDOM from 'react-dom';
import HeartButton from './HeartButton.jsx';
import { SaveButton, ModalSaveButton, ModalStyle, ModalGrid, HeaderStyle, CloseButton, BodyStyle, FooterStyle, BackDropStyle } from './Styled.jsx';
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
      <BackDropStyle>
        <ModalStyle>
          <ModalGrid>
            <HeaderStyle>
              <CloseButton onClick={(e) => { this.onClose(e) }}>
                X
              </CloseButton>
              <ModalSaveButton>
                <HeartButton />
              Save
              </ModalSaveButton>
            </HeaderStyle>
            <BodyStyle>
              <Carousel images={this.props.listing[0].image} price={this.props.listing[0].price} homeAddress={this.props.listing[0].homeAddress}/>
            </BodyStyle>
            <FooterStyle>
            </FooterStyle>
          </ModalGrid>
        </ModalStyle>
      </BackDropStyle>
    )
  }
}

export default Modal;