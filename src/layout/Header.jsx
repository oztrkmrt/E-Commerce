import HeaderMenuItem from "@/components/Header/HeaderMenuItem";
import HeaderNavBar from "@/components/Header/HeaderNavBar";
import HeroCarousel from "@/components/Header/HeroCarousel";

const Header = () => {
    return (
        <div>
            <HeaderNavBar />
            <HeaderMenuItem />
            <HeroCarousel />
        </div>
    );
};


export default Header;