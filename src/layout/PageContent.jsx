import { useParams } from "react-router-dom";
import ClientIcons from "@/components/Icons/ClientIcons";
import ShopCards from "@/components/Shop/ShopCards";
import ShopFilter from "@/components/Shop/ShopFilter";
import ShopPagination from "@/components/Shop/ShopPagination";
import ShopProductCards from "@/components/Shop/ShopProductCards";
import ShopTitle from "@/components/Shop/ShopTitle";

const ShopPage = () => {

    const { gender, category, id } = useParams();

    return (
        <div>
            <ShopTitle gender={gender} category={category} />
            <ShopCards gender={gender} category={category} id={id} />
            <ShopFilter gender={gender} category={category} />
            <ShopProductCards gender={gender} category={category} />
            <ShopPagination />
            <ClientIcons />
        </div>
    );
};

export default ShopPage;
