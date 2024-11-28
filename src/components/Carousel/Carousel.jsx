import { useState } from "react";

const Carousel = () => {
  const slides = [
    { id: 1, url: "/Carousel/0511ba08d5abe9aa.jpg.webp" },
    { id: 2, url: "/Carousel/1316eb53d6f52c71.jpg.webp" },
    { id: 3, url: "/Carousel/69841ae2338de519.jpeg.webp" },
    { id: 4, url: "/Carousel/a76db078b31108e1.jpeg.webp" },
    { id: 3, url: "/Carousel/cf3eceea3f859d00.jpeg.webp" },
    { id: 3, url: "/Carousel/dd484f1b19c67712.jpg.webp" },
    { id: 3, url: "/Carousel/f7b74e32c435adb6.jpg.webp" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full min-w-4xl mx-auto overflow-hidden">
      <div
        className="w-full h-64 md:h-80 flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <img
            key={slide.id}
            src={slide.url}
            alt={`Slide ${slide.id}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
      >
        &#8592;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
      >
        &#8594;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
