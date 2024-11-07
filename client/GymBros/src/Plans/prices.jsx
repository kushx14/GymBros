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
              className="text-center text-2xl text-white sm:text-3xl md:text-4xl"
              style={{ fontFamily: 'Protest Guerrilla, sans-serif' }}
            >
              GET FIT, STAY HEALTHY – JOIN OUR FITNESS JOURNEY TODAY
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {['Basic', 'Premium', 'Elite'].map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col items-center aspect-auto p-6 sm:p-10 border rounded-3xl ${
                  plan === 'Premium' ? 'bg-orange-500' : 'bg-gray-500'
                } border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md h-112 
                transform transition-transform hover:scale-105`}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 tracking-wide">
                  {plan}
                </h2>
                <p className="text-lg sm:text-xl text-center mb-10 mt-6 text-gray-400">
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    {plan === 'Basic' ? '$29' : plan === 'Premium' ? '$59' : '$99'}
                  </span> / Month
                </p>
                <ul className="list-none list-inside mb-8 text-center text-gray-300 space-y-3">
                  <li className={`font-bold ${plan === 'Premium' ? 'text-gray-600' : 'text-orange-500'}`}>
                    {plan === 'Basic' ? 'Access to Gym' : plan === 'Premium' ? 'Gym + Group Classes' : 'All Access + Personal Trainer'}
                  </li>
                  <li>{plan === 'Basic' ? 'Standard Equipment' : plan === 'Premium' ? 'Advanced Equipment' : 'Exclusive VIP Equipment'}</li>
                  <li>{plan === 'Basic' ? '1 Fitness Assessment' : plan === 'Premium' ? 'Monthly Assessments' : 'Weekly Assessments'}</li>
                  <li>{plan === 'Basic' ? 'Community Support' : plan === 'Premium' ? '24/7 Support' : 'Priority Support & Personal Coach'}</li>
                  <li>{plan === 'Basic' ? 'Access to Fitness App' : plan === 'Premium' ? 'Fitness App + Diet Plans' : 'App + Customized Diet Plans'}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
