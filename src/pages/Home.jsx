import { Link } from "react-router-dom";

function Home({ products }) {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold text-center mb-10">London Street Fashion</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded shadow hover:shadow-lg transition">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
