import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Movies from './components/Movies'
import Movie from './components/Movie'

export default (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Movies} exact />
            <Route path='/movies/:id' component={Movie} />
        </Switch>
    </BrowserRouter>
)