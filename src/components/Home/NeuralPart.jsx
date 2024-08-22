const NeuralPart = () => {
    return (
        <div className="my-20 flex flex-col">
            <div className="flex flex-col text-center gap-10">
                <h5 className="text-[#BDBDBD]">SUMMER 2024</h5>
                <h1 className="text-[#252B42] text-4xl font-bold mx-24">Part of the
                    Neural
                    Universe
                </h1>
                <h4 className="text-[#737373] text-lg px-12 mx-16">
                    We know how large objects will act, but things on a small scale.
                </h4>
                <div className="flex flex-col mx-28 gap-6">
                    <button className="text-[#FFFFFF] bg-[#23A6F0] mx-8 py-3 font-bold rounded">BUY NOW</button>
                    <button className="border-2 border-[#23A6F0] text-[#23A6F0] py-3 mx-6 font-bold rounded">Learn More</button>
                </div>
            </div>
            <div className="mt-10">
                <img className="w-[463px] h-[403px] relative -left-[30px] object-cover" src="/images/winter-cloth.png" alt="" />
            </div>
        </div>
    )
}

export default NeuralPart;