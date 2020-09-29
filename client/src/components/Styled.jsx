import styled from 'styled-components';

const StatusTags = styled.span `
  color: rgb(0, 178, 91);
  font-size: 12px;
  background-color: white;
  padding: 2px 4px;
  border-radius: 4px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-right: 4px;
`;

const NewTag = styled(StatusTags) `
  color: rgb(5, 34, 134);
`
const SaveButton = styled.button `
  text-align: center;
  position: relative;
  left: 760px;
  background-color: white;
  padding: 8px 16px;
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

`

const HeartButton = styled.i `
text-align: center;
font-size: 24px;
font-weight: bold;
padding-right: 10px;
color: rgb(0, 120, 130);
&:active {
  color: rgb(255, 255, 255);
}
`

const DetailFooter = styled.button `
background-color: rgba(59, 65, 68, 0.8);
padding: 0px 8px;
border-radius: 4px;
color: white;
border: none;
font-weight: bold;
`

export {
  StatusTags,
  NewTag,
  SaveButton,
  HeartButton,
  DetailFooter
}