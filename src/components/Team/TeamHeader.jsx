import { ChevronRight } from "lucide-react";

const TeamHeader = () => {
    return (
        <div className="flex flex-col items-center gap-10 p-20">
            <h5 className="text-[#737373]">WHAT WE DO</h5>
            <h2 className="text-[#252B42] text-4xl font-bold text-center">Innovation
                tailored for you</h2>
            <div className="flex gap-4 font-medium">
                <h4 className="text-[#252B42] text-xl">Home</h4>
                <ChevronRight className="text-[#737373]" size={30} />
                <h4 className="text-[#737373] text-xl">Team</h4>
            </div>
        </div>
    )
}

export default TeamHeader;