
import ClientIcons from "@/components/Icons/ClientIcons";
import ProductBestseller from "@/components/Product/ProductBestseller";
import ProductCarousel from "@/components/Product/ProductCarousel";
import ProductDescription from "@/components/Product/ProductDescription";
import ProductDetails from "@/components/Product/ProductDetails";
import ShopTitle from "@/components/Shop/ShopTitle";
import { getProductDetail } from "@/redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";


const ProductDetailPage = () => {
    const { productId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(getProductDetail(productId));
    }, [dispatch, productId]);

    if (loading) return <LoadingSpinner />;
    if (error) return <div>Error: {error}</div>;
    if (!currentProduct) return null;

    return (
        <div>
            <ShopTitle />
            <div className="flex flex-col md:flex-row">
                <ProductCarousel product={product} />
                <ProductDetails product={product} />
            </div>
            <ProductDescription />
            <ProductBestseller />
            <ClientIcons />
        </div>
    );
};

export default ProductDetailPage;