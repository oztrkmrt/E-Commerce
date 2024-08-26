const EditorsPick = () => {
    return (
        <div className="bg-[#FAFAFA] py-20 md:px-20">
            <div className="flex flex-col text-center items-center px-10 mt-14 gap-2">
                <h2 className="font-bold">EDITOR'S PICK</h2>
                <p className="px-20 text-[#737373] ">
                    Problems trying to resolve
                    the conflict between
                </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-10 mt-14 md:flex-row md:h-[500px] md:items-start">
                <div className="relative w-3/4 md:h-[500px]">
                    <img src="/images/editors-pick1.jpg" alt="" className="w-full object-cover h-full" />
                    <button className="absolute bottom-6 left-6 bg-white text-[#252B42] px-8 py-3 font-bold">
                        MEN
                    </button>
                </div>
                <div className="relative w-3/4 md:w-2/4 md:h-[500px]">
                    <img src="/images/editors-pick2.jpg" alt="" className="w-full object-cover h-full" />
                    <button className="absolute bottom-6 left-6 bg-white text-[#252B42] px-8 py-3 font-bold">
                        WOMEN
                    </button>
                </div>
                <div className="flex flex-col items-center gap-10 w-full md:h-[480px] md:w-2/4 md:gap-5 md:items-start">
                    <div className="relative w-3/4 h-[300px] md:h-2/4">
                        <img src="/images/editors-pick3.jpg" alt="" className="w-full h-full object-cover" />
                        <button className="absolute bottom-6 left-6 bg-white text-[#252B42] px-8 py-3 font-bold">
                            ACCESSORIES
                        </button>
                    </div>
                    <div className="relative w-3/4 h-[300px] md:h-2/4">
                        <img src="/images/editors-pick4.jpg" alt="" className="w-full h-full object-cover object-bottom" />
                        <button className="absolute bottom-6 left-6 bg-white text-[#252B42] px-8 py-3 font-bold">
                            KIDS
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditorsPick;