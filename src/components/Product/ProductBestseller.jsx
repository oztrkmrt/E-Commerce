import React from 'react';

const ProductBestseller = ({ productList }) => {
    const bestsellerProducts = [...productList]
        .sort((a, b) => b.sell_count - a.sell_count)
        .slice(0, 8);

    const firstRow = bestsellerProducts.slice(0, 4);
    const secondRow = bestsellerProducts.slice(4, 8);

    const renderProductRow = (products) => (
        <div className="flex flex-wrap justify-center gap-10 mt-14">
            {products.map((product) => (
                <div className="w-full md:w-1/5 mb-6" key={product.id}>
                    <img src={product.images[0].url} alt={product.name} className="w-full h-[300px] object-cover" />
                    <div className="flex flex-col items-start mt-4 gap-4">
                        <h5 className="text-[#252B42] font-bold">
                            {product.name}
                        </h5>
                        <p className="text-[#737373] font-bold">
                            {product.category}
                        </p>
                        <div className="flex gap-4 font-bold">
                            <h5 className="text-[#BDBDBD]">${product.price.toFixed(2)}</h5>
                            <h5 className="text-[#23856D]">${(product.price * 0.8).toFixed(2)}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="md:px-20 bg-[#FAFAFA] py-10">
            <div className="flex flex-col text-center items-center px-10 mt-14 gap-2">
                <h3 className="text-[#252B42] text-2xl font-bold">
                    BESTSELLER PRODUCTS
                </h3>
                <hr className="text-[#ECECEC]" />
            </div>
            {renderProductRow(firstRow)}
            {renderProductRow(secondRow)}
        </div>
    )
}

export default ProductBestseller;