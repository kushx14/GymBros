
import AlexImage from '../assets/kush.jpg';
import SamImage from '../assets/aarya.jpg';
import JordanImage from '../assets/shardul.jpg';
import TaylorImage from '../assets/shreyas.jpg';

export default function AboutUs() {
  return (
    <section className="relative bg-[#1e1e1e] text-white py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[#111111] transform -skew-y-6 origin-top-left z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-orange-500">Meet Our Team</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            We're a passionate group of digital craftsmen dedicated to creating stunning, functional websites that drive results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Shreyas Naik", title: "Lead Developer", description: "Turning insights into impactful strategies", imageSrc: TaylorImage },
            { name: "Kush Nhayade", title: "Frontend ka Baap", description: "Crafting clean, efficient code for seamless functionality", imageSrc: AlexImage },
            { name: "Aarya Mehta", title: "AI ka Baap", description: "Creating intuitive and visually appealing user experiences", imageSrc: SamImage },
            { name: "Shardul Mahindrakar", title: "Arrey ho jayega", description: "Amplifying your online presence and reach", imageSrc: JordanImage }
          ].map((member, index) => (
            <div key={index} className="bg-[#111111] p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-orange-500/20 hover:shadow-lg">
              <div className="w-32 h-32 mx-auto mb-4 relative overflow-hidden rounded-full border-4 border-orange-500">
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-orange-500 mb-2">{member.title}</p>
              <p className="text-gray-400">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
