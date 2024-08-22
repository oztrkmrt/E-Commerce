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
        {
            url: "/images/carousel-slide1.png",
        },
        {
            url: "/images/carousel-slide2.png",
        }
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
        <div className="overflow-hidden bg-[#23856D] h-[1100px] ">
            <div className="flex flex-col text-center p-10 gap-6 relative">
                <h5 className="text-white">SUMMER 2024</h5>
                <h1 className="text-white text-4xl mx-10">Vita Classic Product</h1>
                <h4 className="text-white px-4 mx-14">We know how large objects will act, but things on a small scale.</h4>
                <h5 className="text-white text-xl">$ 16.48</h5>
                <button className="bg-[#2DC071] mt-5 mx-20 py-3 rounded text-white">ADD TO CART</button>
                <div className="absolute inset-0 flex items-center justify-between p-4 top-80">
                    <button onClick={prev} className="p-1 rounded-full text-white bg-black bg-opacity-50">
                        <ChevronLeft size={40} />
                    </button>
                    <button onClick={next} className="p-1 rounded-full text-white bg-black bg-opacity-50">
                        <ChevronRight size={40} />
                    </button>
                </div>
            </div>
            <div className="relative h-[700px] w-full flex items-end top-20">
                <div className="flex transition-transform ease-out duration-500 h-full w-full" style={{ transform: `translateX(-${curr * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <img className="object-cover h-[700px] w-full" key={index} src={slide.url} alt={`Slide ${index}`} />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default HomeCarousel;
