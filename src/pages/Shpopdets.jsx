import { useParams, useNavigate } from "react-router-dom";
import { useWrapper } from "../context/WrapperProvider";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useCallback } from "react";

function Shopdets() {
  const { id } = useParams();
  const { product } = useWrapper();
  const navigate = useNavigate();

  const data = product.find((item) => item.id.toString() === id);

  const handleAddToCart = useCallback(() => {
    if (!data) return;

    let cart = [];
    const storedCart = localStorage.getItem("shoppingCart");

    if (storedCart) {
      try {
        const parsed = JSON.parse(storedCart);
        if (Array.isArray(parsed)) {
          cart = parsed;
        }
      } catch (e) {
        console.error("Failed to parse localStorage cart:", e);
        cart = [];
      }
    }

    const exists = cart.find((item) => item.id.toString() === id);
    if (exists) {
      toast.info("Item is already in the cart!");
      return;
    }

    cart.push(data);
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    toast.success("Added to cart!");
  }, [id, data]);

  if (!data) {
    return (
      <div className="p-6 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl text-red-500 font-bold mb-4">Product Not Found</h1>
        <button
          onClick={() => navigate("/shop")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          ← Back to Shop
        </button>
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
        className="relative flex flex-col lg:flex-row gap-8 w-full max-w-6xl bg-black rounded-lg shadow-lg p-6"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.button
          onClick={() => navigate("/shop")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded-md shadow hover:bg-gray-200 transition z-10"
        >
          ← Back
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
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Buy Now
            </motion.button>
            <motion.button
              onClick={handleAddToCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-zinc-700 text-white px-6 py-2 rounded-md hover:bg-zinc-600 transition flex items-center gap-2"
            >
              <i className="ri-shopping-bag-line"></i>
              Add to Cart
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Shopdets;
