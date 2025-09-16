import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { updateProfile, deleteUser } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { motion } from "framer-motion";
import { User, Mail } from "lucide-react"; 
import toast from "react-hot-toast";
import ConfirmModal from "../components/ConfirmModal";

const Profile = () => {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  const handleUpdate = async () => {
    if (!token) return;
    try {
      await updateProfile(token, { username, email });
      toast.success("Profile updated successfully ✅");
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Update failed ❌");
    }
  };

  const handleDelete = async () => {
    if (!token) return;
    try {
      await deleteUser(token);
      toast.success("Account deleted successfully");
      logout();
      navigate("/register");
    } catch (err) {
      toast.error("Delete failed ❌");
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-lg w-full mx-4 p-8 rounded-2xl shadow-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg"
      >
        {/* Header with Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md">
            {user.username.charAt(0).toUpperCase()}
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-gray-100">
            {user.username}
          </h2>
          <span className="mt-1 px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-800 dark:text-indigo-200">
            Joined {new Date(user.created_at).toLocaleDateString()}
          </span>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <FormInput
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <FormInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={handleUpdate}
            className="flex-1 py-3 rounded-xl font-semibold text-white 
                       bg-gradient-to-r from-blue-500 to-indigo-600 
                       shadow-md hover:shadow-xl transform hover:scale-105 
                       transition-all duration-300"
          >
            Update
          </button>
          <button
            onClick={() => setShowConfirm(true)} 
            className="flex-1 py-3 rounded-xl font-semibold text-white 
                       bg-gradient-to-r from-red-500 to-pink-500 
                       shadow-md hover:shadow-xl transform hover:scale-105 
                       transition-all duration-300"
          >
            Delete
          </button>
        </div>
      </motion.div>

      {/* Confirm Modal */}
      <ConfirmModal
        isOpen={showConfirm}
        title="Delete Account"
        message="Are you sure you want to permanently delete your account? This action cannot be undone."
        onConfirm={() => {
          setShowConfirm(false);
          handleDelete();
        }}
        onCancel={() => setShowConfirm(false)}
      />
    </div>
  );
};

export default Profile;
