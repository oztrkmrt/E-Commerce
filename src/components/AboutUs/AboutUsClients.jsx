import ClientIcons from "../Icons/ClientIcons";

const AboutUsClients = () => {
    return (
        <div className="p-10 flex flex-col gap-14 items-center">
            <div className="flex flex-col gap-6 text-center">
                <h2 className="text-[#252B42] font-bold text-5xl px-20">Big Companies Are Here</h2>
                <p className="text-[#737373] font-medium px-10">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics  </p>
            </div>
            <ClientIcons />
        </div>
    )
}

export default AboutUsClients;