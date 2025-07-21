import { useParams, useNavigate } from "react-router-dom";
import { useWrapper } from "../context/WrapperProvider";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

function Shpopdets() {
  const { id } = useParams();
  const { product } = useWrapper();
  const navigate = useNavigate();
  const data = product.find((item) => item.id === id);

  if (!data) {
    return (
      <div className="p-6">
        <h1 className="text-xl text-red-500">Product not found</h1>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen px-4 sm:px-8 py-10 flex justify-center items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="relative flex flex-col lg:flex-row gap-8 w-full max-w-6xl bg-black rounded-lg shadow-md p-6"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Back to Shop Button in top-left */}
        <motion.button
          onClick={() => navigate("/shop")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200 transition z-10"
        >
          ← Back to Shop
        </motion.button>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={data.url}
            alt={data.name}
            loading="lazy"
            className="w-full max-w-md object-cover rounded-md"
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 space-y-6 text-white"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{data.name}</h2>
            <p className="text-base md:text-lg text-gray-300 mb-4">
              {data.disc}
            </p>
            <h1 className="text-xl font-semibold text-green-400">
              ${data.price}
            </h1>
          </div>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Buy
            </motion.button>
            <motion.button
              onClick={() => {
                toast.success("Product Added successfully");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-zinc-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              <i className="ri-shopping-bag-line p-2"></i>
              Add to Cart
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Shpopdets;
