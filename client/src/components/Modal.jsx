import React from 'react';
import ReactDOM from 'react-dom';
import HeartButton from './HeartButton.jsx';
import { SaveButton, ModalSaveButton, ModalStyle, ModalGrid, HeaderStyle, CloseButton, BodyStyle, FooterStyle, BackDropStyle, Close, ModalSaveButtonContainer } from './Styled.jsx';
import Carousel from './Carousel.jsx';
import LeftArrow from './LeftArrow.jsx';
import KeyboardEventHandler from 'react-keyboard-event-handler';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  onClose(e) {
    console.log('i ran onClose')
    this.props.onClose && this.props.onClose(e)
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <BackDropStyle onClick={(e) => { this.onClose(e) }}>
        <ModalStyle onClick={(e) => {e.stopPropagation()}}>
          <ModalGrid>
            <HeaderStyle>
              <CloseButton>
                <KeyboardEventHandler handleKeys={['esc']} onKeyEvent={(key, e) => { this.onClose(e) }}/>
                <Close onClick={(e) => { this.onClose(e) }}>
                  X
                </Close>
              </CloseButton>
              <ModalSaveButtonContainer>
                <ModalSaveButton onClick={this.props.saveListing}>
                  <HeartButton saved={this.props.listing[0].saved} />
                  Save
                </ModalSaveButton>
              </ModalSaveButtonContainer>
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