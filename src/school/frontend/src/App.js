import React from 'react';
import ScrollToTop from './compoments/ScrollToTop';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {
    Accountpage,
    AlligatorAndCrocodilepage,
    Loginpage,
    ConstrictionSnakespage,
    Forumpage,
    Homepage,
    Lizardspage,
    Tarantulaspage,
    Tortoiseandturtlepage,
    Venomoussnakespage,
} from './pages'
import './css/style.css';

function App() {
        return (
            <Router>
                <ScrollToTop/>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/alligatorAndCrocodilepage">
                        <AlligatorAndCrocodilepage />
                    </Route>
                    <Route path="/loginpage">
                        <Loginpage />
                    </Route>
                    <Route path="/constrictionSnakespage">
                        <ConstrictionSnakespage />
                    </Route>
                    <Route path="/forumpage">
                        <Forumpage />
                    </Route>
                    <Route path="/accountpage">
                        <Accountpage />
                    </Route>
                    <Route path="/lizardspage">
                        <Lizardspage />
                    </Route>
                    <Route path="/tarantulaspage">
                        <Tarantulaspage />
                    </Route>
                    <Route path="/tortoiseandturtlepage">
                        <Tortoiseandturtlepage />
                    </Route>
                    <Route path="/venomoussnakespage">
                        <Venomoussnakespage />
                    </Route>
                </Switch>
            </Router>
        );
}
export default App;