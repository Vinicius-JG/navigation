import './Content.css'
import React from 'react';
import {Route, Switch } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Param from '../views/Param'
import NotFound from '../views/NotFound'

const Content = () => {
    return (
    <main className='Content'>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/param/:id'>
                <Param />
            </Route>
            <Route path='*'>
                <NotFound />
            </Route>
        </Switch>  
    </main>
    )
}

export default Content