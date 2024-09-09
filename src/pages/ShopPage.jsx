import ClientIcons from "@/components/Icons/ClientIcons";
import ShopCards from "@/components/Shop/ShopCards";
import ShopFilter from "@/components/Shop/ShopFilter";
import ShopPagination from "@/components/Shop/ShopPagination";
import ShopProductCards from "@/components/Shop/ShopProductCards";
import ShopTitle from "@/components/Shop/ShopTitle";
import { getProducts } from "@/redux/slices/productSlice";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

const ShopPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { gender, categoryName, categoryId } = useParams();
    const [sort, setSort] = useState("");
    const [filter, setFilter] = useState("");

    useEffect(() => {
        dispatch(getProducts({ categoryId, sort, filter }));
        updateURL();
    }, [dispatch, categoryId, sort, filter]);

    const handleSortChange = (e) => {
        setSort(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const updateURL = () => {
        let newURL = `/shop/${gender}/${categoryName}/${categoryId}`;
        const queryParams = [];
        if (sort) queryParams.push(`sort=${sort}`);
        if (filter) queryParams.push(`filter=${filter}`);
        if (queryParams.length > 0) {
            newURL += `?${queryParams.join('&')}`;
        }
        history.push(newURL);
    };

    return (
        <div>
            <ShopTitle />
            <ShopCards />
            <ShopFilter
                sort={sort}
                filter={filter}
                onSortChange={handleSortChange}
                onFilterChange={handleFilterChange}
            />
            <ShopProductCards />
            <ShopPagination />
            <ClientIcons />
        </div>
    );
};

export default ShopPage;