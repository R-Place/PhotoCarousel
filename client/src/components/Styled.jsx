import styled from 'styled-components';

const StatusTags = styled.span`
  color: rgb(0, 178, 91);
  font-size: 12px;
  background-color: white;
  padding: 2px 4px;
  border-radius: 4px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-right: 4px;
  z-index: 1;
`;

const NewTag = styled(StatusTags)`
  color: rgb(5, 34, 134);
  z-index: 1;
`;
const SaveButton = styled.button`
  text-align: center;
  outline: none;
  position: relative;
  background-color: white;
  left: 755px;
  padding: 4px 16px;
  color: rgb(59, 65, 68);
  border-color: rgb(205, 209, 212);
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  &:hover {
    background-color: rgb(230, 230, 230);
    transition: transform .5s;
  }
  &:active {
    color: rgb(255, 255, 255);
    background-color: rgba(85, 85, 87, 0.678);
  }

`;

const ModalSaveButton = styled(SaveButton)`
  grid-area: 1 / 10 / 1 / 11 ;
  width: 110px;
  height: 45px;
  align-self: center;
  left: 0px;
  text-align: center;
`;

const HeartButtonEmpty = styled.i`
text-align: center;
font-size: 24px;
font-weight: bold;
padding-right: 10px;
color: rgb(0, 120, 130);
&:active {
  color: rgb(255, 255, 255);
}
`;

const HeartButtonFilled = styled(HeartButtonEmpty)`
  color: rgb(225, 99, 79);
  text-align: center;

`;

const DetailFooter = styled.button`
  text-align: center;
  position: relative;
  left: 930px;
  top: -30px;
  background-color: rgba(59, 65, 68, 0.8);
  padding: 0px 8px;
  border-radius: 4px;
  color: white;
  border: none;
  font-weight: bold;
`;

const Modal = styled.div`
  position:fixed;
  background: white;
  width: 80%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`;

const ModalBackground = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const ModalShow = styled(Modal)`
  display: block
`;

const ModalHide = styled(Modal)`
  display: none
`;

const Arrow = styled.i`
  color: rgb(59, 65, 68);
  font-size: 50px;
  &:hover {
    cursor: pointer;
  }
`;

const HomeAddress = styled.span`
  color: rgb(59, 65, 68);
  font-weight: bold;
  font-size: 28px;
`;

const SecondLineHomeAddress = styled.span`
  display: block;
  font-size: 16px;
  color: rgb(59, 65, 68);
`;

const HomeInterior = styled.span`
  margin: 6px;
`;

const HomeInteriorIcons = styled.i`
  margin-right: 6px;
  color: rgb(134, 144, 153);
`;

export {
  StatusTags,
  NewTag,
  SaveButton,
  HeartButtonEmpty,
  DetailFooter,
  HeartButtonFilled,
  ModalShow,
  ModalHide,
  ModalBackground,
  ModalSaveButton,
  Arrow,
  HomeAddress,
  SecondLineHomeAddress,
  HomeInterior,
  HomeInteriorIcons,
};
