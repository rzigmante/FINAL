import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 60vh;
`;

export const StyledInput = styled.input`
  width: 100%;
  margin: 10px 0px;
`;

export const StyledButton = styled.button`
  width: 100%;
  margin: 10px 0px;
  background-color: #fbb89f;
`;

export const StyledForm = styled.form`
  background-color: #ded9d9;
  padding: 20px;
  border-radius: 0px 0px 7.5px 7.5px;
`;

export const StyledHeader = styled.div`
  background-color: #f0efef;
  padding: 20px;
  width: 500px;
  border-radius: 7.5px 7.5px 0px 0px;
`;

export const MainBox = styled.div`
  width: 500px;
`;

export const Error = styled.div`
  background-color: #f09292;
  border: 1px solid red;
  border-radius: 6px;
  color: red;
  padding: 6px 0;
  text-align: center;
`;
