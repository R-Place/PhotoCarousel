import React from 'react';
import { BreadCrumbs, SearchBreadcrumb, BreadcrumbGreyElements, BreadcrumbGreenElements } from './Styled.jsx';

const Breadcrumbs = (props) => (
  <div className="testingout">
  <BreadCrumbs>
    <SearchBreadcrumb>
      <span> <i className="fas fa-arrow-left"></i> Back to Search</span>
    </SearchBreadcrumb>
    <BreadcrumbGreyElements>
      <span> For Sale </span>
    </BreadcrumbGreyElements>
    <BreadcrumbGreyElements>
      <span> > </span>
    </BreadcrumbGreyElements>
    <BreadcrumbGreenElements>
      <span> CA </span>
    </BreadcrumbGreenElements>
    <BreadcrumbGreyElements>
      <span> > </span>
    </BreadcrumbGreyElements>
    <BreadcrumbGreenElements>
      <span> San Francisco </span>
    </BreadcrumbGreenElements>
    <BreadcrumbGreyElements>
      <span> > </span>
    </BreadcrumbGreyElements>
    <BreadcrumbGreenElements>
      <span> {props.listing.zipCode} </span>
    </BreadcrumbGreenElements>
    <BreadcrumbGreyElements>
      <span> > </span>
    </BreadcrumbGreyElements>
    <BreadcrumbGreyElements>
      <span> {props.listing.homeAddress} </span>
    </BreadcrumbGreyElements>
  </BreadCrumbs>
  </div>
)

export default Breadcrumbs;