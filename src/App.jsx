import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home"; 
import CitiesPage from "./components/pages/CitiesPage"; 
import Login from './components/pages/Login'; 


const App = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('mongodb+srv://JonathanVargasH:Panda1984@basededatosjonathanv.stnwv.mongodb.net/City') // Aquí pones la URL del backend
      .then(response => response.json())
      .then(data => setCities(data))
      .catch(error => console.error('Error al obtener las ciudades:', error));
  }, []);
  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-center my-6">Explore Cities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cities.map((city) => (
          <div key={city._id} className="border p-4 rounded shadow">
            <h2 className="text-2xl font-semibold">{city.name}</h2>
            <p>{city.country}</p>
            <p>{city.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
    
const AppWrapper = () => {
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

export default AppWrapper;