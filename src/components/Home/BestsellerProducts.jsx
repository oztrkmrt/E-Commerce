
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '@/redux/slices/productSlice';
import { useHistory, useParams } from 'react-router-dom';
import { slugify } from '@/Utils/helpers';

const BestsellerProducts = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { gender, categoryName, categoryId } = useParams();

    const { productList } = useSelector(state => state.product);

    const bestsellerProducts = [...productList]
        .sort((a, b) => b.sell_count - a.sell_count)
        .slice(0, 12);

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
    const thirdRow = bestsellerProducts.slice(8, 12);

    const renderProductRow = (products) => (
        <div className="flex flex-col items-center justify-between gap-10 mt-14 mb-8 md:flex-row md:gap-2">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="w-3/4 mb-6 md:w-1/6 cursor-pointer"
                    onClick={() => handleProductClick(product)}
                >
                    <img src={product.images[0].url} alt={product.name} className="w-full h-[300px] object-cover md:w-full mx-auto" />
                    <div className="flex flex-col text-center items-center px-10 mt-4 gap-4">
                        <h5 className="text-[#252B42] font-bold">
                            {product.name}
                        </h5>
                        <p className="text-[#737373]">
                            {product.description.slice(0, 30)}...
                        </p>
                        <div className="flex gap-4 font-bold">
                            <h5 className="text-[#BDBDBD] ">${product.price.toFixed(2)}</h5>
                            <h5 className="text-[#23856D] ">${(product.price * 0.8).toFixed(2)}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

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
            {renderProductRow(firstRow)}
            {renderProductRow(secondRow)}
            {renderProductRow(thirdRow)}
        </div>
    );
};

export default BestsellerProducts;