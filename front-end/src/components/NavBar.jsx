import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";

export const NavBar = ({ isLoading, onLogout }) => {
  const { isSignedIn } = useContext(AuthenticationContext);

  if (isLoading) {
    return;
  }

  return (
    <nav>
      <ul>
        {isSignedIn ? (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/participants">Dalyvių sąrašas</Link>
            </li>
            <li>
              <Link to="/form">Registravimo forma</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Prisijunkite</Link>
            </li>
            <li>
              <Link to="/register">Užsiregistruokite</Link>
            </li>
          </>
        )}
      </ul>
      {isSignedIn && <button onClick={onLogout}>LOGOUT</button>}
    </nav>
  );
};
