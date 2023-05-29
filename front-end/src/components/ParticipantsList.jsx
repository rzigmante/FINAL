import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  MainBox,
  StyledHeader,
  LoginContainer,
  StyledInput,
  StyledButton,
  StyledForm,
  Error,
} from "./styles/StyledLogin";

export const ParticipantsList = () => {
  const [participants, setParticipants] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    console.log("id", id);
    axios
      .delete(`http://localhost:8000/participants/${id}`)
      .then((res) => {
        console.log("Ištrinta", res);
        navigate("/list");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/participants")
      .then((response) => {
        setParticipants(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <LoginContainer>
        <MainBox>
          <StyledHeader>
            <h2>Dalyvaujančių renginyje sąrašas</h2>
          </StyledHeader>
          <StyledForm>
            <table>
              <tr>
                <th>Vardas</th>
                <th>Pavardė</th>
                <th>El. paštas</th>
                <th>Telefono nr.</th>
                <th>Ištrinti</th>
              </tr>
              {participants.map((participants) => {
                console.log("post", participants);
                return (
                  <>
                    <tr>
                      <td>{participants.name}</td>
                      <td>{participants.surname}</td>
                      <td>{participants.email}</td>
                      <td>{participants.phone}</td>
                      <td>
                        <StyledButton
                          onClick={() => handleDelete(participants.id)}
                        >
                          X
                        </StyledButton>
                      </td>
                    </tr>
                  </>
                );
              })}
            </table>
            {error && <Error>{error}</Error>}
          </StyledForm>
        </MainBox>
      </LoginContainer>
    </>
  );
};
