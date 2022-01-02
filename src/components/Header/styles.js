import styled from 'styled-components';

export const StyledHeader = styled.nav`
  display: flex;
  height: 66px;
  padding: 0 20px;
  background: #161b22;
  align-items: center; 
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  cursor: pointer;
  border: solid 1px #303655;
  margin-right: ${props => props.marginRight || "0px"};
  background: ${props => props.background || "transparent"};
  color: #fff;
  font-weight: 700;
`;
