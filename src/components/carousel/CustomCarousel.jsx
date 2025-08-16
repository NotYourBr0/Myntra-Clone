import React, { useState, useEffect } from "react";
const images = [
  "/images/carousel/slider1.jpeg",
  "/images/carousel/slider2.jpeg",
  "/images/carousel/slider3.jpeg",
  "/images/carousel/slider4.jpeg",
  "/images/carousel/slider5.jpeg",
  "/images/carousel/slider6.jpeg",
  "/images/carousel/slider7.jpeg",
  "/images/carousel/slider8.jpeg",
  "/images/carousel/slider9.jpeg",
];

function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Function to get the number of items per slide based on screen size
  const getItemsPerSlide = () => {
    if (window.innerWidth >= 1024) {
      return 3;
    } else if (window.innerWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  };

  // Update itemsPerSlide on window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(images.length / itemsPerSlide);

  // Automatic slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const handleDotClick = idx => setCurrentIndex(idx);

  const start = currentIndex * itemsPerSlide;
  const currentImages = images.slice(start, start + itemsPerSlide);

  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
      <div className="flex gap-4 sm:gap-6">
        {currentImages.map((img, i) => (
          <div
            key={img}
            className="flex-1 min-w-0 rounded-md overflow-hidden transition hover:scale-105"
          >
            <img
              src={img}
              alt={`slide-${start + i}`}
              className="w-full h-56 object-cover border-4 border-yellow-400 rounded-lg shadow"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 gap-3">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <span
            key={i}
            className={`h-3 w-3 rounded-full cursor-pointer transition ${currentIndex === i ? "bg-yellow-400" : "bg-gray-400"}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomCarousel;