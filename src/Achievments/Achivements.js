import React from 'react';

const achievements = [
  { id: 1, title: 'Canada Study Visa', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpXNI2HfPwZbZ35Dfzp7LdBKAk52zbBiyuOA&s" },
  { id: 2, title: 'Australia PR Visa', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT04SPo1o545R8T205b4-L18aKbeBJ6YnfPeA&s' },
  { id: 3, title: 'UK Work Visa', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrqThKRxFyepMRpP-sa3bo_GMYgFGKGOpmvg&s' },
  { id: 4, title: 'Canada Tourist Visa', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrqThKRxFyepMRpP-sa3bo_GMYgFGKGOpmvg&s' },
  { id: 5, title: 'Australia Tourist Visa', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZR83RxW4aW3daCFISzhYg3RMTkGAvzqAzQ&s' }
];

// Marquee animation keyframes for smooth infinite scroll
const marqueeAnimation = `
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
`;

const Achivements = () => {
  return (
    <>
      <style>{marqueeAnimation}</style>

      <section className="bg-white pt-0 pb-12 mt-0">

        <h2 className="text-4xl font-extrabold text-orange-600 text-center mb-8 drop-shadow-lg">
          Our Visa Achievements
        </h2>

        <div className="overflow-hidden">
          <div
            className="flex space-x-10"
            style={{
              width: '300%',
              animation: 'marquee 30s linear infinite',
            }}
          >
            {[...achievements, ...achievements].map(({ id, title, img }, idx) => (
              <div
                key={idx}
                className="w-72 bg-gradient-to-tr from-orange-50 via-white to-orange-50 rounded-xl shadow-2xl flex-shrink-0 hover:shadow-3xl transition-shadow duration-300"
              >
                <img
                  src={img}
                  alt={title}
                  className="rounded-t-xl w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-xl text-orange-700">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Achivements;
