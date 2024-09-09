import ClientIcons from "@/components/Icons/ClientIcons";
import ShopCards from "@/components/Shop/ShopCards";
import ShopFilter from "@/components/Shop/ShopFilter";
import ShopPagination from "@/components/Shop/ShopPagination";
import ShopProductCards from "@/components/Shop/ShopProductCards";
import ShopTitle from "@/components/Shop/ShopTitle";
import { getProducts, getCategories } from "@/redux/slices/productSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useHistory } from "react-router-dom";

const ShopPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const { gender, category, categoryId } = useParams();
    const [sort, setSort] = useState("");
    const [filter, setFilter] = useState("");

    const { categories, productList } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const sortParam = searchParams.get('sort');
        const filterParam = searchParams.get('filter');

        if (sortParam) setSort(sortParam);
        if (filterParam) setFilter(filterParam);

        dispatch(getProducts({ categoryId, sort: sortParam || sort, filter: filterParam || filter }));
    }, [dispatch, categoryId, location.search]);

    const updateURL = (newSort, newFilter) => {
        const searchParams = new URLSearchParams(location.search);
        if (newSort) searchParams.set('sort', newSort);
        if (newFilter) searchParams.set('filter', newFilter);

        history.push({
            pathname: location.pathname,
            search: searchParams.toString()
        });
    };

    const handleSortChange = (e) => {
        const newSort = e.target.value;
        setSort(newSort);
        updateURL(newSort, filter);
    };

    const handleFilterChange = (e) => {
        const newFilter = e.target.value;
        setFilter(newFilter);
        updateURL(sort, newFilter);
    };

    return (
        <div>
            <ShopTitle gender={gender} category={category} />
            <ShopCards />
            <ShopFilter
                sort={sort}
                filter={filter}
                onSortChange={handleSortChange}
                onFilterChange={handleFilterChange}
            />
            <ShopProductCards products={productList} />
            <ShopPagination />
            <ClientIcons />
        </div>
    );
};

export default ShopPage;