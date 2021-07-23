import React from 'react'
import { BrowserRouter as Router,
    Link,
    Switch,
    Route} from  "react-router-dom";

import AboutGrey from './AboutGrey'

export default function GreySilk() {
    return(
        <Router>
            <div className="modules">
                <Link to="/grey">
                    <img src="/img/greysilk.jpg"/>
                    <p className="hoverParagraph">grey</p>
                </Link>

            <Switch>
                <Route path="/grey">
                    <AboutGrey/>
                </Route>
            </Switch>
            </div>
        </Router>
    )
}
