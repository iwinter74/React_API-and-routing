import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Api/Home';
import Sport from './Api/Sport';
import English from './Api/English';
import './App1.css'
const App1 = (props) => {
    return (
        <div className="App">
            <Router>
                {props.children}

                <nav>
                    <ul>
                        <li><Link to="/sport">Sport</Link></li>
                        <li><Link to="/de">Deutschland</Link></li>
                        <li><Link to="/paris">paris</Link></li>
                        <li><Link to="/bitcoin">bitcoin</Link></li>
                        <li><Link to="/covid">Covid</Link></li>

                    </ul>
                </nav>
                <Switch>
                    <Route path="/" component={Sport} exact>

                    </Route>
                    <Route path="/:id" component={Home}>

                    </Route>

                </Switch>



            </Router>

        </div>
    );
}

export default App1;