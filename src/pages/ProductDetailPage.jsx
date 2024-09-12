
import ClientIcons from "@/components/Icons/ClientIcons";
import ProductBestseller from "@/components/Product/ProductBestseller";
import ProductCarousel from "@/components/Product/ProductCarousel";
import ProductDescription from "@/components/Product/ProductDescription";
import ProductDetails from "@/components/Product/ProductDetails";
import ProductTitle from "@/components/Product/ProductTitle";
import { getProductDetail } from "@/redux/slices/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

const ProductDetailPage = () => {
    const { productId } = useParams();
    const location = useLocation();
    const passedProduct = location.state?.product;
    const dispatch = useDispatch();
    const { currentProduct, loading, error } = useSelector(state => state.product);
    const { productList } = useSelector(state => state.product);

    useEffect(() => {
        if (productId) {
            if (passedProduct && passedProduct.id === productId) {
                dispatch({ type: 'product/setCurrentProduct', payload: passedProduct });
            } else {
                dispatch(getProductDetail(productId));
            }
        }
    }, [dispatch, productId, passedProduct]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!currentProduct) return <div>No product found</div>;

    return (
        <div>
            <ProductTitle />
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="w-full md:w-2/5">
                    <ProductCarousel currentProduct={currentProduct} />
                </div>
                <div className="w-full md:w-3/5">
                    <ProductDetails />
                </div>
            </div>
            <ProductDescription currentProduct={currentProduct} productList={productList} />
            <ProductBestseller productList={productList} />
            <ClientIcons />
        </div>
    );
};

export default ProductDetailPage;