const NeuralPart = () => {
    return (
        <div className="my-20 flex flex-col md:flex-row-reverse md:mx-20 md:gap-20 overflow-hidden md:my-0">
            <div className="flex flex-col text-center gap-10 md:text-start md:justify-center">
                <h5 className="text-[#BDBDBD] md:ml-24">SUMMER 2024</h5>
                <h1 className="text-[#252B42] text-4xl font-bold mx-24 md:mx-18">Part of the
                    Neural
                    Universe
                </h1>
                <h4 className="text-[#737373] text-lg px-12 mx-16 md:mx-12">
                    We know how large objects will act, but things on a small scale.
                </h4>
                <div className="flex flex-col mx-28 gap-6 md:flex-row md:gap-0 md:ml-20">
                    <button className="text-[#FFFFFF] bg-[#23A6F0] mx-8 py-3 font-bold rounded md:bg-[#2DC071] md:px-8 md:ml-4">BUY NOW</button>
                    <button className="border-2 border-[#23A6F0] text-[#23A6F0] py-3 mx-6 font-bold rounded md:text-[#2DC071] md:border-[#2DC071] md:px-6 md:py-1 md:mx-0">Learn More</button>
                </div>
            </div>
            <div className="mt-10">
                <img className="w-[463px] h-[403px] relative -left-[30px] object-cover md:w-full md:scale-150 md:static" src="/images/winter-cloth.png" alt="" />
            </div>
        </div>
    )
}

export default NeuralPart;