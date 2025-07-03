import { motion } from "framer-motion";

import sukhmanpreet from "../assets/sukhmanpreet.jpeg";
import namanjot from "../assets/namanjot.jpeg";
import abhishek from "../assets/abhishek.jpeg";
import aasutosh from "../assets/aasutosh.jpeg";
import sandeep from "../assets/sandeep.jpeg";
import sukhmanpreett from "../assets/sukhmanpreetk.jpeg";
import karandeep from "../assets/karandeep.jpeg";
import mokshita from "../assets/mokshita.jpeg";
import arpreet from "../assets/arpreet.jpeg";

const successStories = [
  { name: "Sukhmanpreet", image: sukhmanpreet },
  { name: "Namanjot Kaur", image: namanjot },
  { name: "Abhishek", image: abhishek },
  { name: "Aasutosh", image: aasutosh },
  { name: "Sandeep", image: sandeep },
  { name: "Sukhmanpreet Kaur", image: sukhmanpreett },
  { name: "Karandeep Singh", image: karandeep },
  { name: "Mokshita", image: mokshita },
  { name: "Arpreet", image: arpreet },
];

const cardVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: (i) => ({
    opacity: 1,
    rotateY: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const SuccessStory = () => {
  return (
    <section className="py-24 px-4 sm:px-6 bg-black text-white font-[Poppins]">
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse">
          🌟 Success Stories
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-4">
          Our proud achievers who transformed their futures with Vertex Study Visa.
        </p>
      </div>

      {/* Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-2 sm:px-4">
        {successStories.map(({ name, image }, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="relative rounded-3xl overflow-hidden border border-gray-800 bg-[#0b0b0b] transition-transform duration-300 hover:scale-105 hover:border-cyan-500 shadow-lg hover:shadow-cyan-500/20"
          >
            {/* Card Content */}
            <div className="h-44 sm:h-56 md:h-64 overflow-hidden rounded-t-3xl">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-2xl font-semibold tracking-wide text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text">
                {name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStory;
