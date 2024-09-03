import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Login from './Login';
import Signin from './signin';  // Import the Signin component
import HeroSection from './hero';

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<Signin />} />  
            </Routes>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <HeroSection />
        </div>
    );
}

function Plans() {
    return <div>Our Plans Page</div>;
}

function About() {
    return <div>About Page</div>;
}

function Contact() {
    return <div>Contact Page</div>;
}

export default App;
