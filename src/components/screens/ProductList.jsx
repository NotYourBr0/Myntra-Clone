import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductList() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(item => item.category === category);
        setProducts(filtered);
      });
  }, [category]);

  const sortProducts = (products) => {
    switch (sortType) {
      case "price-low-high":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-high-low":
        return [...products].sort((a, b) => b.price - a.price);
      case "rating":
        return [...products].sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(products);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-extrabold text-pink-500 capitalize">{category.replace(/-/g, " ")}</h2>
        <div>
          <label className="mr-2 font-medium">Sort by:</label>
          <select
            value={sortType}
            onChange={e => setSortType(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="default">Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7">
        {sortedProducts.map(item => (
          <Link
            to={`/details/${item.id}`}
            key={item.id}
            className="block bg-white rounded-lg shadow hover:shadow-xl transition"
          >
            <img src={item.image} alt={item.title} className="w-full h-56 object-cover rounded-t-lg" />
            <div className="p-3">
              <h3 className="font-bold text-sm mb-1">{item.title}</h3>
              <p className="text-gray-700 text-xs mb-1">{item.brand}</p>
              <div className="flex items-center gap-2">
                <span className="font-bold">&#8377;{item.price}</span>
                {item.discount > 0 && (
                  <span className="text-green-600 font-medium text-xs">{item.discount}% OFF</span>
                )}
              </div>
              <div className="text-yellow-500 text-xs">Rating: {item.rating}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default ProductList;
