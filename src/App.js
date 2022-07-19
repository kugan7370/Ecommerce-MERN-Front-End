import Header from "./Components/Header";
import styled from "styled-components";
import Home from "./Pages/Home"
import { Routes, Route } from 'react-router-dom';
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Products from "./Pages/Products";
import { useSelector } from "react-redux";

function App() {


  const { current_user } = useSelector((state) => state.user)
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
