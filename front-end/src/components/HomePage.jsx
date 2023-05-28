import styled from "styled-components";

export const HomePage = () => {
  const StyledHomePage = styled.h2`
    margin-top: 100px;
    margin-left: 200px;
  `;

  return (
    <StyledHomePage>
      Jūs esate mūsų organizuojamo renginio dalyvių registracijos puslapyje. Jei
      norite registruoti dalyvius turite turėti savo pakyrą ir būti prie jos
      prisijungę.
    </StyledHomePage>
  );
};
