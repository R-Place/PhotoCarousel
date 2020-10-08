import React from 'react';
import { StyledLink, NewestListings, DropDownContentLinks } from './Styled.jsx';

const BuyDropDownMenu = (props) => {
    if (!props.buytoggle) {
      return null;
    }
    return (
      <div className="dropdown-content">
        <StyledLink href="#">
          San Francisco
        </StyledLink>
        <DropDownContentLinks href="#">
          Homes for Sale
        </DropDownContentLinks>
        <DropDownContentLinks href="#">
          Open Houses
        </DropDownContentLinks>
        <DropDownContentLinks href="#">
          New Homes
        </DropDownContentLinks>
        <DropDownContentLinks href="#">
          Recently Sold
        </DropDownContentLinks>
        <NewestListings href="#">
           See Newest Listings
        </NewestListings>
      </div>
    )

}

const RentDropDownMenu = (props) => {
  if (!props.renttoggle) {
    return null;
  }
  return (
    <div className="dropdown-content">
      <StyledLink href="#">
        San Francisco
        </StyledLink>
      <a href="#">All Rentals</a>
      <a href="#">Apartments For Rent</a>
      <a href="#">Houses For Rent</a>
      <a href="#">See Newest Listings</a>
      <div className="newestlistings">
        <a href="#">Post A Rental Listing</a>
      </div>
    </div>
  )
}

const MortgageDropDownMenu = (props) => {

  if (!props.mortgagetoggle) {
    return null;
  }

  return (
    <div className="dropdown-content">
      <StyledLink href="#">
        San Francisco
        </StyledLink>
      <a href="#">Mortgage Overview</a>
      <a href="#">Get Pre-Qualified</a>
      <a href="#">Mortgage Rates</a>
      <a href="#">Refinance Rates</a>
      <a href="#">Mortgage Calculator</a>
      <a href="#">Affordability Calculator</a>
      <a href="#">Rent vs Buy Calculator</a>
      <div className="newestlistings">
        <a href="#">Refinance Calculator</a>
      </div>
    </div>

  )
}

export{
  BuyDropDownMenu,
  RentDropDownMenu,
  MortgageDropDownMenu,
}
