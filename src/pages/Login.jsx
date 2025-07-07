// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/admin");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <section className="max-w-sm mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          value={form.email}
          className="w-full p-2 border"
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          value={form.password}
          className="w-full p-2 border"
        />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Login</button>
      </form>
    </section>
  );
}

export default Login;
