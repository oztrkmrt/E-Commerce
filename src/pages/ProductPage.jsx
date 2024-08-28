
import ProductCarousel from "@/components/Product/ProductCarousel";
import ProductDetails from "@/components/Product/ProductDetails";
import ShopClients from "@/components/Shop/ShopClients";
import ShopTitle from "@/components/Shop/ShopTitle";


const ProductPage = () => {
    return (
        <div>
            <ShopTitle />
            <ProductCarousel />
            <ProductDetails />
            <ShopClients />
        </div>
    );
};

export default ProductPage;