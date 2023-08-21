import React from "react";
import { useInView } from "react-intersection-observer";
import { useHorizontalScroll } from "../horizontalScroll/horizontalScroll";
import "./gallery.css";

const Gallery = ({ children }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const scrollRef = useHorizontalScroll();

  return (
    <div
      ref={scrollRef}
      className={
        "galleryContainer showGalleryContainer" // +
        // (inView === false ? " hideGalleryContainer" : " showGalleryContainer")
      }
    >
      <div ref={scrollRef} className={"galleryScroll"}>
        <div className={"gallery"}>{children}</div>
      </div>
    </div>
  );
};

export default Gallery;
