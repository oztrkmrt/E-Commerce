import SocialMediaIcons from "../SocialMedia/SocialMediIcons";

const ContactHeader = () => {
    return (
        <div className="p-20 flex flex-col gap-10">
            <div className="flex flex-col gap-10 items-center">
                <h5 className="text-[#252B42] font-bold text-lg">CONTACT US</h5>
                <h1 className="text-[#252B42] font-bold text-4xl text-center">Get in touch today!</h1>
                <h4 className="text-[#737373] text-xl px-2 text-center font-medium">We know how large
                    objects will act, but things
                    on a small scale just do
                    not act that way.</h4>
                <div className="text-[#252B42] font-bold text-2xl flex flex-col gap-2 items-center">
                    <p>Phone ; +451 215 215</p>
                    <p>Fax ; +451 215 215</p>
                </div>
                <SocialMediaIcons />
            </div>
            <div className="pt-10 relative inline-block">
                <div class="bg-[#FFE9EA] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] xl:w-[700px] xl:h-[700px] rounded-full absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></div>
                <div class="absolute top-5 left-2 bg-[#FFE9EA] w-3 h-3 md:top-10 md:left-5 md:w-5 md:h-5 rounded-full z-10"></div>
                <div class="absolute top-10 right-5 bg-[#977DF4] w-2 h-2 md:top-20 md:right-10 md:w-3 md:h-3 rounded-full z-10"></div>
                <div class="absolute bottom-8 left-12 bg-[#977DF4] w-3 h-3 md:bottom-16 md:left-24 md:w-4 md:h-4 rounded-full z-10"></div>
                <img src="/images/contact-image.png" alt="" class="relative z-20 max-w-full" />
            </div>
        </div>
    )
}

export default ContactHeader;