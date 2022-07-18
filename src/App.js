import Header from "./Components/Header";
import styled from "styled-components";
import Home from "./Pages/Home"
import { Routes, Route } from 'react-router-dom';
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
function App() {


  const user = false
  return (



    <Routes>
      {!user ? (
        <>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />

        </>
      )
      }
    </Routes>


  );
}



export default App;
