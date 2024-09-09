import { ChevronRight } from "lucide-react";
import { useHistory } from "react-router-dom";


const ProductTitle = () => {

    const history = useHistory();

    return (
        <div className="bg-[#FAFAFA] flex flex-col items-center p-10 gap-10 font-bold md:flex-row md:justify-between md:px-20">
            <button
                onClick={() => history.goBack()}
                className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Back
            </button>
            <div className="flex gap-4">
                <h4 className="text-[#252B42] text-xl">Home</h4>
                <ChevronRight className="text-[#737373]" size={30} />
                <h4 className="text-[#737373] text-xl">Shop</h4>
            </div>
        </div>
    );
};

export default ProductTitle;