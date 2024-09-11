import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const HeroCarousel = ({ autoSlide = false, autoSlideInterval = 3000 }) => {

    const history = useHistory();

    const slides = [
        { url: "/images/product-slide1.jpg" },
        { url: "/images/product-slide2.jpg" },
        { url: "/images/product-slide3.jpg" },
        { url: "/images/product-slide4.jpg" },
    ];

    const [curr, setCurr] = useState(0);

    const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1);
    const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1);

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval]);

    return (
        <div className="relative overflow-hidden w-full h-[800px]">
            <div
                className="flex transition-transform ease-out duration-500 h-full"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                        <img
                            src={slide.url}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-24 gap-10 text-center md:items-start">
                <h5 className="text-[#FFFFFF] font-bold">SUMMER 2024</h5>
                <h1 className="text-[#FFFFFF] text-4xl md:text-5xl">NEW COLLECTION</h1>
                <h4 className="text-[#FAFAFA] px-4 md:px-0">
                    We know how large objects will act, but things on a small scale.
                </h4>
                <button className="z-50 relative bg-[#2DC071] px-5 py-2 sm:px-7 sm:py-3 rounded mt-4 md:mt-10 text-white text-sm sm:text-base cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        history.push("/shop");
                    }} >SHOP NOW</button>
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="p-1 rounded-full text-white">
                    <ChevronLeft size={40} />
                </button>
                <button onClick={next} className="p-1 rounded-full text-white">
                    <ChevronRight size={40} />
                </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`
                                transition-all w-3 h-3 bg-white rounded-full
                                ${curr === i ? "p-2" : "bg-opacity-50"}
                            `}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroCarousel;
