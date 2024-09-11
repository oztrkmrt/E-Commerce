import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";


const ProductCarousel = ({ autoSlide = false, autoSlideInterval = 3000, currentProduct }) => {

    const [curr, setCurr] = useState(0);

    if (!currentProduct || !currentProduct.images) {
        return <div>Loading...</div>;
    }

    const images = currentProduct.images;

    const prev = () => setCurr(curr === 0 ? images.length - 1 : curr - 1);
    const next = () => setCurr(curr === images.length - 1 ? 0 : curr + 1);

    const handleClick = (index) => {
        setCurr(index);
    };

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval]);

    return (
        <div className="flex flex-col gap-10 px-4 py-10 md:px-20">
            <div className="relative overflow-hidden w-full h-[300px] md:h-[500px] lg:h-[600px]">
                <div
                    className="flex transition-transform ease-out duration-500 h-full"
                    style={{ transform: `translateX(-${curr * 100}%)` }}
                >
                    {images.map((product, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0">
                            <img
                                src={product.url}
                                alt={`product ${index + 1}`}
                                className="w-full h-full object-contain md:object-cover"
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button onClick={prev} className="p-1 rounded-full text-gray-500">
                        <ChevronLeft size={40} />
                    </button>
                    <button onClick={next} className="p-1 rounded-full text-gray-500">
                        <ChevronRight size={40} />
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                {images.map((image, index) => (
                    <img
                        key={index}
                        className={`w-[80px] h-[60px] md:w-[120px] md:h-[90px] object-cover cursor-pointer ${index !== curr ? "opacity-50" : "opacity-100"
                            }`}
                        src={image.url}
                        alt=""
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </div>

    );
};

export default ProductCarousel;
