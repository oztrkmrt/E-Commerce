

const ShopCards = () => {

    const images = [
        { url: "/images/product-slide1.jpg" },
        { url: "/images/product-slide2.jpg" },
        { url: "/images/product-slide3.jpg" },
        { url: "/images/product-slide4.jpg" },
        { url: "/images/product-slide1.jpg" },
    ];

    return (
        <div className="flex flex-col gap-4 py-6 px-10 bg-[#FAFAFA] md:flex-row md:px-20">
            {images.map((image, index) => (
                <div key={index} className="relative">
                    <img
                        src={image.url}
                        className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white font-medium gap-8">
                        <h5 className="text-xl">CLOTHS</h5>
                        <h5 className="text-xl">5 Items</h5>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default ShopCards;