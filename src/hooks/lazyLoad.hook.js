import React, { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const img = imageRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.unobserve(img);
        }
      },
      { threshold: 0.1 }
    );

    if (img) {
      observer.observe(img);
    }

    return () => {
      if (img) {
        observer.unobserve(img);
      }
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={isLoaded ? src : ""}
      alt={alt}
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default LazyImage;