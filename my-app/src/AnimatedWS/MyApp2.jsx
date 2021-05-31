import React from 'react'
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import Home from './Home'
import Navbar from './Navbar'
import './WS.css'
import Footer from './Footer'

const MyApp2 = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route exact path="/service" component={Service}></Route>
                    <Redirect to="/" />
                </Switch>
                <Footer/>

            </BrowserRouter>
        </div>
    )
}

export default MyApp2
