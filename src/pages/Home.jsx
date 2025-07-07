import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home({ products }) {
  return (
    <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <motion.div 
          key={product.id} 
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded shadow overflow-hidden"
        >
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} className="w-full h-72 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </section>
  );
}

export default Home;
