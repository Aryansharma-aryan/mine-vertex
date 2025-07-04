import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-24 px-6 font-[Poppins]">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4 animate-pulse">
          📬 Contact Us
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Reach out for personalized visa consultation — we’re always happy to help.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8 backdrop-blur-sm bg-white/5 p-8 rounded-2xl shadow-xl border border-white/10">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-yellow-400 text-2xl mt-1" />
            <div>
              <h4 className="text-lg font-semibold">Our Office</h4>
              <p className="text-gray-300">
                SCO-1, Vidhata Complex, Opp. New Bus Stand, Near Bikaner, Kurukshetra, Haryana
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-yellow-400 text-2xl mt-1" />
            <div>
              <h4 className="text-lg font-semibold">Email</h4>
              <p className="text-gray-300">vertexstudyvisa@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhone className="text-yellow-400 text-2xl mt-1" />
            <div>
              <h4 className="text-lg font-semibold">Phone</h4>
              <p className="text-gray-300">8053555546, 9996140555</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="bg-white/5 p-8 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-md space-y-6"
          onSubmit={(e) => e.preventDefault()} // Dummy handler
        >
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows="4"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-3 rounded-lg font-semibold transition shadow-md hover:shadow-yellow-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="mt-20 max-w-6xl mx-auto rounded-2xl overflow-hidden border border-yellow-400 shadow-xl">
        <iframe
          title="Vertex Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.4747397983957!2d76.83503677548288!3d29.96229687505651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e42c85e0b8bc3%3A0x36d3e2d87e4e4dc3!2sNew%20Bus%20Stand%2C%20Kurukshetra%2C%20Haryana%20136018!5e0!3m2!1sen!2sin!4v1720203156047!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
