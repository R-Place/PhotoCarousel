import React from 'react';
import { ModalShow, ModalHide, ModalBackground } from './Styled.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.show) {
      return <ModalShow><div><ModalBackground><section></section></ModalBackground>Hello!</div></ModalShow>;
    }
    return(
      <div>
        <h2>Hello Modal</h2>
        <button onClick={this.props.toggleModal}>Hide Modal</button>
      </div>
    )
  }
};

export default Modal;
