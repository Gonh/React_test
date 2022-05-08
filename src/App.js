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
function App() {
  const [User,Set_user] = useState([]);
  return (
    <Router>
      <div className="root">
        <Navbar />
        <main className="root__main">
          <section>
          <User_context.Provider value={[User, Set_user]}>
            <Routes>
               <Route index element={< Todo_page />} />
                <Route path="/Api" element={ < Api /> }  />
                <Route path="/item_api/:id" element={< Item_data_api /> } />
                <Route path="*" element={< Sin_pagina />} /> 
            </Routes>
            </User_context.Provider>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
