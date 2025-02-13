import { useState, useEffect } from 'react';

export default function Hero({ onExploreClick }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        '/images/synth1.webp',
        '/images/synth2.webp',
        '/images/synth3.webp',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <section className="bg-gradient-to-r from-black via-[#0a1f44] to-black text-white text-center py-20 px-4 relative">
            <div className="w-full max-w-4xl mx-auto overflow-hidden relative">
                <div className="relative flex items-center justify-center h-64">
                    <button
                        className="absolute left-4 bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-75 transition z-10"
                        onClick={prevSlide}
                    >
                        ◀
                    </button>
                    <div className="relative w-full h-full">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 bg-cover bg-center h-full w-full transition-all duration-[2000ms] ease-in-out transform ${
                                    index === currentIndex
                                        ? 'opacity-100 scale-100 translate-x-0'
                                        : 'opacity-0 scale-95 translate-x-10'
                                }`}
                                style={{ backgroundImage: `url(${image})` }}
                            ></div>
                        ))}
                    </div>
                    <button
                        className="absolute right-4 bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-75 transition z-10"
                        onClick={nextSlide}
                    >
                        ▶
                    </button>
                </div>
            </div>
            <h2 className="text-4xl font-bold mt-6">Welcome to Our Platform</h2>
            <p className="mt-4 text-lg">We provide the best solutions for your business growth.</p>
            <button
            onClick={onExploreClick} 
            className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
                Get Started
            </button>
        </section>
    );
}
