
import ClientIcons from "@/components/Icons/ClientIcons";
import ShopCards from "@/components/Shop/ShopCards";
import ShopFilter from "@/components/Shop/ShopFilter";
import ShopPagination from "@/components/Shop/ShopPagination";
import ShopProductCards from "@/components/Shop/ShopProductCards";
import ShopTitle from "@/components/Shop/ShopTitle";


const ShopPage = () => {
    return (
        <div>
            <ShopTitle />
            <ShopCards />
            <ShopFilter />
            <ShopProductCards />
            <ShopPagination />
            <ClientIcons />
        </div>
    );
};

export default ShopPage;