import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { img } from "./images/data"; 

const HeroCarousel = () => {
  return (
    <div className="relative w-full">
      <Carousel
        autoPlay={false}
        infiniteLoop
        interval={3500}
        transitionTime={800}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        showIndicators={false}
        swipeable={true}
        emulateTouch={true}
        stopOnHover={false}
        dynamicHeight={false}
        
        animationHandler="fade"
        renderArrowPrev={(onClick, hasPrev, label) =>
          hasPrev && (
            <button
              onClick={onClick}
              title={label}
              className="absolute left-4 top-1/4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-10"
            >
              ❮
            </button>
          )
        }
        renderArrowNext={(onClick, hasNext, label) =>
          hasNext && (
            <button
              onClick={onClick}
              title={label}
              className="absolute right-4 top-1/4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-10"
            >
              ❯
            </button>
          )
        }
      >
        {img.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        ))}
      </Carousel>

      {/* ⭐ Amazon bottom fade overlay */}
      <div className="absolute bottom-0 w-full h-40 bg-linear-to-t from-[#EAEDED] to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroCarousel;
