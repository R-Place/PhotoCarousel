//import styled from 'styled-components';

const PhotoHeader = styled.img`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  width: 100%;
  margin: auto;
  text-align: center;
  object-fit: contain;
  height: 100%;
`;

const Active = styled.img`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: flex;
  height: 100%;
  width: 90%;
`;

const Inactive = styled.img`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: none;
`;

const BoxPhotoIcon = styled.i`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  padding: 0px 4px;
  font-size: 16px;
`;

const ImageBoxFormat = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  display: grid;
  margin: auto;
  height: 425px;
  width: 992px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 50% 50% 50%;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  overflow: hidden;
  transition: transform .5s ease;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

`;
const StaticHeader = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  position: fixed;
  background-color: white;
  padding: 10px;
  width: 100%;
  top: 0px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(232, 233, 234);
  z-index: 2;
`;

const SearchBar = styled.input`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  padding-right: 200px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  border-radius: 8px;
  border: 1px solid rgb(245, 246, 247);
  border-radius: 8px;
  background-color: rgb(245, 246, 247);
  box-sizing: border-box;
`;

const SearchBarContainer = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  margin-left: 15px;
  margin-right: -40px;
  box-sizing: border-box;
  display: inline;
`;

const TruliaLogo = styled.img`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  object-fit: contain;
`;
const StatusTags = styled.span`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
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
  ${ImageBoxFormat}:hover & {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const NewTag = styled(StatusTags)`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: rgb(5, 34, 134);
  z-index: 1;
`;
const SaveButton = styled.button`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  text-align: center;
  vertical-align: middle;
  outline: 0;
  position: absolute;
  background-color: white;
  padding: 2px 16px;
  white-space: nowrap;
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
    background-color: rgb(134, 144, 153);
    outline: none;
    border-color: transparent;
    transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
  }
  &:focus {
    border-color: rgb(134, 144, 153);
    outline: none;
  }
`;

const ModalSaveButton = styled(SaveButton)`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  width: 110px;
  height: 40px;
  align-self: center;
  position: relative;
  text-align: center;
  z-index: 2;
`;

const ModalSaveButtonContainer = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  grid-area: 1 / 10 / 1 / 11 ;
  margin: auto;
  position: relative;
  left: -40px;
`;
const HeartButtonEmpty = styled.i`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
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
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: rgb(225, 99, 79);
  text-align: center;

`;

const DetailFooter = styled.button`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
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
  outline: none;
  &:hover {
    background-color: rgb(170, 170, 170);
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`;

const Arrow = styled.i`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  background: #3B4145;
  color: white;
  padding: 15px 20px;
  color: white;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  &:hover {
    cursor: pointer;
    background-color: rgb(134, 144, 153);
  }
  &:active {
    background-color: rgb(134, 144, 153);
  }
`;

const HomeAddress = styled.span`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: rgb(59, 65, 68);
  font-weight: bold;
  font-size: 28px;
`;

const SecondLineHomeAddress = styled.span`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  display: block;
  font-size: 16px;
  color: rgb(59, 65, 68);
`;

const HomeInterior = styled.span`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  margin: 6px;
`;

const HomeInteriorIcons = styled.img`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  height: 20px;
  padding-right: 4px;
  position: relative;
  top: -2px;
`;

const BreadCrumbs = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  text-align: center;
  vertical-align: center;
  position: relative;
  left: -220px;
  position: relative;
  margin: 6px 0px 8px 0px;
  font-size: 14px;
  letter-spacing: -0.1px;
`;

const SearchBreadcrumb = styled.span`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: rgb(0, 120, 130);
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
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
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
  position: relative;
  top: 70px;
  &:hover {
    color: rgb(0, 120, 130);
    background-color: rgb(255, 255, 255);
    border-color: rgb(0, 120, 130);
  }
`;

const CarouselContainer = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
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
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: white;
  grid-area: 10 / 3 / 11 / 7;
  margin: auto;
  font-size: 14px;
  position: relative;
  top: 10px;
  white-space: nowrap;
`;

const CarouselPhotoCounterFormat = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: white;
  grid-area: 10 / 1 / 11 / 3;
  margin: 20px 20px;
  font-size: 14px;
  position: relative;
  top: 10px;
  white-space: nowrap;

`;

const DetailsBannerFormat = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
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
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 900px;
  height: 100%;
  align-content: center;
  margin: auto;
`;

const HomeAddressContainer = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  grid-area: 1 / 1 / 2 / 4;
  position: relative;
`;

const HomeInteriorDetails = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  grid-area: 1 / 1 / 3 / 4;
  left: -5px;
  margin: 15px 0px;
  position: relative;
  top: 70px;
`;

const SaveButtonFormat = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  position: absolute;
  left: 880px;
`;

const HomePrice = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  grid-area: 1 / 4 / 2 / 6;
  position: relative;
  right: 60px;
`;

const PreQualifiedButtonContainer = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  grid-area: 1 / 4 / 3 / 6;
  position: relative;
  right: 60px;
  z-index: 1;
`;

const StaticBookerContainer = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  grid-area: 1 / 6 / 2 / 8;
  position: relative;
  right: 22px;
`;

const StaticBooker = styled.img`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 5px;
`;

const HeroContainer = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  display: flex;
  padding: 0 4px;
  align-items: center;
  height: 100%;
`;

const TileContainer = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  align-items: center;
  margin: auto;
  width: 992px;
  height: 100%;
  border-radius: 8px;
  position: relative;
`;

const TileBackground = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  margin: auto;
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
`;

const MainImage = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
`;

const Primary = styled.img`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  width: 100%;
  height: 100%;
  border-radius: 8px 0px 0px 8px;
`;

const SecondaryImage = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  grid-column-start: 4;
  grid-column-end: 5;
`;

const Secondary = styled.img`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  width: 100%;
  height: 100%;
  border-radius: 0px 8px 0px 0px;
`;

const TertiaryImage = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  grid-column-start: 4;
  grid-column-end: 5;
`;

const Tertiary = styled.img`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 8px 0px;
`;

const BackArrow = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  z-index: 1;
  grid-area: 6 / 1 / 7 / 2 ;
  text-align: center;
  justify-self: center;
  z-index: 1;
  width: 48px;
  height: 48px;
`;

const ModalStyle = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  background-color: black;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  min-width: 750px;
  min-height: 615px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  transition-timing-function: ease;
  transition: 2s;
`;

const ModalGrid = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(5, 20%);
`;

const HeaderStyle = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  grid-area: 1 / 1 / 2 / 4;
  background-color: white;
  height: 50px;
  width: 100%;
  border-radius: 5px 5px 0px 0px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;

const CloseButton = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  z-index: 2;
  grid-area: 1 / 10 / 1 / 11 ;
  text-align: right;
  align-self: center;
  margin: 0px 15px;
  font-size: 24px;
  position: relative;
  color: rgb(59, 65, 68);
`;

const Close = styled.span`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  text-align: right;
  &:hover {
    color: rgb(0,120,130);
    cursor: pointer;
  }
`;

const BodyStyle = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  grid-area: 1 / 1 / 6 / 4;
  width: 100%;
  height: 100%;
  margin: auto;
`;

const FooterStyle = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  position: absolute;
  bottom: 50px;
  right: 0px;
  width: 100%;
  border-top-color: silver;
  border-top-width: 1px;
  border-top-style: solid;
`;

const PhotoSection = styled.section`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  height: 100%;
  width: 100%;
`;

const PrimaryImage = styled.img`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PhotoIcon = styled.i`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  padding: 0px 4px;
  font-size: 14px;
`;

const ForwardArrow = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  grid-area: 6 / 8 / 7 / 9;
  align-self: center;
  justify-self: center;
  z-index: 1;
  width: 48px;
  height: 48px;
`;

const MainPhoto = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
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
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  height: 100%;
  grid-area: 2 / 9 / 11 / 11;
  z-index: 1;
  width: 100%;
`;

const StaticSchedulerPhoto = styled.img`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  object-fit: contain;
`;

const BackDropStyle = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(25px);
  padding: 50px;
  z-index: 3;
  transform: scale(1);
  transition-timing-function: ease-out;
  transition: 2s;
`;

const BuyRentMortgage = styled.span`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  box-sizing: border-box;
  padding: 10px 15px;
  margin: 0px 4px;
  color: rgb(59, 65, 68);
  font-weight: bold;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
    border-radius: 5px;
    color: white;
    background-color: rgb(0,120,130);
    padding: 8px 15px;
  }
`;

const StyledLink = styled.a`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  font-weight: bold;
  &:hover {
    color: rgb(59, 65, 68);
    text-decoration: none;
    cursor: auto;
  }
`;

const DropDownMenu = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  display: inline-block;
  position: relative;
`;

const ProfileInfo = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  display: inline-block;
  position: relative;
  left: 14%;
`;

const ListIcon = styled.i`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: rgb(0, 120, 130);
  margin-left: 20px;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;

const WebPageFormat = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  margin-top: 80px;
  height: 100%;
  width: 100%;

`;

const SearchButton = styled.div`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  position: relative;
  display: inline-block;
  justify-content: center;
  align-items: center;
  right: 0px;
  left: -3%;
  top: 0px;
  height: 100%;
  cursor: pointer;
  background-color: rgb(217, 60, 35);
  padding: 9px 14px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  transition: background-color 0.15s ease 0s;
  &:hover {
    cursor: pointer;
    background-color: rgb(156, 17, 20);
  }
`;

const SearchIcon = styled.i`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: white;
`;

const NewestListings = styled.a`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  border-top: silver;
  border-top-width: 1px;
  border-top-style: solid;
  text-align: center;
  white-space: nowrap;
  padding: 12px 0px;
  &:hover {
    color: rgb(59, 65, 68);
    text-decoration: none;
    background-color: #ddd;
  }
`;

const DropDownContentLinks = styled.a`
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: rgb(59, 65, 68);
  padding: 6px 40px 6px 14px;
  text-decoration: none;
  display: block;
  letter-spacing: -0.1;
  text-align: left;
  &:hover {
    color: rgb(59, 65, 68);
    text-decoration: none;
    background-color: #ddd;
  }
`;

const StaticPhotoLocalInfo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StaticPhotoHomeDetails = styled.img`

`;
const StaticPhotoMapContainer = styled.div`
  grid-area: 1 / 4 / 1 / 5;
  position: relative;
  left: 123px;
`;
const StaticPhotoMap = styled.img`
`;

const StaticPhotoLocalInfoContainer = styled.div`
  position: relative;
  grid-area: 1 / 1 / 3 / 6;
  position: relative;
  top: -48px;
  right: 20px;
`;

const StaticPhotoHomeDetailsContainer = styled.div`
  position: relative;
  grid-area: 3 / 1 / 4 / 4;
  right: 23px;
  bottom: 195px;
`;

const StaticHeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  z-index: 2;
`;
export {
  SearchBar,
  ImageBoxFormat,
  BoxPhotoIcon,
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
  ModalSaveButtonContainer,
  ForwardArrow,
  MainPhoto,
  StaticSchedulerFormat,
  StaticSchedulerPhoto,
  BackDropStyle,
  BuyRentMortgage,
  StyledLink,
  DropDownMenu,
  ProfileInfo,
  ListIcon,
  WebPageFormat,
  SearchButton,
  SearchIcon,
  NewestListings,
  DropDownContentLinks,
  Close,
  StaticBookerContainer,
  StaticBooker,
  StaticPhotoLocalInfo,
  StaticPhotoHomeDetails,
  StaticPhotoMap,
  StaticPhotoLocalInfoContainer,
  StaticPhotoMapContainer,
  StaticPhotoHomeDetailsContainer,
  StaticHeaderContainer,
  Active,
  Inactive
};
