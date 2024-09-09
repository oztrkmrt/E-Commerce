
import ClientIcons from "@/components/Icons/ClientIcons";
import ProductBestseller from "@/components/Product/ProductBestseller";
import ProductCarousel from "@/components/Product/ProductCarousel";
import ProductDescription from "@/components/Product/ProductDescription";
import ProductDetails from "@/components/Product/ProductDetails";
import ShopTitle from "@/components/Shop/ShopTitle";


const ProductPage = () => {

    return (
        <div>
            <ShopTitle />
            <div className="flex flex-col md:flex-row">
                <ProductCarousel />
                <ProductDetails />
            </div>
            <ProductDescription />
            <ProductBestseller />
            <ClientIcons />
        </div>
    );
};

export default ProductPage;