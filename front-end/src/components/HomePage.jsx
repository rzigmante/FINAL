import styled from "styled-components";

export const HomePage = () => {
  const StyledHomePage = styled.h2`
    margin-top: 100px;
    margin-left: 200px;
  `;

  return <StyledHomePage>You're in the Homepage</StyledHomePage>;
};

export default HomePage;
