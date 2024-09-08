import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import HeroSection from './hero';
import {dark} from '@clerk/themes'
import { ClerkProvider } from '@clerk/clerk-react';
import Signup from './Signup';
import Signin from './singin';
import Profile from './profile';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

function App() {
    return (
        <ClerkProvider appearance={{
            baseTheme: dark,
          }}
          publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/" >
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Signin/>} />
                <Route path="/signin" element={<Signup />} />  
                <Route path="/profile" element={<Profile />} />  
            </Routes>
        </Router>
        </ClerkProvider>
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
