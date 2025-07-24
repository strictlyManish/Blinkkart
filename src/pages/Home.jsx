import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import headphoneImg from "../assets/first_headphones.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-4 sm:px-6 text-white bg-black">
      <div className="rounded-3xl p-4 md:p-10 w-full max-w-7xl relative overflow-hidden flex flex-col justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
          {/* LEFT TEXT SECTION */}
          <div className="relative z-10 space-y-6 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl"
            >
              Beats Solo
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
            >
              Wireless
            </motion.h2>

            {/* BACKGROUND HEADPHONE TEXT */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.06 }}
              transition={{ delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:top-0 lg:-translate-x-0 lg:-translate-y-0 text-[22vw] md:text-[18vw] lg:text-[13vw] font-extrabold tracking-tighter pointer-events-none select-none"
            >
              HEADPHONE
            </motion.h1>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-full shadow-md mx-auto lg:mx-0"
              onClick={() => navigate("/shop")}
            >
              Shop By Category
            </motion.button>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative flex flex-col items-center w-full">
            <motion.img
              src={headphoneImg}
              alt="Wireless Headphone"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />

            {/* DESCRIPTION BOX */}
            <motion.div
              className="mt-6 lg:absolute lg:bottom-4 lg:right-4 text-center lg:text-right p-4 max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h4 className="text-md font-semibold">Description</h4>
              <p className="text-gray-300 text-sm mt-2 leading-snug">
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
