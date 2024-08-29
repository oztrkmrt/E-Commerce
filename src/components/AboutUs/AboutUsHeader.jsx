
const AboutUsHeader = () => {
    return (
        <div className="p-20 flex flex-col gap-10 md:flex-row">
            <div className="bg-white p-10 flex flex-col items-center gap-10 my-14">
                <h2 className="text-[#252B42] font-bold text-4xl">ABOUT US</h2>
                <h6 className="text-[#737373] font-bold mx-10 text-center">We know how large
                    objects will act, but things
                    on a small scale just do
                    not act that way.</h6>
                <button className="border bg-[#23A6F0] font-bold text-[#FFFFFF] py-3 px-5 rounded-md">Get Quote Now</button>
            </div>
            <div className="pt-10 relative inline-block">
                <div class="bg-[#FFE9EA] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] xl:w-[700px] xl:h-[700px] rounded-full absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></div>
                <div class="absolute top-5 left-2 bg-[#FFE9EA] w-3 h-3 md:top-10 md:left-5 md:w-5 md:h-5 rounded-full z-10"></div>
                <div class="absolute top-10 right-5 bg-[#977DF4] w-2 h-2 md:top-20 md:right-10 md:w-3 md:h-3 rounded-full z-10"></div>
                <div class="absolute bottom-8 left-12 bg-[#977DF4] w-3 h-3 md:bottom-16 md:left-24 md:w-4 md:h-4 rounded-full z-10"></div>
                <img src="/images/winter-cloth.png" alt="" class="relative z-20 max-w-full" />
            </div>
        </div>
    )
}

export default AboutUsHeader;