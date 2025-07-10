import { useParams } from "react-router-dom";

function ProductPage({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  const placeholderImage = "https://firebasestorage.googleapis.com/v0/b/e-commerce-203c7.firebasestorage.app/o/products%2Fplaceholder%20copy.jpg?alt=media&token=db9170c9-39f0-4513-8438-e62fb44aa30d";
  const displayImage = product?.image || placeholderImage;

  if (!product) {
    return <p className="p-6">Product not found.</p>;
  }

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <img src={displayImage} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-4">${product.price}</p>
      <p className="mb-4">{product.description}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white px-4 py-2"
      >
        Add to Cart
      </button>
    </section>
  );
}

export default ProductPage;
