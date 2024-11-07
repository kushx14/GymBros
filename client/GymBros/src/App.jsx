import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Home from './Home/home';
import {dark} from '@clerk/themes'
import { ClerkProvider } from '@clerk/clerk-react';
import Signup from './Signup';
import Signin from './singin';
import Dash from './Profile/dash';
import Plans from './Plans/plans';
import Explore from './Explore/explore';
import Diet from './Diet/diet';
import About from './About/about';
import Schedule from './Schedule/schedule';
import Workout from './Workout/workout';
import Scraping from './Scraping/scraping';

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
                <Route path="/scraping" element={<Scraping />} /> 
            </Routes>
        </Router>
        </ClerkProvider>
    );
}



export default App;
