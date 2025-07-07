import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-6">Page not found.</p>
      <Link to="/" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
        Go Home
      </Link>
    </section>
  );
}

export default NotFound;
