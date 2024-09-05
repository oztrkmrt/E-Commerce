import { getCategories } from "@/redux/slices/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ShopCards = () => {

    const dispatch = useDispatch();

    const { categories } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch]);

    const topCategories = [...categories].sort((a, b) => b.rating - a.rating).slice(0, 5);

    return (
        <div className="flex flex-col gap-4 py-6 px-10 bg-[#FAFAFA] md:flex-row md:px-20 justify-between">
            {topCategories.map((category) => (
                <div key={category.id} className="relative">
                    <img
                        src={category.img}
                        alt={category.title}
                        className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white font-medium gap-8">
                        <h5 className="text-xl">{category.title}</h5>
                        <h5 className="text-xl">{category.rating}</h5>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default ShopCards;