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
    font-size: clamp(3.2rem, 4vw, 3.8rem);
    margin-bottom: 1rem;
  }
  & h2 {
    margin: 0 0 1rem 0;
    font-size: clamp(1.8rem, 2vw, 2.8rem);
  }
  & p {
    margin: 0;
    font-size: clamp(1.4rem, 2vw, 1.6rem);
    line-height: 1.5;
  }
`;
export default StyledTestComponent;
