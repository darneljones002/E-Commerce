import { useState, useEffect, useCallback } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { signOut } from "firebase/auth";

function Admin() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", description: "", image: "" });

  const productsRef = collection(db, "products");

  const fetchProducts = useCallback(async () => {
    const snapshot = await getDocs(productsRef);
    setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  }, [productsRef]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleAdd = async () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) return;
    await addDoc(productsRef, { 
      ...newProduct, 
      price: Number(newProduct.price) 
    });
    setNewProduct({ name: "", price: "", description: "", image: "" });
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
      <button onClick={() => signOut(auth)} className="bg-red-500 text-white px-4 py-2 mb-6">Logout</button>

      <div className="mb-6">
        <input
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="border p-2 mr-2 mb-2"
        />
        <input
          placeholder="Price"
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="border p-2 mr-2 mb-2"
        />
        <input
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          className="border p-2 mr-2 mb-2"
        />
        <input
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          className="border p-2 mr-2 mb-2"
        />
        <button onClick={handleAdd} className="bg-black text-white px-4 py-2">Add</button>
      </div>

      <ul>
        {products.map(p => (
          <li key={p.id} className="flex justify-between border-b py-2">
            <span>{p.name} — ${p.price}</span>
            <button onClick={() => handleDelete(p.id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Admin;
