import React, { useState } from 'react';
import { faList, faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from 'react-redux';
import { getProducts, setFilter } from '@/redux/slices/productSlice'; // doğru path ile slice'ınızı import edin

const ShopFilter = () => {
    const dispatch = useDispatch();
    const [sortOption, setSortOption] = useState('');
    const [filterInput, setFilterInput] = useState('');

    // Sıralama seçeneği değiştiğinde tetiklenen fonksiyon
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    // Filtre input değiştiğinde tetiklenen fonksiyon
    const handleFilterChange = (e) => {
        setFilterInput(e.target.value);
    };

    // Filtre butonuna basıldığında tetiklenen fonksiyon
    const handleFilter = () => {
        dispatch(setFilter(filterInput)); // Filtreyi state'e gönder
        dispatch(getProducts({ categoryId: 2, sort: sortOption, filter: filterInput })); // API isteği gönder
    };

    return (
        <div>
            <div className="p-10 flex flex-col items-center gap-8 md:flex-row md:justify-between md:px-20">
                <p className="text-[#737373] text-xl font-medium">Showing all results</p>
                <div className="flex items-center gap-4">
                    <p className="text-[#737373] text-xl font-medium">Views :</p>
                    <div className="px-4 py-3 border-2 border-[#ECECEC] rounded-md cursor-pointer">
                        <FontAwesomeIcon icon={faTableCellsLarge} size="xl" />
                    </div>
                    <div className="px-4 py-3 border-2 border-[#ECECEC] rounded-md cursor-pointer">
                        <FontAwesomeIcon icon={faList} size="xl" />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <select
                        className="border border-[#DDDDDD] bg-[#F9F9F9] rounded py-4 px-4 text-gray-700 w-full"
                        onChange={handleSortChange}
                        value={sortOption}
                    >
                        <option value="popularity">Default</option>
                        <option value="price:asc">Price: Low to High</option>
                        <option value="price:desc">Price: High to Low</option>
                        <option value="rating:asc">Rating: Low to High</option>
                        <option value="rating:desc">Rating: High to Low</option>
                    </select>
                    <input
                        type="text"
                        className="border border-[#DDDDDD] bg-[#F9F9F9] rounded py-4 px-4 text-gray-700 w-full"
                        placeholder="Filter products"
                        onChange={handleFilterChange}
                        value={filterInput}
                    />
                    <button
                        className="bg-[#23A6F0] text-white font-bold py-4 px-4 rounded w-full"
                        onClick={handleFilter}
                    >
                        Filter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShopFilter;
