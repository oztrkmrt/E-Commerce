import { ChevronRight } from "lucide-react";


const ShopTitle = () => {
    return (
        <div className="bg-[#FAFAFA] flex flex-col items-center p-10 gap-10 font-bold md:flex-row md:justify-between md:px-20">
            <h3 className="text-[#252B42] text-2xl">Shop</h3>
            <div className="flex gap-4">
                <h4 className="text-[#252B42] text-xl">Home</h4>
                <ChevronRight className="text-[#737373]" size={30} />
                <h4 className="text-[#737373] text-xl">Shop</h4>
            </div>
        </div>
    );
};

export default ShopTitle;