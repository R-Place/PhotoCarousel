import React from 'react';
import { SearchBreadcrumb, BreadcrumbGreyElements, BreadcrumbGreenElements } from './Styled.jsx';

const Breadcrumbs = (props) => (
  <div>
    <SearchBreadcrumb>
      <span> <i class="fas fa-arrow-left"></i> Back to Search</span>
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
      <span> 94116 </span>
    </BreadcrumbGreenElements>
    <BreadcrumbGreyElements>
      <span> > </span>
    </BreadcrumbGreyElements>
    <BreadcrumbGreyElements>
      <span> placeholder </span>
    </BreadcrumbGreyElements>
  </div>
)

export default Breadcrumbs;