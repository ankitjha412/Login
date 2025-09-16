import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import FormInput from "../components/FormInput";

const Login = () => {
  const { login, token } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      navigate("/");
    } catch (err: any) {
      setError(err.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200 overflow-hidden">
      {/* Decorative floating blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>

      {/* Login Card */}
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-sm p-8 space-y-6 rounded-2xl shadow-2xl 
                   bg-white/70 backdrop-blur-xl 
                   animate-[float_6s_ease-in-out_infinite]"
      >
        {/* Headline */}
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-white-500 to-gray-900 bg-clip-text text-transparent animate-fade-in">
          Login
        </h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Inputs */}
       <FormInput
  type="email"
  label="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
<FormInput
  type="password"
  label="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>


        {/* Button */}
       <button
  type="submit"
  disabled={loading}
  className="w-full py-3 rounded-xl font-semibold text-white 
             bg-gradient-to-r from-green-400 to-teal-500
             shadow-md hover:shadow-xl transform hover:scale-105 
             transition-all duration-300 
             disabled:opacity-60 flex justify-center items-center
             focus:ring-2 focus:ring-teal-400"
>
  {loading ? (
    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
  ) : (
    "Login"
  )}
</button>

      </form>
    </div>
  );
};

export default Login;
