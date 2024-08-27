
import ProductCarousel from "@/components/Product/ProductCarousel";
import ShopClients from "@/components/Shop/ShopClients";
import ShopTitle from "@/components/Shop/ShopTitle";


const ProductPage = () => {
    return (
        <div>
            <ShopTitle />
            <ProductCarousel />
            <ShopClients />
        </div>
    );
};

export default ProductPage;