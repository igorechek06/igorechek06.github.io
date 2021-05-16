import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Pages/Header';
import Projects from './Pages/Projects';

const Main = () => (
    <Router>
        <div className={'col row justify-content-center align-items-center p-0 m-0'} style={{ minHeight: '100vh' }}>
            <Switch>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/">
                    <Header />
                </Route>
            </Switch>
        </div >

    </Router>
);
export default Main;
