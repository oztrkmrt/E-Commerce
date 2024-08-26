
import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";

const PageContent = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/shop" component={ShopPage} />
            </Switch>
        </div>
    );
};

export default PageContent;