import { useEffect, useState } from "react";
import { carouselImage } from "../Utils/Constant";

const Hero_Section = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const handlePrevClick = () => {
    setActiveImageIndex(!activeImageIndex ? carouselImage.length - 1 : activeImageIndex - 1);
  };

  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % carouselImage.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  return (
    <>
      {/* Section 1 */}
      <section className="relative flex w-full h-full overflow-hidden">
        {carouselImage.map((item, index) => (
          <img
            key={index}
            src={`/carousel_Image/${item.src}`}
            alt={item.alt}
            className={`w-full h-full object-cover ${activeImageIndex === index ? "block" : "hidden"}`}
          />
        ))}
        <a className="w-6 h-6 md:w-8 md:h-8 absolute bottom-4 left-2 cursor-pointer" onClick={handlePrevClick}>
          <img src="/left-arrow.png" alt="Previous Image" />
        </a>
        <a className="w-6 h-6 md:w-8 md:h-8 absolute bottom-4 right-2 cursor-pointer" onClick={handleNextClick}>
          <img src="/right-arrow.png" alt="Next Image" />
        </a>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselImage.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300
        ${activeImageIndex === index ? "bg-white scale-110" : "bg-white/50 hover:bg-white"}
      `}
            />
          ))}
        </div>
      </section>

      {/* Section 2 */}
      <section className="px-4 md:px-8 py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6 text-balance">Find Your Perfect Pet Match</h2>
        <p className="text-lg md:text-xl text-amber-700 mb-8 text-pretty">
          Explore adorable pets and discover which one captures your heart. Browse our collection of dogs, cats,
          rabbits, birds, and more!
        </p>
        <div className="inline-block bg-linear-to-r from-amber-400 to-orange-400 p-1 rounded-full">
          <div className="bg-white px-8 py-3 rounded-full">
            <p className="text-amber-900 font-semibold">✨ Start exploring below!</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero_Section;
