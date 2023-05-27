import { useState } from "react";
import {
  MainBox,
  StyledHeader,
  LoginContainer,
  StyledInput,
  StyledButton,
  StyledForm,
  Error,
} from "./styles/StyledLogin";
import { Link, useNavigate } from "react-router-dom";
import axios from "./axios";
import { useContext } from "react";
import { AuthenticationContext } from "./AuthenticationContext";

export const Login = () => {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/login", formData)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          setIsSignedIn(true);
          navigate("/");
        } else {
          setError(response.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <LoginContainer>
        <MainBox>
          <StyledHeader>
            <h2>
              <b>Login to our site</b>
            </h2>
            <p>Please enter email and password to login</p>
          </StyledHeader>
          <StyledForm onSubmit={handleOnSubmit}>
            <StyledInput
              name="email"
              onChange={handleOnChange}
              type="email"
              placeholder="youremail@gmail.com"
            />
            <StyledInput
              name="password"
              onChange={handleOnChange}
              type="password"
              placeholder="*********"
            />
            <StyledButton className="btn">LOGIN</StyledButton>

            {error && <Error>{error}</Error>}
          </StyledForm>
        </MainBox>
        <p>
          Don't have an account yet? <Link to="/register">Register HERE</Link>
        </p>
      </LoginContainer>
    </>
  );
};
