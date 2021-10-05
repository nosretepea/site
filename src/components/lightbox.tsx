import React, { useEffect, useState, ReactElement } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

type LightboxProps = {
  index: number,
  images: any,
  onToggleLightbox: any
}

const Lightbox: React.FC<LightboxProps> = (props: LightboxProps): ReactElement => {
  const [currentIndex, setCurrentIndex] = useState(props.index);
  const [imageListLength] = useState(props.images.length - 1);

  // TODO: fix event listener error
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown);
    return () => {
      document.removeEventListener("keydown", detectKeyDown);
    }
  })

  const detectKeyDown = (e: React.KeyboardEvent): void => {
    switch (e.key) {
      case "Esc":
      case "Escape":
        props.onToggleLightbox();
        break;
      case "ArrowLeft":
        changeSlide(-1);
        break;
      case "ArrowRight":
        changeSlide(1);
        break;
      default:
    }
  }

  const changeSlide = (direction: number): void => {
    const newIndex = currentIndex + direction;
    if (newIndex === -1) {  // if we're going out-of-bounds to the left of the array, go to the end instead
      setCurrentIndex(imageListLength);
    } else if (newIndex === imageListLength + 1) {  // if we're going out-of-bounds to the right of the array, go back to the beginning
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  }

  return (
    <div className="lightbox fixed z-10 left-0 top-0 w-full h-full">
      <span
        role="button"
        tabIndex={0}
        className="cursor-pointer text-white text-5xl fixed left-0 px-3"
        onClick={() => props.onToggleLightbox()}
        onKeyDown={() => props.onToggleLightbox()}>
        &times;
      </span>
      <div className="h-full flex justify-center items-center">
        <div className="lightbox-image__container">
          <GatsbyImage
            image={props.images[currentIndex].node.childImageSharp.gatsbyImageData}
            alt=""
            imgStyle={{ objectFit: `contain` }}
          />
        </div>
      </div>
      <span role="button" tabIndex={0} className="prev" onKeyDown={(e) => detectKeyDown(e)} onClick={() => changeSlide(-1)}>&#10094;</span>
      <span role="button" tabIndex={0} className="next" onKeyDown={(e) => detectKeyDown(e)} onClick={() => changeSlide(1)}>&#10095;</span>
    </div>
  );
}

export default Lightbox;