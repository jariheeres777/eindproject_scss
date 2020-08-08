import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {
    Accountpage,
    AlligatorAndCrocodilepage,
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
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/alligatorAndCrocodilepage">
                        <AlligatorAndCrocodilepage />
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