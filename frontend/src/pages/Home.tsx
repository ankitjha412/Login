import { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-center items-center h-[90vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          {user ? `Welcome back, ${user.username}! ` : "Welcome to MyApp "}
        </h1>
        <p className="mt-4 text-lg md:text-xl font-light">
          {user
            ? "Great to see you again! Let's continue where you left off."
            : "Sign up or log in to get started."}
        </p>

        {user && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:scale-105 transform transition"
          >
             You’re logged in and ready to explore!
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Home;
