import BestsellerProducts from "@/components/Home/BestsellerProducts";
import EditorsPick from "@/components/Home/EditorsPick";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import HomeCarousel from "@/components/Home/HomeCarousel";
import NeuralPart from "@/components/Home/NeuralPart";

const HomePage = () => {
    return (
        <div>
            <EditorsPick />
            <BestsellerProducts />
            <HomeCarousel />
            <NeuralPart />
            <FeaturedProducts />
        </div>
    );
};

export default HomePage;