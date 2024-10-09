// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children} {/* Aquí renderizas el contenido de las diferentes páginas */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;