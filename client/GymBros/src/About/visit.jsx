import React, { useEffect, useState } from 'react';

function Visit() {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setGradientPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <section
        style={{
          background: `radial-gradient(at ${gradientPosition.x}% ${gradientPosition.y}%, #333, #111, #000)`, // Dark grey to black gradient
          height: '100vh',
          transition: 'background-position 0.2s ease',
        }}
      >
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-orange-500">Visit Our Location</h1>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden" style={{ borderRadius: '20px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus&style=feature:all%7Celement:geometry%7Clightness:10%7Cvisibility:simplified%7Cinvert_lightness:true"
                  width="100%"
                  height="480"
                  style={{ border: 0, borderRadius: '20px' }}  
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-orange-500">Our Address</h3>
                    <p className="mt-1 text-gray-400">123 Main St, San Francisco, CA 94105</p>
                  </div>
                  <div className="border-t border-orange-600 px-6 py-4">
                    <h3 className="text-lg font-medium text-orange-500">Hours</h3>
                    <p className="mt-1 text-gray-400">Monday - Friday: 9am - 5pm</p>
                    <p className="mt-1 text-gray-400">Saturday: 10am - 4pm</p>
                    <p className="mt-1 text-gray-400">Sunday: Closed</p>
                  </div>
                  <div className="border-t border-orange-600 px-6 py-4">
                    <h3 className="text-lg font-medium text-orange-500">Contact</h3>
                    <p className="mt-1 text-gray-400">Email: info@example.com</p>
                    <p className="mt-1 text-gray-400">Phone: +1 23494 34993</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Visit;
