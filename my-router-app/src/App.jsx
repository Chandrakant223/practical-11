import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

function About() {
  return <h2>About Us</h2>;
}

function Contact() {
  return <h2>Contact Us</h2>;
}

function App() {
  return (
    
    <div style={{ padding: '20px' }}>
      
      <nav style={{ display: 'flex',gap:'15px', marginBottom: '20px' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact </Link  >
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      
    </div>
   
  );
}
export default App;