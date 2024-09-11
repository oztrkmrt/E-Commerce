import { ChevronLeft, ChevronRight } from "lucide-react";
import { useHistory } from "react-router-dom";

const ProductTitle = () => {
    const history = useHistory();

    return (
        <div className="bg-[#FAFAFA] flex items-center justify-between p-10 md:px-20">
            <button
                onClick={() => history.goBack()}
                className="text-xl flex items-center gap-4 hover:bg-gray-100 text-[#252B42] font-bold py-2 px-4 rounded cursor-pointer"
            >
                <ChevronLeft className="text-[#252B42]" size={30} /> Back
            </button>
            <div className="flex items-center gap-4">
                <h4 className="text-[#252B42] text-xl font-bold">Home</h4>
                <ChevronRight className="text-[#737373]" size={30} />
                <h4 className="text-[#737373] text-xl font-bold">Shop</h4>
            </div>
        </div>
    );
};

export default ProductTitle;