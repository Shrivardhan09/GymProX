import React, { useEffect, useRef, useState } from 'react';
import BodyPart from './BodyPart';
import './CustomCarousal.css';
import CarouselArrows from '@/shared/CarousalArrow';


const BodyPartExercise = ({ list, setParticularExercise }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const containerRef = useRef(null);
    const cardWidth = 300;
    const cardsToShow = 4;

    const nextSlide = () => {
        if (currentIndex < list.length - cardsToShow) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    }, [currentIndex, cardWidth]);

    return (
        <div className="custom-carousel">
            <div
                className="carousel-container w-full px-5 py-10 overflow-hidden flex gap-6 "
                ref={containerRef}
                style={{ width: `${list.length * cardWidth}px` }}
            >
                {list.map(exercises => (
                    <div
                        key={exercises.id || exercises}
                        className={`p-5 border-2 border-gray-100 hover:border-primary-100 flex flex-col gap-5 rounded-md w-52 hover:scale-105 hover:duration-300 ease-in-out cursor-pointer`}
                    >
                        <BodyPart exercises={exercises} setParticularExercise={setParticularExercise} />
                    </div>
                ))}
            </div>
            <CarouselArrows
                currentIndex={currentIndex}
                listLength={list.length}
                cardsToShow={cardsToShow}
                prevSlide={prevSlide}
                nextSlide={nextSlide}
            />
        </div>
    );
};

export default BodyPartExercise;
