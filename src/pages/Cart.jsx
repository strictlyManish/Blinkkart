import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("shoppingCart");
    if (storedCart) {
      try {
        const parsedItems = JSON.parse(storedCart);
        if (Array.isArray(parsedItems)) {
          setCartItems(parsedItems);
        }
      } catch (e) {
        console.error("Failed to parse cart data from localStorage:", e);
        setCartItems([]);
      }
    }
  }, []);

  const handleRemoveItem = useCallback(
    (itemId) => {
      const updatedCart = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCart);
      localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
    },
    [cartItems]
  );

  const handleClearCart = useCallback(() => {
    setCartItems([]);
    localStorage.removeItem("shoppingCart");
  }, []);

  const cartTotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + Number(item.price || 0),
      0
    );
  }, [cartItems]);

  return (
    <motion.div
      className="min-h-screen p-4 sm:p-6 lg:p-8 bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl font-bold mb-6 text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          🛒 Your Cart
        </motion.h1>

        {cartItems.length === 0 ? (
          <motion.p
            className="text-center text-gray-400 bg-gray-800 p-8 rounded-lg shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Your cart is empty.
          </motion.p>
        ) : (
          <div className="space-y-4">
            <motion.ul
              layout
              className="space-y-4 bg-white p-4 rounded-lg shadow"
            >
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.li
                    key={item.id}
                    className="flex flex-col sm:flex-row justify-between items-center p-4 border-b last:border-b-0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4 sm:mb-0">
                      <img
                        src={item.url}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div>
                        <h2 className="text-lg font-semibold text-gray-800">
                          {item.name}
                        </h2>
                        <p className="text-gray-600">
                          ${parseFloat(item.price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors text-sm"
                    >
                      Remove
                    </button>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>

            <motion.div
              className="bg-white p-6 rounded-lg shadow mt-6 text-right"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-xl font-semibold text-gray-800">
                Total: ${cartTotal.toFixed(2)}
              </h2>
              <p className="text-sm text-gray-500">
                Shipping & taxes calculated at checkout.
              </p>
              <div className="flex flex-col sm:flex-row justify-end gap-4 mt-4">
                <button
                  onClick={handleClearCart}
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Clear Cart
                </button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Checkout
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cart;
