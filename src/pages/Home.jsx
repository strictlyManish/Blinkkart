import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 text-white">
      <div className="rounded-3xl p-4 md:p-10 w-full max-w-7xl relative overflow-hidden min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
          <div className="relative z-10 space-y-6 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-white"
            >
              Beats Solo
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl font-extrabold text-white"
            >
              Wireless
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.06 }}
              transition={{ delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:top-0 lg:-translate-x-0 lg:-translate-y-0 text-[20vw] lg:text-[13vw] font-extrabold text-white tracking-tighter pointer-events-none select-none"
            >
              HEADPHONE
            </motion.h1>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-full shadow-md w-fit mx-auto lg:mx-0"
              onClick={()=>navigate("/shop")}
            >
              Shop By Category
            </motion.button>
          </div>

          <div className="relative flex flex-col items-center">
            <motion.img
              src="src/assets/first_headphones.png"
              alt="Wireless Headphone"
              className="w-full max-w-sm md:max-w-md drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />

            <motion.div
              className="mt-4 lg:absolute lg:bottom-0 lg:right-0 text-center lg:text-right p-4 max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h4 className="text-md font-semibold text-white">Description</h4>
              <p className="text-gray-300 text-sm mt-2 leading-snug">
                There are many variations passages of Lorem Ipsum available, but
                the majority have suffered alteration
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
