import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <Link to="/" className="bg-black text-white px-6 py-3 rounded">Go Home</Link>
    </section>
  );
}

export default NotFound;
