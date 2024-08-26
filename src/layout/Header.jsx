import HeaderMenuItem from "@/components/Header/HeaderMenuItem";
import HeaderNavBar from "@/components/Header/HeaderNavBar";
import HeaderSocial from "@/components/Header/HeaderSocial";

const Header = () => {
    return (
        <div>
            <HeaderSocial />
            <div className="flex flex-col md:flex-row gap-20 px-10">
                <HeaderNavBar />
                <HeaderMenuItem />
            </div>

        </div>
    );
};


export default Header;