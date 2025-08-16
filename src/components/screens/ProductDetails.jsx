import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => {
        const selected = data.find(p => p.id === parseInt(id));
        const similar = data
          .filter(p => p.id !== parseInt(id) && p.category === selected.category)
          .slice(0, 3);
        setProduct(selected);
        setSimilarProducts(similar);
      });
  }, [id]);

  if (!product)
    return <div className="text-center p-20 text-lg text-gray-500">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1 p-4 border rounded-lg bg-gray-50 flex items-center justify-center">
          <img src={product.image} alt={product.title} className="w-ful h-fit object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold text-pink-500 mb-3">{product.title}</h2>
          <div className="mb-2 text-lg font-medium">{product.brand}</div>
          <div className="mb-4 text-green-600 font-bold">Discount: {product.discount}% Off</div>
          <div className="mb-2 text-lg font-semibold">&#8377;{product.price}</div>
          <div className="text-yellow-500 mb-2">Rating: {product.rating}</div>
          <div className="mb-3">
            <label className="font-medium mr-2">Enter pincode:</label>
            <input type="text" className="border rounded px-2 py-1 w-24" placeholder="PIN" />
          </div>
          <p className="mb-3 text-gray-700">Please enter PIN code to check delivery time &amp; Pay on Delivery Availability</p>
          <div className="mb-3 font-bold text-pink-700">Coupon code: MYNTRAEXCLUSIVE</div>
          <div className="mb-3 text-green-600 font-semibold">Coupon Discount: 40% off (Your total saving: Rs. 1420)</div>
          <div className="mb-4 text-sm text-gray-600">EMI starting from Rs.42/month View Plan</div>
          <button className="bg-pink-500 text-white font-bold px-5 py-2 rounded shadow hover:bg-pink-600 mr-3">Add to Cart</button>
          <button className="border border-pink-400 text-pink-500 font-bold px-5 py-2 rounded hover:bg-pink-100">Wishlist</button>
        </div>
      </div>
      <div className="mt-12">
        <div className="font-bold text-xl mb-5 text-gray-800">Similar Products</div>
        <div className="flex gap-7">
          {similarProducts.map(item => (
            <Link to={`/details/${item.id}`} key={item.id} className="w-52 block bg-gray-100 rounded-lg hover:shadow-md transition">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-2">
                <h3 className="font-bold text-sm">{item.title}</h3>
                <div className="text-yellow-500 text-xs">Rating: {item.rating}</div>
                <span className="font-semibold">&#8377;{item.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
