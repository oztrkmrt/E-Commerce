
import ClientIcons from "@/components/Icons/ClientIcons";
import ProductBestseller from "@/components/Product/ProductBestseller";
import ProductCarousel from "@/components/Product/ProductCarousel";
import ProductDescription from "@/components/Product/ProductDescription";
import ProductDetails from "@/components/Product/ProductDetails";
import ProductTitle from "@/components/Product/ProductTitle";
import { getProductDetail } from "@/redux/slices/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
    console.log("ProductDetailPage is rendering");
    const { productId } = useParams();
    console.log('Product ID from params:', productId);
    const dispatch = useDispatch();
    const { currentProduct, loading, error } = useSelector(state => state.product);

    useEffect(() => {
        if (productId) {
            console.log(`Dispatching getProductDetail for productId: ${productId}`);
            dispatch(getProductDetail(productId));
        } else {
            console.error("ProductId is undefined in ProductDetailPage");
        }
    }, [dispatch, productId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!currentProduct) return <div>No product found</div>;

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