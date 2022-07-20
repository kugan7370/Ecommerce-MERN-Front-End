import Header from "./Components/Header";
import styled from "styled-components";
import Home from "./Pages/Home"
import { Routes, Route, useNavigate } from 'react-router-dom';
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Products from "./Pages/Products";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate()
  const { current_user } = useSelector((state) => state.user)
  useEffect(() => {
    current_user ? navigate('/') : navigate("/signin")

  }, [])


  return (
    <>

      {current_user && <Header />}
      <Routes>
        {!current_user ? (
          <>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        ) : (
          <>


            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Products />} />

          </>
        )
        }
      </Routes>

    </>
  );
}



export default App;
