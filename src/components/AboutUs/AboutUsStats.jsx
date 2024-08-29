
const AboutUsStats = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 py-10 md:justify-between md:px-20">
            <div className="py-4 text-center flex flex-col gap-4">
                <h1 className="font-bold text-5xl text-[#252B42]">15K</h1>
                <h5 className="text-[#737373]">Happy Customers</h5>
            </div>
            <div className="py-4 text-center flex flex-col gap-4">
                <h1 className="font-bold text-5xl text-[#252B42]">150K</h1>
                <h5 className="text-[#737373]">Monthly Visitors</h5>
            </div>
            <div className="py-4 text-center flex flex-col gap-4">
                <h1 className="font-bold text-5xl text-[#252B42]">15</h1>
                <h5 className="text-[#737373]">Countries Worldwide</h5>
            </div>
            <div className="py-4 text-center flex flex-col gap-4">
                <h1 className="font-bold text-5xl text-[#252B42]">100+</h1>
                <h5 className="text-[#737373]">Top Partners</h5>
            </div>
        </div>
    )
}

export default AboutUsStats;