import { Link } from "react-router-dom";

function Home({ products }) {
  return (
    <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => {
        const displayImage = product.image || "/assets/products/placeholder.jpg";
        return (
          <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg transition">
            <Link to={`/product/${product.id}`}>
              <img src={displayImage} alt={product.name} className="w-full h-64 object-cover mb-4" />
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </Link>
          </div>
        );
      })}
    </section>
  );
}

export default Home;
