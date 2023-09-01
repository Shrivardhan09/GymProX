import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CarouselArrows = ({ currentIndex, listLength, cardsToShow, prevSlide, nextSlide }) => {
    return (
        <div className="carousel-controls flex justify-center mt-4">
            <button
                className={`prev-button flex items-center justify-center p-2 rounded-full
                    ${currentIndex === 0 ? 'cursor-not-allowed' : ''} mr-2`}
                onClick={prevSlide}
                disabled={currentIndex === 0}
            >
                <ArrowLeft size={24} style={{ opacity: currentIndex === 0 ? 0 : 1 }} />
            </button>
            <button
                className={`next-button flex items-center justify-center p-2 rounded-full
                    ${currentIndex >= listLength - cardsToShow ? 'cursor-not-allowed' : ''}`}
                onClick={nextSlide}
                disabled={currentIndex >= listLength - cardsToShow}
            >
                <ArrowRight size={24} style={{ opacity: currentIndex >= listLength - cardsToShow ? 0 : 1 }} />
            </button>
        </div>
    );
};

export default CarouselArrows;
