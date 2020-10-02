import React from 'react';
import { HomeAddress, SecondLineHomeAddress, HomeInterior, HomeInteriorIcons } from './Styled.jsx';

const HomeDetails = (props) => (
  <div className="homedetailscontainer">
    <div className="homeaddress">
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
    </div>
    <div className="homeinteriordetails">
      <HomeInterior>
        <span className="homeinterior">
          <HomeInteriorIcons>
            <i class="fas fa-bed"></i>
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
    </div>
    <div className="homeprice">
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
    </div>
  </div>
);

export default HomeDetails;
