import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (isLogin) {
      console.log("Login Data:", data);
    } else {
      console.log("Register Data:", data);
    }
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
      <motion.div
        className="w-full max-w-md  rounded-2xl shadow-2xl p-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-">
          {isLogin ? "Login to Your Account" : "Create a New Account"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-orange-600">
          {!isLogin && (
            <div>
              <label className="block mb-1 text-sm font-medium">Full Name</label>
              <input
                {...register("name", { required: !isLogin })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-300 placeholder-orange-300"
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
            </div>
          )}

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-300 placeholder-orange-300"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              {...register("password", { required: true, minLength: 6 })}
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-300 placeholder-orange-300"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            className="w-full py-2 mt-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
          >
            {isLogin ? "Login" : "Register"}
          </motion.button>
        </form>

        <div className="mt-4 text-center text-sm text-orange-600">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                className="text-orange-500 font-medium hover:underline"
                onClick={() => setIsLogin(false)}
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                className="text-orange-500 font-medium hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
