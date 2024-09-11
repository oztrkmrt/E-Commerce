
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faEye, faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const ProductDetails = () => {

    const { currentProduct, loading, error } = useSelector(state => state.product);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!currentProduct) return null;
    return (
        <div className="px-20 py-10 flex flex-col gap-4 md:gap-12 w-full">
            <h4 className="text-3xl text-[#252B42] font-medium">{currentProduct.name}</h4>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faStar} style={{ color: "#F3CD03", }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#F3CD03", }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#F3CD03", }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#F3CD03", }} />
                <FontAwesomeIcon icon={faStarHalfStroke} style={{ color: "#F3CD03", }} />
                <p className="pl-4 text-[#737373] ">10 Reviews</p>
            </div>
            <div className="flex gap-6 font-bold">
                <h5 className="text-[#BDBDBD] text-3xl font-medium line-through">${currentProduct.price}</h5>
                <h5 className="text-[#23856D] text-3xl">${(currentProduct.price * 0.8).toFixed(2)}</h5>
            </div>

            <div className="font-semibold">
                <span className="text-[#737373]">Availability : </span>
                <span className={currentProduct.stock > 0 ? "text-[#23A6F0]" : "text-red-500"}>
                    {currentProduct.stock > 0 ? " In Stock" : " Out Of Stock"}
                </span>
            </div>
            <p className="text-[#858585]">{currentProduct.description}</p>
            <hr className="border-t border-[#BDBDBD] w-full" />
            <div className="flex gap-3 md:gap-2 py-2">
                <span className="border border-[#23A6F0] rounded-full bg-[#23A6F0] py-3 px-3"></span>
                <span className="border border-[#23856D] rounded-full bg-[#23856D] py-3 px-3"></span>
                <span className="border border-[#E77C40] rounded-full bg-[#E77C40] py-3 px-3"></span>
                <span className="border border-[#252B42] rounded-full bg-[#252B42] py-3 px-3"></span>
            </div>
            <div className="flex gap-8 items-center my-2">
                <button className="border py-2 px-4 md:mr-20 rounded bg-[#23A6F0] text-[#FFFFFF] font-medium">Add To Cart</button>
                <FontAwesomeIcon icon={faHeart} size="xl" />
                <FontAwesomeIcon icon={faCartShopping} size="xl" />
                <FontAwesomeIcon icon={faEye} size="xl" />
            </div>
        </div>
    )
}
export default ProductDetails;