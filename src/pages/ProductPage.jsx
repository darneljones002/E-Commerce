import { useParams, useNavigate } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function ProductPage({ products, addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found.</div>;

  return (
    <section className="py-12 px-4 max-w-3xl mx-auto">
      <Zoom>
        <img src={product.image} alt={product.name} className="w-full rounded shadow mb-6" />
      </Zoom>
      <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
      <p className="text-lg text-gray-600 mb-4">{product.description}</p>
      <p className="text-2xl font-semibold mb-6">${product.price}</p>
      <button
        onClick={() => {
          addToCart(product);
          navigate("/cart");
        }}
        className="bg-black text-white px-6 py-3 rounded"
      >
        Add to Cart
      </button>
    </section>
  );
}

export default ProductPage;
