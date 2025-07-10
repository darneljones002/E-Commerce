import { Link } from "react-router-dom";

function Home({ products }) {
  const placeholderImage = "https://firebasestorage.googleapis.com/v0/b/e-commerce-203c7.firebasestorage.app/o/products%2Fplaceholder%20copy.jpg?alt=media&token=db9170c9-39f0-4513-8438-e62fb44aa30d";

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map(product => {
        const displayImage = product.image || placeholderImage;
        return (
          <Link to={`/product/${product.id}`} key={product.id} className="border p-4 flex flex-col">
            <img src={displayImage} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-700">${product.price}</p>
          </Link>
        );
      })}
    </section>
  );
}

export default Home;
