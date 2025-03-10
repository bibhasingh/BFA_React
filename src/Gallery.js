import React, { useState } from "react";
import './gallery.css'

const images = [
  "bfa1.jpg","bfa2.jpg","bfa3.jpg","bfa4.jpg","bfa5.jpg","bfa6.jpg","bfa7.jpg","bfa8.jpg"

];

function Gallery() {
const [isOpen, setIsOpen] = useState(false);
const [currentImageIndex, setCurrentImageIndex] = useState(0);

const openModal = (index) => {
  setCurrentImageIndex(index);
  setIsOpen(true);
};

const closeModal = () => {
  setIsOpen(false);
};

const goToPrevious = () => {
  setCurrentImageIndex(
    (currentImageIndex - 1 + images.length) % images.length
  );
};

const goToNext = () => {
  setCurrentImageIndex((currentImageIndex + 1) % images.length);
};

return (
  <div>
    {/* Thumbnail Gallery */}
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Thumbnail ${index}`}
          className="thumbnail"
          onClick={() => openModal(index)}
        />
      ))}
    </div>

    {/* Modal */}
    {isOpen && (
      <div className="modal">
        <button onClick={closeModal} className="modal-close">
          Close
        </button>
        <button onClick={goToPrevious} className="modal-prev">
        &#129144;
        </button>
        <img
          src={images[currentImageIndex]}
          alt="Current"
          className="modal-image"
        />
        <button onClick={goToNext} className="modal-next">
        &#10132;
        </button>
      </div>
    )}
  </div>
);
}

export default Gallery;
