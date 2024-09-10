import ClientIcons from "@/components/Icons/ClientIcons";
import ShopCards from "@/components/Shop/ShopCards";
import ShopFilter from "@/components/Shop/ShopFilter";
import ShopProductCards from "@/components/Shop/ShopProductCards";
import ShopTitle from "@/components/Shop/ShopTitle";
import { getProducts, getCategories } from "@/redux/slices/productSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useHistory } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import ProductDetailPage from "./ProductDetailPage";

const ShopPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const { gender, categoryName, categoryId, productId } = useParams();
    const [sort, setSort] = useState("");
    const [filter, setFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const limit = 25;
    const isProductDetailPage = !!productId;

    useEffect(() => {
        if (!isProductDetailPage) {
            dispatch(getProducts({ categoryId }));
        }
    }, [dispatch, categoryId, isProductDetailPage]);

    useEffect(() => {
        if (!isProductDetailPage) {
            const searchParams = new URLSearchParams(location.search);
            const sortParam = searchParams.get('sort');
            const filterParam = searchParams.get('filter');
            const pageParam = searchParams.get('page');

            if (sortParam) setSort(sortParam);
            if (filterParam) setFilter(filterParam);
            if (pageParam) setCurrentPage(parseInt(pageParam) - 1);

            const offset = currentPage * limit;
            dispatch(getProducts({ categoryId, sort: sortParam || sort, filter: filterParam || filter, limit, offset }))
                .then((action) => {
                    if (action.payload && action.payload.total) {
                        setTotalPages(Math.ceil(action.payload.total / limit));
                    }
                });
        }
    }, [dispatch, categoryId, location.search, currentPage, isProductDetailPage]);


    const updateURL = (newSort, newFilter, newPage) => {
        const searchParams = new URLSearchParams(location.search);
        if (newSort) searchParams.set('sort', newSort);
        if (newFilter) searchParams.set('filter', newFilter);
        if (newPage) searchParams.set('page', newPage.toString());

        history.push({
            pathname: location.pathname,
            search: searchParams.toString()
        });
    };

    const handlePageChange = (selectedItem) => {
        const newPage = selectedItem.selected + 1;
        setCurrentPage(selectedItem.selected);
        updateURL(sort, filter, newPage);
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

    if (productId) {
        return <ProductDetailPage />;
    }

    console.log(gender, categoryName, categoryId);

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
            <ShopProductCards gender={gender || 'all'}
                categoryName={categoryName || 'all-products'}
                categoryId={categoryId || '0'} />
            <ProductDetailPage />
            <ReactPaginate
                previousLabel={"First"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                activeClassName={"active"}
                previousClassName={"previous"}
                nextClassName={"next"}
                disabledClassName={"disabled"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                breakClassName={"break"}
                breakLinkClassName={"break-link"}
            />
            <ClientIcons />
        </div>
    );
};

export default ShopPage;