import BestsellerProducts from "@/components/Home/BestsellerProducts";
import EditorsPick from "@/components/Home/EditorsPick";

const HomePage = () => {
    return (
        <div>
            <EditorsPick />
            <BestsellerProducts />
        </div>
    );
};

export default HomePage;