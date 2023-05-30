import React, { useState } from "react";
import axios from "axios";
import {
  MainBox,
  StyledHeader,
  LoginContainer,
  StyledInput,
  StyledButton,
  StyledForm,
  Error,
} from "./styles/StyledLogin";

export const ParticipantsForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      surname,
      email,
      phone,
    };

    axios
      .post("http://localhost:8000/participants", body)
      .then((response) => console.log("successful response", response))
      .catch((err) => console.log("err", err));
  };

  return (
    <>
      <LoginContainer>
        <MainBox>
          <StyledHeader>
            <div>
              <h2>Suveskite norinčio dalyvauti renginyje duomenis</h2>
            </div>
          </StyledHeader>
          <StyledForm onSubmit={handleSubmit}>
            <StyledInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="name"
              placeholder="Vardas"
              id="name"
              name="name"
            />
            <StyledInput
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              type="surname"
              placeholder="Pavardė"
              id="surname"
              name="surname"
            />
            <StyledInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Elektroninio pašto adresas"
              id="email"
              name="email"
            />
            <StyledInput
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              placeholder="Telefono numeris"
              id="phone"
              name="phone"
            />
            <StyledButton type="submit">Registruoti</StyledButton>
            {error && <Error>{error}</Error>}
          </StyledForm>
        </MainBox>
      </LoginContainer>
    </>
  );
};
