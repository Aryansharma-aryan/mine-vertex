import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Animated Spinner */}
      <motion.div
        className="w-20 h-20 border-[6px] border-gray-300 border-t-[#d6002f] rounded-full mb-8 shadow-xl"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        whileHover={{ scale: 1.1 }}
        style={{ boxShadow: "0 0 20px rgba(214, 0, 47, 0.5)" }}
      />

      {/* Shimmer Text with entrance animation */}
      <motion.h1
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="relative text-4xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-[#d6002f] to-[#8b0021] bg-clip-text drop-shadow-[0_3px_10px_rgba(214,0,47,0.4)] shimmer-text tracking-widest"
      >
        VERTEX STUDY VISA
      </motion.h1>

      {/* Animated underline or bounce text */}
      <motion.div
        className="mt-4 text-sm md:text-base text-gray-600 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        Empowering Dreams. Enabling Futures.
      </motion.div>

      {/* Background shine overlay */}
      <style jsx>{`
        .shimmer-text::before {
          content: '';
          position: absolute;
          top: 0;
          left: -150%;
          height: 100%;
          width: 100%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.6) 50%,
            transparent 100%
          );
          animation: shimmer 2.5s infinite;
        }

        @keyframes shimmer {
          0% {
            left: -150%;
          }
          100% {
            left: 150%;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
