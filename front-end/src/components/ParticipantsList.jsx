import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ClientList = () => {
  const [clients, setClients] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/clients")
      .then((response) => {
        setClients(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (id) => {
    console.log("id", id);
    axios
      .delete(`http://localhost:5000/clients/${id}`)
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
      <h2 className="clients-list">Dalyvių sąrašas</h2>
      <table>
        <tr>
          <th>Vardas</th>
          <th>Pavardė</th>
          <th>El. paštas</th>
          <th>Telefono nr.</th>
          <th>Ištrinti</th>
        </tr>
        {clients.map((client) => {
          console.log("post", client);
          return (
            <>
              <tr>
                <td>{client.name}</td>
                <td>{client.surname}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>
                  <button
                    className="form-btn"
                    onClick={() => deleteHandler(client.id)}
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
