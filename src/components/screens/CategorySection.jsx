import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CategorySection() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/categories.json")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Failed to load categories:", err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto p-10">
      <h3 className="text-center text-4xl font-extrabold text-pink-500 uppercase mb-10">
        Shop By Category
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map(cat => (
          <div
            key={cat.id}
            className="bg-pink-200 border-2 border-pink-200 rounded-xl text-center p-3 cursor-pointer transition transform hover:-translate-y-1 hover:shadow-lg"
            onClick={() => navigate(`/products/${cat.slug}`)}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-36 object-cover mb-2 rounded-t-lg"
            />
            <div className="font-bold text-xs mb-1">{cat.name}</div>
            <div className="font-extrabold text-lg">
              {`Up to ${cat.discount}% off`}
            </div>
            <div className="text-xs uppercase font-bold text-pink-700 mt-2">
              shop now
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
