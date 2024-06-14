import './App.css';
import React from 'react';
import AppContext from './context/AppContext';
import AppRoutes from './routes/AppRoutes';
import Navbar from './NavBar';
import Footer from './Footer';

function App() {
  return (
    <AppContext>
      <Navbar />
      <AppRoutes />
      <Footer />
    </AppContext>
  );
}

export default App;
