import React, { useState } from "react";
import axios from "axios";

export const ClientForm = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      surname,
      email,
      phone,
    };

    axios
      .post("http://localhost:5000/clients", body)
      .then((response) => console.log("seccessful response", response))
      .catch((err) => console.log("err", err));
  };

  return (
    <div className="reg-form-container">
      <h2>Naujas dalyvis</h2>
      <form className="client_register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">vardas:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="name"
          placeholder="vardas"
          id="name"
          name="name"
        />
        <label htmlFor="surname">pavardė:</label>
        <input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          type="surname"
          placeholder="pavardė"
          id="surname"
          name="surname"
        />
        <label htmlFor="email">elektroninis paštas:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="įrašykite el. pašto adresą"
          id="email"
          name="email"
        />
        <label htmlFor="phone">telefono numeris::</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="phone"
          placeholder="+370"
          id="phone"
          name="phone"
        />
        <button className="form-btn" type="submit">
          Registruoti
        </button>
      </form>
    </div>
  );
};
