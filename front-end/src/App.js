import "./App.css";
import { ParticipantsList } from "./components/ParticipantsList";
import { StateButton } from "./6-paskaita-useState/Button";
import { TextInput } from "./6-paskaita-useState/TextInput";
import { MyCheckbox } from "./6-paskaita-useState/Checkbox";
import { Form } from "./6-paskaita-useState/Form";
import { MoodChecker } from "./6-paskaita-useState/MoodChecker";
import { Modal, Button } from "react-bootstrap";
import { Toolbar } from "./components/Toolbar";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { HomePage } from "./project-example/HomePage";
import { Login } from "./project-example/Login";
import { NavBar } from "./project-example/NavBar";
import { Register } from "./project-example/Register";
import { ProductDetails } from "./project-example/ProductDetails";
import { PageNotFound } from "./project-example/PageNotFound";
import { Posts } from "./project-example/posts/Posts";
import { Post } from "./project-example/posts/Post";
import { Comments } from "./project-example/posts/Comments";
import { IndexPost } from "./project-example/posts/IndexPost";
import React, { useContext, useState } from "react";
import Protected from "./project-example/Protected";
import { CommentInfo } from "./project-example/posts/CommentInfo";
import { CommentIndex } from "./project-example/posts/CommentIndex";
import { AuthenticationContext } from "./project-example/AuthenticationContext";
import { NewProduct } from "./project-example/NewProduct";
import { Basket } from "./project-example/Basket";

function App() {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
  };

  return (
    <>
      <NavBar isLoading={isLoading} onLogout={handleLogout} />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          element={
            <Protected isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        >
          <Route path="/participants" element={<ParticipantsList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/addProduct" element={<NewProduct />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/posts" element={<Posts />}>
            <Route index element={<IndexPost />} />
            <Route path=":postId" element={<Post />}>
              <Route path="comments" element={<Comments />}>
                <Route index element={<CommentIndex />} />
                <Route path="commentInfo" element={<CommentInfo />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
