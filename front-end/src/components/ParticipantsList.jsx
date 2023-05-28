import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  const deleteHandler = (id) => {
    console.log("id", id);
    axios
      .delete(`http://localhost:8000/participants/${id}`)
      .then((res) => {
        console.log("deleted", res);
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
      <h2 className="participants-list">Dalyvių sąrašas</h2>
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
                  <button
                    className="form-btn"
                    onClick={() => deleteHandler(participants.id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
};
