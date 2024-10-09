import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/pages/Home.jsx"; // Página de inicio
import CitiesPage from "./components/pages/CitiesPage.jsx"; // Página Cities
import Login from './components/pages/Login.jsx'; // Asegúrate de que la ruta sea la correcta


const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/cities"
          element={
            <Layout>
              <CitiesPage />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;