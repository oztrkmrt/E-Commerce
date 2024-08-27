import { faList, faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShopFilter = () => {
    return (
        <div>
            <div className="p-10 flex flex-col items-center gap-8 md:flex-row md:justify-between md:px-20">
                <p className="text-[#737373] text-xl font-medium">Showing all results</p>
                <div className="flex items-center gap-4">
                    <p className="text-[#737373] text-xl font-medium">Views :</p>
                    <div className="px-4 py-3 border-2 border-[#ECECEC] rounded-md">
                        <FontAwesomeIcon icon={faTableCellsLarge} size="xl" />
                    </div>
                    <div className="px-4 py-3 border-2 border-[#ECECEC] rounded-md">
                        <FontAwesomeIcon icon={faList} size="xl" />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <select
                        className="border border-[#DDDDDD] bg-[#F9F9F9] rounded py-4 px-4 text-gray-700 w-full">
                        <option value="popularity">Popularity</option>
                        <option value="price:asc">Price: Low to High</option>
                        <option value="price:desc">Price: High to Low</option>
                        <option value="rating:asc">Rating: Low to High</option>
                        <option value="rating:desc">Rating: High to Low</option>
                    </select>
                    <button
                        className="bg-[#23A6F0] text-white font-bold py-4 px-4 rounded w-full"
                    >
                        Filter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShopFilter;