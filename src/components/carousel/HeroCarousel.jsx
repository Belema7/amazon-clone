import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { img } from "./images/data"; 
import { useEffect, useMemo } from "react";

const HeroCarousel = () => {
  const debugThumbnails = true;
  useEffect(() => {
    // Debug: ensure images are imported correctly
    console.log("HeroCarousel images (raw):", img);
  }, []);

  const resolvedImages = useMemo(() => {
    if (!img) return [];
    return img.map((i) => (i && typeof i === "object" && i.default ? i.default : i));
  }, [img]);
  return (
    <div className="relative w-full">
      {(!resolvedImages || resolvedImages.length === 0) ? (
        <div className="flex items-center justify-center py-10">
          <p className="text-sm text-gray-500">No carousel images available. Check console logs for 'HeroCarousel images'.</p>
        </div>
      ) : (
        <Carousel
        autoPlay={true}
        infiniteLoop
        interval={3500}
        transitionTime={800}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
          showIndicators={true}
        swipeable={true}
        emulateTouch={true}
        stopOnHover={true}
        useKeyboardArrows={true}
        dynamicHeight={false}
        
        animationHandler="slide"
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
                onClick={onClickHandler}
              title={label}
                aria-label="Previous slide"
                className="absolute left-4 top-1/4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-10"
            >
              ❮
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
                onClick={onClickHandler}
              title={label}
                aria-label="Next slide"
              className="absolute right-4 top-1/4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-10"
            >
              ❯
            </button>
          )
        }
      >
        {resolvedImages.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image || 'https://via.placeholder.com/1200x500?text=Placeholder'}
              alt={`Slide ${index + 1}`}
                loading="lazy"
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover border-2 border-transparent hover:border-[#FF6200]"
            />
          </div>
        ))}
      </Carousel>
      )}
      {debugThumbnails && resolvedImages && resolvedImages.length > 0 && (
        <div className="mt-3 flex space-x-2 overflow-x-auto pb-2">
          {resolvedImages.map((image, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <img src={image} alt={`thumb-${idx}`} className="w-20 h-12 object-cover rounded-md" />
            </div>
          ))}
        </div>
      )}

      {/* ⭐ Amazon bottom fade overlay */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#EAEDED] to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroCarousel;
