import React from 'react';
import { HomeDetailsContainer, HomeAddressContainer, HomeAddress, SecondLineHomeAddress, HomeInterior, HomeInteriorIcons, PreQualifiedButton, HomeInteriorDetails, HomePrice, PreQualifiedButtonContainer } from './Styled.jsx';

const HomeDetails = (props) => (
  <HomeDetailsContainer>
    <HomeAddressContainer>
      <HomeAddress>
        <span className="firstlinehomeaddress">
          {props.listing.homeAddress}
        </span>
      </HomeAddress>
      <SecondLineHomeAddress>
        <span className="secondlinehomeaddress">
          {props.listing.cityState}
        </span>
      </SecondLineHomeAddress>
    </HomeAddressContainer>
    <HomeInteriorDetails>
      <HomeInterior>
        <span className="homeinterior">
          <HomeInteriorIcons>
            <i className="fas fa-bed"></i>
          </HomeInteriorIcons>
        3 beds
        </span>
      </HomeInterior>
      <HomeInterior>
        <span className="homeinterior">
          <HomeInteriorIcons>
            <i className="fas fa-bath"></i>
          </HomeInteriorIcons>
          2 baths
        </span>
      </HomeInterior>
      <HomeInterior>
        <span className="homeinterior">
          <HomeInteriorIcons>
            <i className="fas fa-caret-up"></i>
          </HomeInteriorIcons>
          1,325 sqft
        </span>
      </HomeInterior>
    </HomeInteriorDetails>
    <HomePrice>
      <HomeAddress>
        <span>
          {props.listing.price.toLocaleString('us-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
        </span>
      </HomeAddress>
      <SecondLineHomeAddress>
        <span>
          {`Est. Mortgage ${props.listing.estMortgage.toLocaleString('us-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })}/mo`}
        </span>
      </SecondLineHomeAddress>
    </HomePrice>
    <PreQualifiedButtonContainer>
      <PreQualifiedButton>
        Get Pre-Qualified
      </PreQualifiedButton>
    </PreQualifiedButtonContainer>
  </HomeDetailsContainer>
);

export default HomeDetails;
