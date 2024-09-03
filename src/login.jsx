import React from 'react';
import logimg from './loginimg.jpg'
function Login() {
  return (
    <main
      className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white"
      style={{
        backgroundImage: `url(${logimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <section className="flex w-[30rem] flex-col space-y-10 bg-opacity-70 bg-white-800 p-6 rounded-lg">
        <div className="text-center text-4xl font-medium" style={{ color: '#f24c00' }}>Log In</div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-[#eb5e28]">
          <input type="text" placeholder="Email or Username" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
        </div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-[#eb5e28]">
          <input type="password" placeholder="Password" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
        </div>

        <button className="transform rounded-sm bg-[#eb5e28] py-2 font-bold duration-300 hover:bg-[#e88f6e]">LOG IN</button>

        <a href="#" className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</a>

        <p className="text-center text-lg">
          No account?
          <a href="#" className="font-medium text-orange-500 underline-offset-4 hover:underline">Create One</a>
        </p>
      </section>
    </main>
  );
}

export default Login;
