import { useContext, useEffect } from "react";
import { Outlet, Navigate, useNavigate, useLocation } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";
import axios from "axios";

export const Protected = () => {
  const { isSignedIn, setIsSignedIn } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/token/verify", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.data.id) {
          setIsSignedIn(true);
          navigate(location.pathname);
        }
      });
  }, [navigate, setIsSignedIn, location.pathname]);

  // if (isLoading) {
  //   return <div>Page is loading</div>;
  // }

  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
