import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const HeroCarousel = ({ autoSlide = false,
    autoSlideInterval = 3000, }) => {

    const slides = [
        {
            url: "/images/product-slide1.jpg",
        },
        {
            url: "/images/product-slide2.jpg",
        },
        {
            url: "/images/product-slide3.jpg",
        },

        {
            url: "/images/product-slide4.jpg",
        },
        {
            url: "/images/product-slide1.jpg",
        },
        {
            url: "/images/product-slide2.jpg",
        },
        {
            url: "/images/product-slide3.jpg",
        },

        {
            url: "/images/product-slide4.jpg",
        },
    ];

    const [curr, setCurr] = useState(0)

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        <div className="owerflow-hidden relative">
            <div
                className="flex transition-transform ease-out duration-500 h-[750px] w-full"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <img className="object-center h-full w-full object-cover" key={index} src={slide.url} />
                ))}
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-24 gap-10">
                <h5 className="text-[#FFFFFF] font-bold">SUMMER 2024</h5>
                <h1 className="text-[#FFFFFF] text-4xl">NEW COLLECTION</h1>
                <h4 className="text-[#FAFAFA] ">We know how large objects
                    will act, but things on a
                    small scale.</h4>
                <button className="bg-[#2DC071] px-7 py-3 rounded mt-10 text-white">SHOP NOW</button>
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4 ">
                <button
                    onClick={prev}
                    className="p-1 rounded-full text-white "
                >
                    <ChevronLeft size={40} />
                </button>
                <button
                    onClick={next}
                    className="p-1 rounded-full text-white "
                >
                    <ChevronRight size={40} />
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeroCarousel;