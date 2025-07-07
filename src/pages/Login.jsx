import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/admin");
    } catch (err) {
      setError("Invalid login credentials.");
    }
  };

  return (
    <section className="p-6 max-w-sm mx-auto">
      <h2 className="text-3xl font-bold mb-4">Admin Login</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full p-2 border" />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required className="w-full p-2 border" />
        <button type="submit" className="bg-black text-white px-6 py-3 rounded w-full">Login</button>
      </form>
    </section>
  );
}

export default Login;
