import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import Header from "./Header/Header";
import Home from "./Home/Home";
import './Style.css'
import SignIn from "./UserLogIn/SignIn";
import SignUp from "./UserLogIn/SignUp";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
// import Data from "./Data/SliderData";
// import Details from "./Data/SliderData"

const promise = loadStripe("pk_test_51LORrsSA6j0luqwRNYNFRlvM1bVgYlkSA6nUwPoEGq5hlJNu3HwSVVWdyLWMBEcAv0yz2jAjoez4cBIE0B21jJdT00tuixTvKg")


function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /> <Home /></>} />
          <Route path="/checkout" element={<> <Header /> <Elements stripe={promise}><Checkout /></Elements></>} />
          <Route path="/login" element={<> <Header /> <SignUp /> </>} />
          <Route path="/signup" element={<> <Header /> <SignIn /> </>} />
          <Route path="/cart" element={<><Header /> <Cart /></>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;