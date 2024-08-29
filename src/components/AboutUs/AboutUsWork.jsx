
const AboutUsWork = () => {
    return (
        <div className="flex">
            <div className="bg-[#2A7CC7] py-20 flex flex-col items-center justify-center text-center gap-10 px-14 md:w-3/5">
                <h5 className="text-[#FFFFFF] font-bold text-lg">WORK WITH US</h5>
                <h2 className="text-[#FFFFFF] font-bold text-4xl px-10">Now Let’s grow Yours</h2>
                <h6 className="text-[#FFFFFF] font-medium mx-10">The gradual accumulation of information about atomic and
                    small-scale behavior during the first quarter of the 20th </h6>
                <button className="border bg-[#2A7CC7] font-bold text-[#FAFAFA] py-3 px-5 rounded-md">Click Me</button>
            </div>
            <div className="hidden md:block h-full md:w-2/5">
                <img src="/images/team1.jpg" alt="" className="object-cover h-full" />
            </div>
        </div>
    )
}

export default AboutUsWork;