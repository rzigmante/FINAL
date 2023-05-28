import "./App.css";
import { AuthenticationContext } from "./components/AuthenticationContext";
import { Login } from "./components/Login";
import { NavBar } from "./components/NavBar";
import { PageNotFound } from "./components/PageNotFound";
import { ParticipantsForm } from "./components/ParticipantsForm";
import { ParticipantsList } from "./components/ParticipantsList";
import Protected from "./components/Protected";
import { Register } from "./components/Register";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import React, { useContext, useState } from "react";
import { HomePage } from "./components/HomePage";

function App() {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
  };

  return (
    <>
      <NavBar />
      <NavBar isLoading={isLoading} onLogout={handleLogout} />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          element={
            <Protected isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        />
        <Route path="/participants" element={<ParticipantsList />} />
        <Route path="/form" element={<ParticipantsForm />} />
      </Routes>
    </>
  );
}

export default App;
