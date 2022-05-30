import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './Style.css'
import Student from "./Pages/Student";
import Conatct from "./Pages/Conatct";
import Homepage from "./Pages/Homepage";
import AddStudent from "./Pages/AddStudent";
import Edit from "./Pages/Edit";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/student" element={<Student />} />
        <Route path="/contact" element={<Conatct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;