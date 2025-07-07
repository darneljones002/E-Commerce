import { useParams } from "react-router-dom";

function ProductPage({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="p-6">Product not found.</div>;
  }

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover mb-6 rounded" />
      <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
      <p className="text-lg mb-2">${product.price}</p>
      <p className="mb-4">{product.description}</p>
      <button 
        onClick={() => addToCart(product)} 
        className="bg-black text-white px-6 py-3 rounded"
      >
        Add to Cart
      </button>
    </section>
  );
}

export default ProductPage;
