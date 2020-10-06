import React from 'react';
import { PhotoHeader, StaticHeader, TruliaLogo, SearchBar, SearchBarContainer } from './Styled.jsx';

const Header = () => (
  // <PhotoHeader src="https://test-awuradjoa-quansah.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-25+at+10.26.19+PM.png">
  // </PhotoHeader>
  <StaticHeader>
    <TruliaLogo src="https://test-awuradjoa-quansah.s3-us-west-1.amazonaws.com/Screen+Shot+2020-10-03+at+3.56.10+PM.png">
    </TruliaLogo>
    <SearchBarContainer>
      <SearchBar placeholder="Search for City, Neighborhood, Zip, County, School">
      </SearchBar>
    </SearchBarContainer>
  </StaticHeader>
)

export default Header;