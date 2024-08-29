import TeamCta from "@/components/Team/TeamCta";
import TeamHeader from "@/components/Team/TeamHeader";
import TeamHero from "@/components/Team/TeamHero";
import TeamMeat from "@/components/Team/TeamMeat";

const TeamPage = () => {
    return (
        <div>
            <TeamHeader />
            <TeamHero />
            <TeamMeat />
            <TeamCta />
        </div>
    )
}

export default TeamPage;