import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
import LoginPage from "./components/pages/LoginPage";
import AdditionalPage from "./components/pages/AdditionalInfoInputPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<LoginPage />} />
          <Route path="additional" element={<AdditionalPage />} /> 
      </Routes>
    </BrowserRouter>  
  );
}
export default App;
