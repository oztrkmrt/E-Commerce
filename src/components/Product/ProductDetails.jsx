import { getProductDetail } from "@/redux/slices/productSlice";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faEye, faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const { productId } = useParams();
    const dispatch = useDispatch();
    const { currentProduct, loading, error } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(getProductDetail(productId));
    }, [dispatch, productId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!currentProduct) return null;
    return (

        <div className="px-20 py-10 flex flex-col gap-4">
            {currentProduct.map((product) => (
                <div key={product.id}>
                    <h4 className="text-3xl text-[#252B42] font-medium">{product.name}</h4>
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
                    <p className="text-[#858585]">{product.description}</p>
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
            )}
        </div>
    )
}
export default ProductDetails;