import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesDashboard from "./pages/CountriesDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<CountriesDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
