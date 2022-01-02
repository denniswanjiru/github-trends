import styled from 'styled-components';

export const PageWrapper = styled.section`
  margin: 40px 150px;
  background: #0d1117;
`;

export const StyledCard = styled.div`
  display: flex;
  min-height: 97px;
  width: 100%;
  justify-content: space-between;
  border: solid 1px #161b22;
  align-items: flex-start;
  padding: ${props => props.padding || "20px"};
`;

export const ColorPallette = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: ${props => props.background || '#161b22'}
`;
