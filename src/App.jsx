import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Sidebar from "./Component/Sidebar";
import Home from "./pages/Home";
import Table from './pages/Table';
import Form from './pages/Forms'

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Sidebar/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/table" element={<Table />} />
    <Route path="/form" element={<Form />} />
    </Routes>  
   </BrowserRouter>
   </>
  );
};

export default App;
