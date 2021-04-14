import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Order from './pages/order'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <h1>this is header <Link to="/">Home</Link> <Link to="/order">Order</Link></h1>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/order' component={Order} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
