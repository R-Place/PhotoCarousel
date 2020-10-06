import styled from 'styled-components';

const PhotoHeader = styled.img`
width: 100%;
height: 100px;
margin: auto;
text-align: center;
object-fit: contain;
`;

const StaticHeader = styled.div`
  position: static;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(232, 233, 234);
`;

const SearchBar = styled.input`
  padding-right: 300px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  border-radius: 8px;
  border: 1px solid rgb(245, 246, 247);
  border-radius: 8px;
  background-color: rgb(245, 246, 247);
`;

const SearchBarContainer = styled.div`
  margin-left: 15px;
  display: inline;
`;

const TruliaLogo = styled.img`
  object-fit: contain;
`;
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
  padding: 2px 16px;
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
  height: 40px;
  align-self: center;
  position: relative;
  left: -20px;
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
  outline:none;
  &:hover {
    background-color: rgb(170, 170, 170);
    cursor: pointer;
  }
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

const BreadCrumbs = styled.div`
  text-align: center;
  vertical-align: center;
  position: relative;
  top: -0px;
  left: -180px;
  position: relative;
  margin: 0px 0px 5px 0px;
`;

const SearchBreadcrumb = styled.span`
  color: rgb(0, 120, 130);
  font-size: 14px;
  font-weight: bold;
  margin-right: 30px;
`;

const BreadcrumbGreyElements = styled.span`
  color: rgb(134,144,153);
  size: 10px;
  margin: 2px;
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
`;

const BreadcrumbGreenElements = styled(BreadcrumbGreyElements)`
  color: rgb(0, 120, 130);
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
`;

const PreQualifiedButton = styled.button`
  margin: 10px 0px 16px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.5;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 120, 130);
  border-color: transparent;
  width: auto;
  padding: 8px 16px;
  box-shadow: none;
  &:hover {
    color: rgb(0, 120, 130);
    background-color: rgb(255, 255, 255);
    border-color: rgb(0, 120, 130);
  }
`;

const CarouselContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 10%);
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const CarouselHomeDetailsFormat = styled.div`
  color: white;
  grid-area: 10 / 3 / 11 / 7;
  margin: auto;
  font-size: 14px;
  position: relative;
  top: 10px;
`;

const CarouselPhotoCounterFormat = styled.div`
  color: white;
  grid-area: 10 / 1 / 11 / 2;
  margin: 20px 20px;
  font-size: 14px;
  position: relative;
  top: 10px;
`;

const DetailsBannerFormat = styled.div`
  position: absolute;
  display: flex;
  vertical-align: top;
  width: 100%;
  max-width: 992px;
  padding: 8px;
  box-sizing: border-box;
  z-index: 1;
`;

const HomeDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 900px;
  height: 100%;
  align-content: center;
  margin: auto;
`;

const HomeAddressContainer = styled.div`
  grid-area: 1 / 1 / 2 / 4;
  position: relative;
`;

const HomeInteriorDetails = styled.div`
  grid-area: 2 / 1 / 3 / 4;
  position: relative;
  left: -5px;
  margin: 15px 0px;
`;

const SaveButtonFormat = styled.div`
  position: relative;
`;

const HomePrice = styled.div`
  grid-area: 1 / 4 / 2 / 6;
  position: relative;
`;

const PreQualifiedButtonContainer = styled.div`
  grid-area: 2 / 4 / 3 / 6;
`;

const HeroContainer = styled.div`
  display: flex;
  padding: 0 4px;
  align-items: center;
`;

const TileContainer = styled.div`
  align-items: center;
  margin: auto;
  width: 992px;
  border-radius: 8px;
  position: relative;
`;

const TileBackground = styled.div`
  margin: auto;
  border-radius: 8px;
  overflow: hidden;
`;

const MainImage = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
`;

const Primary = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px 0px 0px 8px;
`;

const SecondaryImage = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
`;

const Secondary = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0px 8px 0px 0px;
`;

const TertiaryImage = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
`;

const Tertiary = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 8px 0px;
`;

const BackArrow = styled.div`
  z-index: 1;
  grid-area: 6 / 1 / 7 / 2 ;
  text-align: center;
`;

const ModalStyle = styled.div`
  background-color: black;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ModalGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(5, 20%);
`;

const HeaderStyle = styled.div`
  grid-area: 1 / 1 / 2 / 4;
  background-color: white;
  height: 45%;
  width: 100%;
  border-radius: 5px 5px 0px 0px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;

const CloseButton = styled.div`
  z-index: 2;
  grid-area: 1 / 10 / 1 / 11 ;
  text-align: right;
  align-self: center;
  margin: 0px 10px;
  font-size: 30px;
  color: rgb(59, 65, 68);
`;

const BodyStyle = styled.div`
  grid-area: 1 / 1 / 6 / 4;
  width: 100%;
  height: 100%;
  min-height: 550px;
  margin: auto;
`;

const FooterStyle = styled.div`
  position: absolute;
  bottom: 50px;
  right: 0px;
  width: 100%;
  border-top-color: silver;
  border-top-width: 1px;
  border-top-style: solid;
`;

const PhotoSection = styled.section`
  height: 100%;
  width: 100%;
`;

const PrimaryImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PhotoIcon = styled.i`
  padding: 0px 4px;
  font-size: 14px;
`;

const ForwardArrow = styled.div`
  grid-area: 6 / 8 / 7 / 9;
  text-align: center;
  z-index: 1;
`;

const MainPhoto = styled.div`
  grid-area: 2 / 2 / 10 / 9;
  position: relative;
  top: -4px;
  right: 20px;
  height: 100%;
  width: 100%;
  min-width: 560px;
  align-self: center;
`;

const StaticSchedulerFormat = styled.div`
  height: 100%;
  grid-area: 2 / 9 / 11 / 11;
  z-index: 1;
  width: 100%;
`;

const StaticSchedulerPhoto = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  object-fit: contain;
`;

const BackDropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(20px);
  padding: 50px;
  z-index: 2;
  transform: scale(1);
  transition-timing-function: ease-in-out;
`;
export {
  SearchBar,
  PhotoHeader,
  TruliaLogo,
  StaticHeader,
  SearchBarContainer,
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
  BreadCrumbs,
  SearchBreadcrumb,
  BreadcrumbGreyElements,
  BreadcrumbGreenElements,
  PreQualifiedButton,
  CarouselContainer,
  CarouselHomeDetailsFormat,
  CarouselPhotoCounterFormat,
  DetailsBannerFormat,
  SaveButtonFormat,
  HomeDetailsContainer,
  HomeAddressContainer,
  HomeInteriorDetails,
  HomePrice,
  PreQualifiedButtonContainer,
  HeroContainer,
  TileContainer,
  TileBackground,
  MainImage,
  Primary,
  SecondaryImage,
  Secondary,
  TertiaryImage,
  Tertiary,
  BackArrow,
  ModalStyle,
  ModalGrid,
  HeaderStyle,
  CloseButton,
  BodyStyle,
  FooterStyle,
  PhotoSection,
  PrimaryImage,
  PhotoIcon,
  ForwardArrow,
  MainPhoto,
  StaticSchedulerFormat,
  StaticSchedulerPhoto,
  BackDropStyle,
};
