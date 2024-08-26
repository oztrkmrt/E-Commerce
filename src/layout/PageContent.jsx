
import HomePage from "@/pages/HomePage";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";

const PageContent = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
            </Switch>
        </div>
    );
};

export default PageContent;