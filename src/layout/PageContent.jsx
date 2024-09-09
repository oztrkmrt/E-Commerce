
import AboutUsPage from "@/pages/AboutUsPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import ProductPage from "@/pages/ProductPage";
import ShopPage from "@/pages/ShopPage";
import SignUpPage from "@/pages/SignUpPage";
import TeamPage from "@/pages/TeamPage";
import { Route, Switch } from "react-router-dom";

const PageContent = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact> <HomePage /> </Route>
                <Route path="/shop"> <ShopPage /> </Route>
                <Route path="/shop/:gender/:categoryName/:categoryId"> <ProductPage /> </Route>
                <Route path="/contact"> <ContactPage /> </Route>
                <Route path="/team"> <TeamPage /> </Route>
                <Route path="/about"> <AboutUsPage /> </Route>
                <Route path="/signup"> <SignUpPage /> </Route>
                <Route path="/login"> <LoginPage /> </Route>
            </Switch>
        </div>
    );
};

export default PageContent;