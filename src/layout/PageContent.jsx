
import AboutUsPage from "@/pages/AboutUsPage";
import ContactPage from "@/pages/ContactPage";
import CreateOrderPage from "@/pages/CreateOrderPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import ShopPage from "@/pages/ShopPage";
import ShoppingCartPage from "@/pages/ShoppingCartPage";
import SignUpPage from "@/pages/SignUpPage";
import TeamPage from "@/pages/TeamPage";
import ProtectedRoute from "@/Utils/ProtectedRoute";
import { Route, Switch } from "react-router-dom";

const PageContent = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/shop" exact component={ShopPage} />
                <Route path="/shop/:gender/:categoryName/:categoryId" exact component={ShopPage} />
                <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" component={ProductDetailPage} />
                <Route path="/shopping-cart" component={ShoppingCartPage} />
                <ProtectedRoute path="/create-order" component={CreateOrderPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/team" component={TeamPage} />
                <Route path="/about" component={AboutUsPage} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </div>
    );
};

export default PageContent;