
import ClientIcons from "@/components/Icons/ClientIcons";
import ProductBestseller from "@/components/Product/ProductBestseller";
import ProductCarousel from "@/components/Product/ProductCarousel";
import ProductDescription from "@/components/Product/ProductDescription";
import ProductDetails from "@/components/Product/ProductDetails";
import ProductTitle from "@/components/Product/ProductTitle";
import LoadingSpinner from "@/components/Spinner/LoadingSpinner";
import { getProductDetail } from "@/redux/slices/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const ProductDetailPage = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const { currentProduct, loading, error } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(getProductDetail(productId));
    }, [dispatch, productId]);

    if (loading) return <LoadingSpinner />;
    if (error) return <div>Error: {error}</div>;
    if (!currentProduct) return null;

    return (
        <div>
            <ProductTitle />
            <div className="flex flex-col md:flex-row">
                <ProductCarousel currentProduct={currentProduct} />
                <ProductDetails />
            </div>
            <ProductDescription />
            <ProductBestseller />
            <ClientIcons />
        </div>
    );
};

export default ProductDetailPage;