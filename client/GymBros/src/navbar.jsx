import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { SignedIn, SignedOut, UserButton} from "@clerk/clerk-react";
import App from './App';


function Navbar() {
    return (
        <div className="top-0 py-0.5 lg:py-1 w-full bg-[#0a0908] lg:relative z-50">
            <nav className="z-10 sticky top-0 left-0 right-0 max-w-3xl xl:max-w-[75%] mx-auto px-5 py-1.5 lg:border-none lg:py-2">
                <div className="flex items-center justify-between">
                    <button>
                        <div className="flex items-center space-x-2">
                            <h2 className="text-2xl ml-[-10px]">
                                <span className="text-[#f24c00] font-bold">GYM</span> <span className="text-white font-bold">BROs</span>
                            </h2>
                        </div>
                    </button>
                    <div className="hidden lg:block">
                        <ul className="flex space-x-10 text-base font-bold text-white">
                            <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <Link to="/plans">Our Plans</Link>
                            </li>
                            <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:flex lg:items-center gap-x-2 ml-6">                        
                            <SignedOut>
                            <Link className="flex items-center justify-center rounded-xl bg-[#eb5e28] text-white px-4 py-1.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200" to="/signin">
                                Sign up
                            </Link>
                            <Link className="flex items-center justify-center rounded-xl bg-black text-white border border-white px-6 py-1.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200" to="/login">
                                Login
                            </Link>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                    <div className="flex items-center justify-center lg:hidden">
                        <button className="focus:outline-none text-white">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="text-2xl text-white focus:outline-none active:scale-110 active:text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
