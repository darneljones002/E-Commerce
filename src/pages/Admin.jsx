import { useState, useEffect, useCallback } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { signOut } from "firebase/auth";

function Admin() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", description: "", image: "" });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const productsRef = collection(db, "products");

  const fetchProducts = useCallback(async (isMounted) => {
    setLoading(true);
    try {
      const snapshot = await getDocs(productsRef);
      if (isMounted.current) {
        setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      if (isMounted.current) setMessage("Failed to load products");
    }
    if (isMounted.current) setLoading(false);
  }, [productsRef]);

  useEffect(() => {
    const isMounted = { current: true };
    fetchProducts(isMounted);
    return () => {
      isMounted.current = false;
    };
  }, [fetchProducts]);

  const handleAdd = async () => {
    if (!newProduct.name || !newProduct.price) return;
    try {
      await addDoc(productsRef, {
        ...newProduct,
        price: Number(newProduct.price)
      });
      setNewProduct({ name: "", price: "", description: "", image: "" });
      setMessage("Product added!");
      fetchProducts({ current: true });
      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      console.error("Error adding product:", err);
      setMessage("Failed to add product");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      setMessage("Product deleted!");
      fetchProducts({ current: true });
      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      console.error("Error deleting product:", err);
      setMessage("Failed to delete product");
    }
  };

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
      <button onClick={() => signOut(auth)} className="bg-red-500 text-white px-4 py-2 mb-6">Logout</button>

      {message && <p className="text-green-500 mb-4">{message}</p>}
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <>
          <div className="mb-6">
            <input placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} className="border p-2 mr-2 mb-2" />
            <input placeholder="Price" type="number" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} className="border p-2 mr-2 mb-2" />
            <input placeholder="Description" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} className="border p-2 mr-2 mb-2" />
            <input placeholder="Image URL (optional)" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} className="border p-2 mr-2 mb-2" />
            <button onClick={handleAdd} className="bg-black text-white px-4 py-2">Add</button>
          </div>

          {products.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <ul>
              {products.map(p => (
                <li key={p.id} className="flex justify-between border-b py-2 items-center">
                  <div>
                    <strong>{p.name}</strong> — ${p.price}
                  </div>
                  <button onClick={() => handleDelete(p.id)} className="text-red-500">Delete</button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </section>
  );
}

export default Admin;
