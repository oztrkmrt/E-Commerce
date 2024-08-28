
const BestsellerProducts = () => {

    const products = [
        {
            url: "/images/bestseller-product1.jpg",
        },
        {
            url: "/images/bestseller-product2.jpg",
        },
        {
            url: "/images/bestseller-product3.jpg",
        },

        {
            url: "/images/bestseller-product4.jpg",
        },
    ];

    const products2 = [
        {
            url: "/images/bestseller-product1.jpg",
        },
        {
            url: "/images/bestseller-product2.jpg",
        },
        {
            url: "/images/bestseller-product3.jpg",
        },

        {
            url: "/images/bestseller-product4.jpg",
        },
    ];

    return (
        <div className="md:px-20">
            <div className="flex flex-col text-center items-center px-10 mt-14 gap-2">
                <h2 className="text-[#737373] font-medium">
                    Featured Products
                </h2>
                <h3 className="text-[#252B42] font-bold px-20">
                    BESTSELLER PRODUCTS
                </h3>
                <p className="text-[#737373] px-10">
                    Problems trying to resolve the conflict between
                </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-10 mt-14 mb-8 md:flex-row md:gap-2">
                {products.map((product, index) => (
                    <div className="w-3/4 mb-6 " key={index}>
                        <img src={product.url} alt="" className="w-full object-cover md:w-2/4 mx-auto lg:w-3/4" />
                        <div className="flex flex-col text-center items-center px-10 mt-4 gap-4">
                            <h5 className="text-[#252B42] font-bold">
                                Graphic Design
                            </h5>
                            <p className="text-[#737373]">
                                English Department
                            </p>
                            <div className="flex gap-4 font-bold">
                                <h5 className="text-[#BDBDBD] ">$ 16.48</h5>
                                <h5 className="text-[#23856D] ">$ 6.48</h5>
                            </div>
                            <div className="flex gap-3 md:gap-2">
                                <span className="border border-[#23A6F0] rounded-full bg-[#23A6F0] py-3 px-3"></span>
                                <span className="border border-[#23856D] rounded-full bg-[#23856D] py-3 px-3"></span>
                                <span className="border border-[#E77C40] rounded-full bg-[#E77C40] py-3 px-3"></span>
                                <span className="border border-[#252B42] rounded-full bg-[#252B42] py-3 px-3"></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-10 mt-14 mb-8 md:flex-row md:gap-2">
                {products2.map((product, index) => (
                    <div className="w-3/4 mb-6" key={index}>
                        <img src={product.url} alt="" className="w-full object-cover md:w-2/4 mx-auto lg:w-3/4" />
                        <div className="flex flex-col text-center items-center px-10 mt-4 gap-4">
                            <h5 className="text-[#252B42] font-bold">
                                Graphic Design
                            </h5>
                            <p className="text-[#737373]">
                                English Department
                            </p>
                            <div className="flex gap-4 font-bold">
                                <h5 className="text-[#BDBDBD] ">$ 16.48</h5>
                                <h5 className="text-[#23856D] ">$ 6.48</h5>
                            </div>
                            <div className="flex gap-3 md:gap-2">
                                <span className="border border-[#23A6F0] rounded-full bg-[#23A6F0] py-3 px-3"></span>
                                <span className="border border-[#23856D] rounded-full bg-[#23856D] py-3 px-3"></span>
                                <span className="border border-[#E77C40] rounded-full bg-[#E77C40] py-3 px-3"></span>
                                <span className="border border-[#252B42] rounded-full bg-[#252B42] py-3 px-3"></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestsellerProducts;