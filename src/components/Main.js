import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Home from './Home'
import Me from './Me'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Me" component={Me} />
            <Route exact path="/Resume" component={Resume} />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/Contact" component={Contact} />
            <Route path='*' component={PageNotFound} />
        </Switch>
    </main>
)

export default Main;
