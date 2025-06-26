import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: "Satinder Pal Singh",
    role: "Founder & CEO",
    img: "https://media.licdn.com/dms/image/v2/C4D22AQFTwoXftAE6Cw/feedshare-shrink_800/feedshare-shrink_800/0/1663095748367?e=2147483647&v=beta&t=hne-SsLkYz8ZvTbYuRNVehIJz2Lo0S6ushhhAoNzzDA",
    bio: "Visionary leader steering Vertex Overseas towards global success."
  },
  {
    id: 2,
    name: "Gurbaj Singh Guraya",
    role: "Director",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJR226nNMjepU1rr7eryheiEIhe068mO2ZUANs9nnwOeLUNAI_Kv3O8wKWNPuxIeY0gwg&usqp=CAU",
    bio: "Strategic planner and operational expert ensuring smooth processes."
  },
  {
    id: 3,
    name: "Karan Pal Singh",
    role: "head of department",
    img: "https://media.licdn.com/dms/image/v2/D5603AQGe42phXiqUdQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723990311322?e=2147483647&v=beta&t=j8SVHLh4rSJDgn2J128l5R0J5RTQDnYVuBsdaswseaQ",
    bio: "Building valuable partnerships and driving business growth."
  },
  {
    id: 4,
    name: "Jashan ",
    role: "visa consultant",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyycDg2ewxzJjEBzSB24zpSud3DGfz54v2WYj6cdwl4KlPiVleMlnrS5owUb9j0A1t_b4&usqp=CAU",
    bio: "Expert in Canadian immigration policies and student affairs."
  },
  
];

// Keyframes for marquee effect
const marqueeAnimation = `
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

const Team = () => {
  return (
    <>
      <style>{marqueeAnimation}</style>

      <section className="bg-gradient-to-r from-orange-100 via-white to-orange-100 py-16">
        <h2 className="text-4xl font-extrabold text-orange-700 text-center mb-10 drop-shadow-lg">
          Meet Our Expert Team
        </h2>

        <div className="overflow-hidden">
          <div
            className="flex space-x-12"
            style={{
              width: '200%',
              animation: 'marquee 40s linear infinite',
            }}
          >
            {[...teamMembers, ...teamMembers].map(({ id, name, role, img, bio }, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white rounded-2xl shadow-2xl p-6 w-64 text-center hover:scale-105 transform transition-transform duration-300"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-32 h-32 rounded-full border-4 border-orange-400 object-cover mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-orange-700">{name}</h3>
                <p className="text-orange-500 font-medium mb-2">{role}</p>
                <p className="text-gray-600 text-sm">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
