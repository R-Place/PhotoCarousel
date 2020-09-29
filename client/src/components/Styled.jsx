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

export {
  StatusTags,
  NewTag
}