import { useEffect, useState } from "react";
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

  useEffect(() => {
    axios
      .get("http://localhost:8000/participants")
      .then((response) => {
        setParticipants(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

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
              {participants.map((participant) => {
                console.log("post", participant);
                return (
                  <>
                    <tr>
                      <td>{participant.name}</td>
                      <td>{participant.surname}</td>
                      <td>{participant.email}</td>
                      <td>{participant.phone}</td>
                      <td>
                        <StyledButton
                          onClick={() => handleDelete(participant.id)}
                        >
                          X
                        </StyledButton>
                      </td>
                    </tr>
                  </>
                );
              })}
            </table>
            {Error && <Error>{Error}</Error>}
          </StyledForm>
        </MainBox>
      </LoginContainer>
    </>
  );
};
