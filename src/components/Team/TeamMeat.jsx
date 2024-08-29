import SocialMediaIcons from "../Icons/SocialMediIcons";

const TeamMeat = () => {

    const teamMembers = [
        { url: "/images/team1.jpg" },
        { url: "/images/team2.jpg" },
        { url: "/images/team1.jpg" },
        { url: "/images/team2.jpg" },
        { url: "/images/team1.jpg" },
        { url: "/images/team2.jpg" },
        { url: "/images/team1.jpg" },
        { url: "/images/team2.jpg" },
    ];

    return (
        <div className="p-10 flex flex-col gap-10 items-center">
            <h2 className="text-[#252B42] font-bold text-4xl px-20 text-center">Meet Our Team</h2>
            <div className="flex flex-col gap-10 items-center md:flex-row md:flex-wrap md:justify-center">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center gap-4 md:my-6">
                        <img className="h-[250px] w-[350px] object-cover " src={member.url} alt="" />
                        <h5 className="text-[#252B42] font-semibold">Username</h5>
                        <h6 className="text-[#737373] font-semibold">Profession</h6>
                        <SocialMediaIcons color="#23A6F0" />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default TeamMeat;