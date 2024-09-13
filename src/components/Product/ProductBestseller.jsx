
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '@/redux/slices/productSlice';
import { useHistory, useParams } from 'react-router-dom';
import { slugify } from '@/Utils/helpers';

const ProductBestseller = ({ productList }) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { gender, categoryName, categoryId } = useParams();

    const bestsellerProducts = [...productList]
        .sort((a, b) => b.sell_count - a.sell_count)
        .slice(0, 8);

    useEffect(() => {
        if (productList.length === 0) {
            dispatch(getProducts({}));
        }
    }, [dispatch, productList]);

    const handleProductClick = (product) => {
        const productNameSlug = slugify(product.name);
        const url = `/shop/${gender}/${categoryName}/${categoryId}/${productNameSlug}/${product.id}`;
        history.push(url, { product });
    };

    const firstRow = bestsellerProducts.slice(0, 4);
    const secondRow = bestsellerProducts.slice(4, 8);

    const renderProductRow = (products) => (
        <div className="flex flex-wrap justify-center gap-10 mt-14">
            {products.map((product) => (
                <div className="w-full md:w-1/5 mb-6 cursor-pointer"
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                >
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