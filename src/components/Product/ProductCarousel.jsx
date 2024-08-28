import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";


const ProductCarousel = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
    const products = [
        { url: "/images/product-carousel1.jpg" },
        { url: "/images/product-carousel2.jpg" },
    ];

    const [curr, setCurr] = useState(0);

    const prev = () => setCurr(curr === 0 ? products.length - 1 : curr - 1);
    const next = () => setCurr(curr === products.length - 1 ? 0 : curr + 1);

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval]);

    return (
        <div className="flex flex-col gap-10 px-20 py-10">
            <div className="relative overflow-hidden w-full h-[300px]">
                <div
                    className="flex transition-transform ease-out duration-500 h-full"
                    style={{ transform: `translateX(-${curr * 100}%)` }}
                >
                    {products.map((product, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0">
                            <img
                                src={product.url}
                                alt={`Product ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button onClick={prev} className="p-1 rounded-full text-white">
                        <ChevronLeft size={40} />
                    </button>
                    <button onClick={next} className="p-1 rounded-full text-white">
                        <ChevronRight size={40} />
                    </button>
                </div>
            </div>
            <div className="flex gap-4">
                {products.map((product, index) => (
                    <img key={index} className="w-[100px] h-[75px] object-cover" src={product.url} alt="" />
                ))}
            </div>
        </div>

    );
};

export default ProductCarousel;
