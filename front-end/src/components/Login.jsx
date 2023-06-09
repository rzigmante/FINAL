import { useState, useContext } from "react";
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
import { AuthenticationContext } from "./AuthenticationContext";
import axios from "axios";

export const Login = () => {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/login", formData)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          setIsSignedIn(true);
          navigate("/form");
        } else {
          setError(response.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button onClick={() => navigate(-1)}>Grįžti</button>
      <LoginContainer>
        <MainBox>
          <StyledHeader>
            <h2>
              <b>Prisijunkite prie mūsų puslapio</b>
            </h2>
            <p>
              Įveskite savo el. pašto adresą ir slaptažodį norėdami prisijungti
            </p>
          </StyledHeader>
          <StyledForm onSubmit={handleOnSubmit}>
            <StyledInput
              name="email"
              onChange={handleOnChange}
              type="email"
              placeholder="jūsųelpaštas@gmail.com"
            />
            <StyledInput
              name="password"
              onChange={handleOnChange}
              type="slaptažodis"
              placeholder="*********"
            />
            <StyledButton className="btn" variant="primary" type="submit">
              PRISIJUNGTI
            </StyledButton>

            {error && <Error>{error}</Error>}
          </StyledForm>
        </MainBox>
        <p>
          Dar neturite paskyros?{" "}
          <Link to="/register">Užsiregistruokite ČIA</Link>
        </p>
      </LoginContainer>
    </>
  );
};
