import React, { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import { Product } from "../types";

interface MarketplaceProps {
  showToast: (args: { title: string; message: string; type?: "success" | "danger" | "info" | "warning" }) => void;
}

// JSONBin.io Config
const BIN_ID = "692f3ce8d0ea881f400e7911";
const API_KEY = "$2a$10$Ad6b4e2E966Az590iZqmUuaqG6ax1mHjpyzSOKDYBXY5FXZEMsJie";
const ADMIN_PASSWORD = "tariq@909";
const NAVY = "#1e3a8a";

const Marketplace: React.FC<MarketplaceProps> = ({ showToast }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [newProduct, setNewProduct] = useState({ title: "", price: "", image: "" });

  const loadProducts = async () => {
    try {
      const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { "X-Master-Key": API_KEY },
      });
      const data = await res.json();
      setProducts(data.record.products || []);
      setLoading(false);
    } catch (err) {
      console.error(err);
      showToast({ title: "Error", message: "Failed to load products", type: "danger" });
      setLoading(false);
    }
  };

  const saveProducts = async (updatedProducts: Product[]) => {
    await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY,
      },
      body: JSON.stringify({ products: updatedProducts }),
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const askPassword = () => {
    const pass = prompt("Enter admin password:");
    if (pass === ADMIN_PASSWORD) {
      setIsAdmin(true);
      alert("Access granted");
    } else alert("Wrong password");
  };

  const addProduct = async () => {
    if (!isAdmin) return alert("Admin access required");

    const newItem: Product = {
      id: Date.now().toString(),
      title: newProduct.title,
      price: newProduct.price,
      image: newProduct.image,
    };

    const updatedProducts = [...products, newItem];
    setProducts(updatedProducts);
    await saveProducts(updatedProducts);
    setNewProduct({ title: "", price: "", image: "" });
    showToast({ title: "Added", message: "Product added successfully" });
  };

  const deleteProduct = async (id: string) => {
    if (!isAdmin) return alert("Admin access required");

    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    await saveProducts(updatedProducts);
    showToast({ title: "Deleted", message: "Product removed successfully" });
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">Our Products – Tariq Al Khoud LLC</h1>

      <ProductGrid products={products} onDelete={isAdmin ? deleteProduct : undefined} />
      <br />

      {!isAdmin && (
        <div className="mt-6 text-center">
          <button
            className="px-5 py-2 rounded text-white"
            style={{ backgroundColor: NAVY }}
            onClick={askPassword}
          >
            Admin Login
          </button>
        </div>
      )}

      {isAdmin && (
        <div className="mt-10 border p-5 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Add Product</h2>

          <input
            className="border p-2 w-full mb-3"
            placeholder="Product Name"
            value={newProduct.title}
            onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
          /> &nbsp; &nbsp;

          <input
            className="border p-2 w-full mb-3"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          /> &nbsp; &nbsp;

          {/* Buttons */}
          <div className="flex gap-4 mt-2">
            <button
              className="px-5 py-2 rounded text-white"
              style={{ backgroundColor: NAVY }}
              onClick={addProduct}
            >
              Add Product
            </button>

            <button
              className="px-5 py-2 rounded text-white"
              style={{ backgroundColor: NAVY }}
              onClick={() => window.open("https://postimages.org/", "_blank")}
            >
              Get Image URL
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;
