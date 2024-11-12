import React, { useEffect } from 'react';
import Profile from './profile';
import Scraping from '../Scraping/scraping';
import { useUser } from '@clerk/clerk-react';

function Dash() {
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    const checkUserExistence = async () => {
      if (isSignedIn && user) {
        try {
          // Check if the user already exists by sending a GET request
          const response = await fetch(`https://gymbros-our8.onrender.com/checkUser/${user.id}`, {
            method: 'GET',
          });

          if (!response.ok) {
            throw new Error('Failed to check user existence');
          }

          const data = await response.json();

          if (data.exists) {
            console.log('User already exists, skipping add user request.');
          } else {
            // If user doesn't exist, send the POST request to add them
            const userData = {
              userId: user.id,
              email: user.email,
              name: user.fullName,
            };

            const addUserResponse = await fetch('https://gymbros-our8.onrender.comaddUser', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData),
            });

            if (!addUserResponse.ok) {
              throw new Error('Failed to add user');
            }

            const addUserData = await addUserResponse.json();
            console.log('User added:', addUserData);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };

    checkUserExistence();
  }, [isSignedIn, user]);

  return (
    <div>
      {user ? (
        <div>
          <div className="flex h-screen bg-black">
            <div className="hidden md:flex flex-col w-64 bg-[#1e1e1e] pt-6 overflow-hidden">
              <div className="flex items-center justify-center h-16 bg-[#1e1e1e]">
                <button className="relative inline-flex group">
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                  <a
                    href="/dash"
                    className="relative inline-flex items-center justify-center w-12 h-12 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    <img
                      src={user.imageUrl}
                      alt="Profile"
                      className="rounded-full w-full h-full object-cover"
                    />
                  </a>
                </button>
                <span className="text-white font-bold uppercase ml-4">{user.fullName}</span>
              </div>

              {/* Sidebar nav */}
              <div className="flex flex-col flex-1 overflow-hidden">
                <nav className="flex-1 px-2 py-4 space-y-2">
                  <a href="/dash" className="flex items-center px-4 py-2 text-gray-100">
                    <div className="group flex h-16 w-16 cursor-pointer items-center justify-center rounded-3xl bg-[#1e1e1e] p-2 transition-colors duration-300 hover:bg-[#1e1e1e]">
                      <div className="space-y-2">
                        <span className="block h-1 w-8 origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
                        <span className="block h-1 w-6 origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-8 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
                      </div>
                    </div>
                    <span className="ml-2">Dashboard</span>
                  </a>

                  <a href="/scraping" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Global Statistics</span>
                  </a>
                </nav>
              </div>
            </div>

            {/* Main content */}
            <div className="flex flex-col flex-1 overflow-y-auto pt-6">
            <Profile />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Dash;
