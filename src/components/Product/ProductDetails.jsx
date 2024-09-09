import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faEye, faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductDetails = ({ product }) => {
    return (
        <div className="px-20 py-10 flex flex-col gap-4">
            <h4 className="text-3xl text-[#252B42] font-medium">Floating Phone</h4>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faStar} style={{ color: "#F3CD03", }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#F3CD03", }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#F3CD03", }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#F3CD03", }} />
                <FontAwesomeIcon icon={faStarHalfStroke} style={{ color: "#F3CD03", }} />
                <p className="pl-4 text-[#737373] ">10 Reviews</p>
            </div>
            <h5 className="text-[#252B42] text-3xl font-bold">${product.price}</h5>
            <div className="font-semibold">
                <span className="text-[#737373]">Availability : </span>
                <span className={product.stock > 0 ? "text-[#23A6F0]" : "text-red-500"}>
                    {product.stock > 0 ? " In Stock" : " Out Of Stock"}
                </span>
            </div>
            <p className="text-[#858585]">Met minim Mollie non desert
                Alamo est sit cliquey dolor do
                met sent. RELIT official consequent
                door ENIM RELIT Mollie. Excitation
                venial consequent sent nostrum met.</p>
            <hr className="text-[#BDBDBD]" />
            <div className="flex gap-3 md:gap-2 py-2">
                <span className="border border-[#23A6F0] rounded-full bg-[#23A6F0] py-3 px-3"></span>
                <span className="border border-[#23856D] rounded-full bg-[#23856D] py-3 px-3"></span>
                <span className="border border-[#E77C40] rounded-full bg-[#E77C40] py-3 px-3"></span>
                <span className="border border-[#252B42] rounded-full bg-[#252B42] py-3 px-3"></span>
            </div>
            <div className="flex gap-8 items-center my-2">
                <button className="border py-2 px-3 rounded bg-[#23A6F0] text-[#FFFFFF] font-medium">Select Options</button>
                <FontAwesomeIcon icon={faHeart} size="xl" />
                <FontAwesomeIcon icon={faCartShopping} size="xl" />
                <FontAwesomeIcon icon={faEye} size="xl" />
            </div>
        </div>
    )
}
export default ProductDetails;