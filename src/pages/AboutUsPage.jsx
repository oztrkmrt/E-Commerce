import AboutUsClients from "@/components/AboutUs/AboutUsClients";
import AboutUsContent from "@/components/AboutUs/AboutUsContent";
import AboutUsHeader from "@/components/AboutUs/AboutUsHeader";
import AboutUsStats from "@/components/AboutUs/AboutUsStats";
import AboutUsTeam from "@/components/AboutUs/AboutUsTeam";
import AboutUsVideo from "@/components/AboutUs/AboutUsVideo";
import AboutUsWork from "@/components/AboutUs/AboutUsWork";

const AboutUsPage = () => {
    return (
        <div>
            <AboutUsHeader />
            <AboutUsContent />
            <AboutUsStats />
            <AboutUsVideo />
            <AboutUsTeam />
            <AboutUsClients />
            <AboutUsWork />
        </div>
    )
}

export default AboutUsPage;