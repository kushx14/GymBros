import React from 'react';
import loginimg from '.././assets/loginimg.jpg'; // Ensure this path is correct

function Prices() {
  return (
    <div>
      <div 
        className="bg-gray-500 px-4 py-16 min-h-screen"
        style={{ backgroundImage: `url(${loginimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="mb-10 space-y-4 px-6 md:px-0">
            <h2 
              className="text-center text-2xl  text-white sm:text-3xl md:text-4xl"
              style={{ fontFamily: 'Protest Guerrilla, sans-serif' }}
            >
              READY TO START YOUR JOURNEY NOW WITH US
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {['Starter', 'Pro', 'Business'].map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col items-center aspect-auto p-6 sm:p-10 border rounded-3xl ${
                  plan === 'Pro' ? 'bg-orange-500' : 'bg-gray-500'
                } border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md h-112 
                transform transition-transform hover:scale-105`}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 tracking-wide">
                  {plan}
                </h2>
                <p className="text-lg sm:text-xl text-center mb-10 mt-6 text-gray-400">
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    {plan === 'Starter' ? '$19' : plan === 'Pro' ? '$49' : '$99'}
                  </span> / Month
                </p>
                <ul className="list-none list-inside mb-8 text-center text-gray-300 space-y-3">
                  <li className={`font-bold ${plan === 'Pro' ? 'text-gray-600' : 'text-orange-500'}`}>
                    {plan === 'Starter' ? '1 Website' : plan === 'Pro' ? '3 Websites' : 'Unlimited Websites'}
                  </li>
                  <li>Custom Domain {plan !== 'Starter' && '& Subdomain'}</li>
                  <li>{plan === 'Starter' ? 'Basic SEO' : plan === 'Pro' ? 'Advanced SEO' : 'Enterprise SEO'}</li>
                  <li>{plan === 'Starter' ? 'Limited Support' : plan === 'Pro' ? '24/7 Support' : 'Premium Support'}</li>
                </ul>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                  href={`https://example.com/${plan.toLowerCase()}-plan`}
                >
                  <span className="relative text-sm font-semibold text-black">Get Started</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
