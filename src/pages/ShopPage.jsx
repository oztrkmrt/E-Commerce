import BestsellerProducts from "@/components/Home/BestsellerProducts";
import ShopCards from "@/components/Shop/ShopCards";
import ShopFilter from "@/components/Shop/ShopFilter";
import ShopProductCards from "@/components/Shop/ShopProductCards";
import ShopTitle from "@/components/Shop/ShopTitle";

const ShopPage = () => {
    return (
        <div>
            <ShopTitle />
            <ShopCards />
            <ShopFilter />
            <ShopProductCards />
        </div>
    );
};

export default ShopPage;