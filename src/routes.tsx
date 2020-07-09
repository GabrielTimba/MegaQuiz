import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Quiz from './pages/Quiz';

const Router=()=>{
    return(
        <BrowserRouter>
            <Route exact path='/' component={Home}/>
            <Route path='/quiz' component={Quiz}/>
        </BrowserRouter>
    )
}

export default Router;