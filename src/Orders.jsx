import { useState, useEffect, useCallback } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "./firebase";
import { signOut } from "firebase/auth";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const ordersRef = collection(db, "orders");

  const fetchOrders = useCallback(async (isMounted) => {
    setLoading(true);
    try {
      const snapshot = await getDocs(ordersRef);
      if (isMounted.current) {
        setOrders(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
      if (isMounted.current) setMessage("Failed to load orders");
    }
    if (isMounted.current) setLoading(false);
  }, [ordersRef]);

  useEffect(() => {
    const isMounted = { current: true };
    fetchOrders(isMounted);
    return () => {
      isMounted.current = false;
    };
  }, [fetchOrders]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "orders", id));
      setMessage("Order deleted!");
      fetchOrders({ current: true });
      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      console.error("Error deleting order:", err);
      setMessage("Failed to delete order");
    }
  };

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Orders Dashboard</h2>
      <button onClick={() => signOut(auth)} className="bg-red-500 text-white px-4 py-2 mb-6">Logout</button>

      {message && <p className="text-green-500 mb-4">{message}</p>}
      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order.id} className="border-b py-4">
              <p><strong>Name:</strong> {order.name}</p>
              <p><strong>Email:</strong> {order.email}</p>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Items:</strong> {order.items ? order.items.map(i => `${i.name} x ${i.quantity}`).join(", ") : "N/A"}</p>
              <button onClick={() => handleDelete(order.id)} className="text-red-500 mt-2">Delete Order</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Orders;
