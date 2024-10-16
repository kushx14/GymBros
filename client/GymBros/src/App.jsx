import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import HeroSection from './hero';
import {dark} from '@clerk/themes'
import { ClerkProvider } from '@clerk/clerk-react';
import Signup from './Signup';
import Signin from './singin';
import Dash from './dash';
import Prices from './prices';
import Cards from './cards';
import CircularButtons from './choose';
import Diet2 from './getdiet';
import CalDiet from './caldiet'
import Visit from './visit';
import List from './list';

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
                <Route path="/explore" element={<Explore />} />
                <Route path="/login" element={<Signin/>} />
                <Route path="/signin" element={<Signup />} />  
                <Route path="/dash" element={<Dash />} />
                <Route path="/diet" element={<Diet />} />
                <Route path="/workout" element={<Workout />} />
                <Route path="/schedule" element={<Schedule />} />  
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

function Explore() {
    return (
        <div>
            <CircularButtons />
        </div>
    );
}

function Plans() {
    return (
        <div>
            <Prices />
            <Cards />
        </div>
    );
}

function About() {
    return (
        <div>
            <Visit />
        </div>
    );
}



function Diet() {
    return (
        <div>
            <Diet2 />
            <CalDiet />
        </div>
    );
}

function Workout() {
    return (
        <div>
            Workout
        </div>
    );
}

function Schedule() {
    return (
        <div>
            <List />
        </div>
    );
}

export default App;
