
import AboutUsPage from "@/pages/AboutUsPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import ShopPage from "@/pages/ShopPage";
import TeamPage from "@/pages/TeamPage";
import { Route, Switch } from "react-router-dom";

const PageContent = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact> <HomePage /> </Route>
                <Route path="/shop"> <ShopPage /> </Route>
                <Route path="/product"> <ProductPage /> </Route>
                <Route path="/contact"> <ContactPage /> </Route>
                <Route path="/team"> <TeamPage /> </Route>
                <Route path="/about"> <AboutUsPage /> </Route>
            </Switch>
        </div>
    );
};

export default PageContent;