import React, { useState, useEffect } from "react";
import "./index.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const addProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      description: productDescription,
      price: productPrice,
    };
    setProducts([...products, newProduct]);
    setProductName("");
    setProductDescription("");
    setProductPrice("");
  };

  useEffect(() => {
    console.log("A new product has been added!", products);
  }, [products]);

  return (
    <div className="products">
      <h1>Products</h1>
      <form onSubmit={addProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Products;
