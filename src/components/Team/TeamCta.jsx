import SocialMediaIcons from "../SocialMedia/SocialMediIcons";

const TeamCta = () => {
    return (
        <div className="p-10 flex flex-col gap-10 items-center my-10">
            <h2 className="text-[#252B42] font-bold text-4xl text-center px-8">Start your
                14 days free trial</h2>
            <h6 className="text-[#737373] text-center font-medium px-8">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.</h6>
            <button className="border bg-[#23A6F0] font-bold text-[#FFFFFF] py-3 px-4 rounded-md">Try it free now</button>
            <SocialMediaIcons />
        </div>
    )
}

export default TeamCta;