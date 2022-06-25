import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

const Routes = () => {
    return (
        <Routes className="">
            <Route path="/" exact component={Home} />
        </Routes>
    )
}

export default Routes;