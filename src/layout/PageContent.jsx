
import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import { Route, Switch } from "react-router-dom";

const PageContent = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact> <HomePage /> </Route>
                <Route path="/shop"> <ShopPage /> </Route>
            </Switch>
        </div>
    );
};

export default PageContent;