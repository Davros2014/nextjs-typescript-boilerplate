import styled from "styled-components";

const StyledTestComponent = styled.main`
  background: #fff;
  min-height: 100vh;
  margin: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  & h1 {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }
  & h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
  & p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;
export default StyledTestComponent;
