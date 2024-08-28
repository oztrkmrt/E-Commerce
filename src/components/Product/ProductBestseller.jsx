
const ProductBestseller = () => {

    const products = [
        {
            url: "/images/kitchen-bestseller1.jpg",
        },
        {
            url: "/images/kitchen-bestseller2.jpg",
        },
        {
            url: "/images/kitchen-bestseller1.jpg",
        },

        {
            url: "/images/kitchen-bestseller2.jpg",
        },
    ];

    return (
        <div className="md:px-20 bg-[#FAFAFA] py-10">
            <div className="flex flex-col text-center items-center px-10 mt-14 gap-2">
                <h3 className="text-[#252B42] text-2xl font-bold">
                    BESTSELLER PRODUCTS
                </h3>
                <hr className="text-[#ECECEC]" />
            </div>
            <div className="flex flex-col items-center justify-center gap-10 mt-14 mb-8 md:flex-row md:gap-2">
                {products.map((product, index) => (
                    <div className="w-3/4 mb-6 " key={index}>
                        <img src={product.url} alt="" className="w-full h-[400px] object-cover md:w-2/4 lg:w-3/4" />
                        <div className="flex flex-col items-start mt-4 gap-4">
                            <h5 className="text-[#252B42] font-bold">
                                Graphic Design
                            </h5>
                            <p className="text-[#737373] font-bold">
                                English Department
                            </p>
                            <div className="flex gap-4 font-bold">
                                <h5 className="text-[#BDBDBD] ">$ 16.48</h5>
                                <h5 className="text-[#23856D] ">$ 6.48</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductBestseller;