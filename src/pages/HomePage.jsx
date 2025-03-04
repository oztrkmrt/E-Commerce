import BestsellerProducts from "@/components/Home/BestsellerProducts";
import EditorsPick from "@/components/Home/EditorsPick";
import FeaturedPosts from "@/components/Home/FeaturedPosts";
import HeroCarousel from "@/components/Home/HeroCarousel";
import HomeCarousel from "@/components/Home/HomeCarousel";
import NeuralPart from "@/components/Home/NeuralPart";

const HomePage = () => {
    return (
        <div>
            <HeroCarousel />
            <EditorsPick />
            <BestsellerProducts />
            <HomeCarousel />
            <NeuralPart />
            <FeaturedPosts />
        </div>
    );
};

export default HomePage;