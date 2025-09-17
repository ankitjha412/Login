import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses =
    "relative group text-white font-medium transition-colors duration-300 hover:text-teal-300";
  const underline =
    "absolute left-0 bottom-0 h-[2px] w-0 bg-teal-300 transition-all duration-300 group-hover:w-full";

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-indigo-900 to-violet-800 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link
          to="/"
          className="font-extrabold text-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          MyApp
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link className={linkClasses} to="/">
            Home <span className={underline}></span>
          </Link>
          {!user ? (
            <>
              <Link className={linkClasses} to="/login">
                Login <span className={underline}></span>
              </Link>
              <Link className={linkClasses} to="/register">
                Signup <span className={underline}></span>
              </Link>
            </>
          ) : (
            <>
              <Link className={linkClasses} to="/profile">
                Profile <span className={underline}></span>
              </Link>
              <button
                onClick={logout}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-rose-600 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Links */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-r from-slate-900/95 via-indigo-900/95 to-violet-800/95 backdrop-blur-lg px-6 py-6 space-y-6 text-white shadow-xl"
          >
            <Link
              className={linkClasses}
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home <span className={underline}></span>
            </Link>
            {!user ? (
              <>
                <Link
                  className={linkClasses}
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                >
                  Login <span className={underline}></span>
                </Link>
                <Link
                  className={linkClasses}
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                >
                  Register <span className={underline}></span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  className={linkClasses}
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                >
                  Profile <span className={underline}></span>
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-rose-600 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Logout
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
