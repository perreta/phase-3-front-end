
import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import HomeMoviesContainer from "./HomeMoviesContainer"

function Main () { 
    return (
        <>
            <Switch>
                <Route path="/">
                    <HomeMoviesContainer />
                </Route>
                <Route path="/search">
                    <SearchContainer />
                </Route>
                <Route path="/users">
                    <UsersContainer />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </>
    )
}

export default Main

