import { getProducts } from "@/redux/slices/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";
import { useHistory } from "react-router-dom";

const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    }
    return text;
};
const ShopProductCards = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { productList, fetchState } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);

    if (fetchState === "FETCHING") {
        return <Spinner />
    }

    if (fetchState === "FAILED") {
        return <div className="text-center text-red-500">Failed to load products</div>
    }

    return (
        <div className="px-4 md:px-10">
            <div className="flex flex-wrap items-cener justify-between gap-10 mt-14 mb-8">
                {productList.map((product) => (
                    <div className="flex flex-col w-full h-auto md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 shadow cursor-pointer hover:shadow-lg"
                        key={product.id}
                        onClick={() => history.push(`/products/${product.id}`)}>
                        <img src={product.images[0]?.url}
                            alt={product.name}
                            className="w-[full] h-[300px] object-cover mx-auto md:w-2/4 mx-auto lg:w-3/4" />
                        <div className="flex flex-col text-center items-center px-4 mt-4 gap-4">
                            <h5 className="text-[#252B42] font-bold">
                                {product.name}
                            </h5>
                            <p className="text-[#737373] h-[60px] flex items-center">
                                {truncateText(product.description, 50)}
                            </p>
                            <div className="flex gap-4 font-bold">
                                <h5 className="text-[#BDBDBD] ">$ {product.price}</h5>
                                <h5 className="text-[#23856D] ">$ {(product.price * 0.8).toFixed(2)}</h5>
                            </div>
                            <div className="flex gap-3 md:gap-2">
                                <span className="border border-[#23A6F0] rounded-full bg-[#23A6F0] py-3 px-3"></span>
                                <span className="border border-[#23856D] rounded-full bg-[#23856D] py-3 px-3"></span>
                                <span className="border border-[#E77C40] rounded-full bg-[#E77C40] py-3 px-3"></span>
                                <span className="border border-[#252B42] rounded-full bg-[#252B42] py-3 px-3"></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopProductCards;