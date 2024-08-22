import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const HomeCarousel = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
    const slides = [
        {
            url: "/images/carousel-slide1.png",
        },
        {
            url: "/images/carousel-slide2.png",
        },
    ];

    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval]);

    return (
        <div className="overflow-hidden bg-[#23856D] h-[1100px] relative sm:flex sm:h-full sm:items-center">
            <div className="flex flex-col text-center p-10 gap-6 relative sm:px-20 sm:text-left sm:gap-10">
                <h5 className="text-white sm:pl-20 sm:text-lg">SUMMER 2024</h5>
                <h1 className="text-white text-4xl mx-10 sm:pl-10">Vita Classic Product</h1>
                <h4 className="text-white px-4 mx-14 sm:pl-6">We know how large objects will act, but things on a small scale.</h4>
                <div className="sm:flex sm:items-center sm:pl-20">
                    <h5 className="text-white text-xl font-semibold">$ 16.48</h5>
                    <button className="bg-[#2DC071] mt-5 mx-20 py-2 rounded text-white px-5 font-semibold sm:mt-0">ADD TO CART</button>
                </div>
            </div>
            <div className="relative h-[700px] w-full flex items-end top-20 sm:w-1/2 sm:h-full">
                <div className="flex transition-transform ease-out duration-500 h-full w-full" style={{ transform: `translateX(-${curr * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <img className="object-cover h-[700px] w-full sm:h-full" key={index} src={slide.url} alt={`Slide ${index}`} />
                    ))}
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4 bottom-60 sm:bottom-0">
                <button onClick={prev} className="p-1 rounded-full text-white bg-black bg-opacity-50">
                    <ChevronLeft size={40} />
                </button>
                <button onClick={next} className="p-1 rounded-full text-white bg-black bg-opacity-50">
                    <ChevronRight size={40} />
                </button>
            </div>
        </div>
    );
}

export default HomeCarousel;




