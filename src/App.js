import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/**
 * Styles
 */
import "./App.scss";

/**
 * Components
 */
import Navbar from "./Componentes/Navbar";
/**
 * Pages
 */
import Todo_page from "./Todo_page";
import Api from "./Api";
import Sin_pagina from "./Sin_pagina";
import Item_data_api from "./Componentes/Item_data_api";
import { User_context } from "./Componentes/User_context";
import Form_page from "./Form_page";
function App() {
const [User,Set_user] = useState([]);
  return (
    <Router>
      <div className="root">
      <User_context.Provider value=
      {{
        User: User,
        Set_user: Set_user,
    }}
      >
        <Navbar />
        <main className="root__main">
            <Routes>
               <Route index element={< Todo_page />} />
                <Route path="/Api" element={ < Api /> }  />
                <Route path="/Form" element= {< Form_page />} />
                <Route path="/item_api/:id" element={< Item_data_api /> } />
                <Route path="*" element={< Sin_pagina />} /> 
            </Routes>
        </main>
        </User_context.Provider>
      </div>
    </Router>
  );
}

export default App;
