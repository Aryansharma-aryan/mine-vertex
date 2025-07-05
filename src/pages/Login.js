import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrMsg("");

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      const { token, admin } = res.data;

      if (token) {
        localStorage.setItem("adminToken", token);
        localStorage.setItem("adminEmail", admin?.email || email);
        navigate("/admin/consultants");
      } else {
        setErrMsg("Unexpected response from server.");
      }
    } catch (err) {
      setErrMsg("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#0f172a] flex items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-md rounded-3xl p-[2px] bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 shadow-2xl">
        <div className="bg-white/10 backdrop-blur-lg rounded-[22px] px-8 py-10 sm:px-10 space-y-6">

          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Admin Login</h2>
            <p className="text-sm text-gray-300 mt-1">Access your dashboard securely</p>
          </div>

          {errMsg && <div className="text-red-500 text-sm text-center">{errMsg}</div>}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-white/10 text-white placeholder-gray-300 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="admin@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-white/10 text-white placeholder-gray-300 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl text-white font-semibold shadow-md transition duration-300 ${
                loading
                  ? "bg-orange-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-orange-500 via-red-400 to-pink-500 hover:scale-105"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-xs text-center text-gray-400 pt-4 border-t border-gray-500/40">
            © {new Date().getFullYear()} Vertex Study Visa
          </p>
        </div>
      </div>
    </div>
  );
}
