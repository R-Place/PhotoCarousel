import React from 'react';
import { PhotoHeader, StaticHeader, TruliaLogo, SearchBar, SearchBarContainer, BuyRentMortgage, DropDownMenu, ProfileInfo, ListIcon, SearchButton, SearchIcon,StaticHeaderContainer } from './Styled.jsx';
import { BuyDropDownMenu, RentDropDownMenu, MortgageDropDownMenu } from './DropDownMenus.jsx';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <StaticHeaderContainer>
        <PhotoHeader src="https://test-awuradjoa-quansah.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-25+at+10.26.19+PM.png">
        </PhotoHeader>
      </StaticHeaderContainer>
    )
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     buytoggle: false,
  //     renttoggle: false,
  //     mortgagetoggle: false
  //   }
  //   this.toggleBuyOpen = this.toggleBuyOpen.bind(this);
  //   this.toggleBuyClose = this.toggleBuyClose.bind(this);
  //   this.toggleRentClose = this.toggleRentClose.bind(this);
  //   this.toggleRentOpen = this.toggleRentOpen.bind(this);
  //   this.toggleMortgageOpen = this.toggleMortgageOpen.bind(this);
  //   this.toggleMortgageClose = this.toggleMortgageClose.bind(this);
  // }

  // toggleBuyOpen() {
  //   this.setState({
  //     buytoggle: true
  //   });
  // }

  // toggleBuyClose() {
  //   this.setState({
  //     buytoggle: false
  //   });
  // }

  // toggleRentOpen() {
  //   this.setState({
  //     renttoggle: true
  //   });
  // }

  // toggleRentClose() {
  //   this.setState({
  //     renttoggle: false
  //   });
  // }

  // toggleMortgageOpen() {
  //   this.setState({
  //     mortgagetoggle: true
  //   });
  // }

  // toggleMortgageClose() {
  //   this.setState({
  //     mortgagetoggle: false
  //   });
  // }

  // render() {
  //   return(
  //     <StaticHeader>
  //       <TruliaLogo src="https://test-awuradjoa-quansah.s3-us-west-1.amazonaws.com/Screen+Shot+2020-10-03+at+3.56.10+PM.png">
  //       </TruliaLogo>
  //       <SearchBarContainer>
  //         <SearchBar placeholder="Search for City, Neighborhood, Zip, County, School">
  //         </SearchBar>
  //         <SearchButton>
  //           <SearchIcon className="fas fa-search">
  //           </SearchIcon>
  //         </SearchButton>
  //       </SearchBarContainer>
  //       <DropDownMenu onMouseEnter={this.toggleBuyOpen} onMouseLeave={this.toggleBuyClose}>
  //         <BuyRentMortgage>
  //           <span>Buy</span>
  //         </BuyRentMortgage>
  //         <BuyDropDownMenu buytoggle={this.state.buytoggle} />
  //       </DropDownMenu>
  //       <DropDownMenu onMouseEnter={this.toggleRentOpen} onMouseLeave={this.toggleRentClose}>
  //         <BuyRentMortgage>
  //           <span>Rent</span>
  //         </BuyRentMortgage>
  //         <RentDropDownMenu renttoggle={this.state.renttoggle}/>
  //       </DropDownMenu>
  //       <DropDownMenu onMouseEnter={this.toggleMortgageOpen} onMouseLeave={this.toggleMortgageClose}>
  //         <BuyRentMortgage>
  //           <span>Mortgage</span>
  //         </BuyRentMortgage>
  //         <MortgageDropDownMenu mortgagetoggle={this.state.mortgagetoggle} />
  //       </DropDownMenu>
  //       <ProfileInfo>
  //         <BuyRentMortgage>
  //           Saved Homes
  //         </BuyRentMortgage>
  //         <BuyRentMortgage>
  //           Saved Searches
  //         </BuyRentMortgage>
  //         <BuyRentMortgage>
  //           Jane Doe
  //         </BuyRentMortgage>
  //         <ListIcon className="fas fa-bars">
  //         </ListIcon>
  //       </ProfileInfo>
  //     </StaticHeader>
  //   )
  // }
}

export default Header;