import BestsellerProducts from "@/components/Home/BestsellerProducts";
import EditorsPick from "@/components/Home/EditorsPick";
import HomeCarousel from "@/components/Home/HomeCarousel";

const HomePage = () => {
    return (
        <div>
            <EditorsPick />
            <BestsellerProducts />
            <HomeCarousel />
        </div>
    );
};

export default HomePage;