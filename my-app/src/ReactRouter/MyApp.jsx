import React from 'react'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import User from './User'
import Search from './Search'
import { BrowserRouter,Redirect,Route, Switch } from "react-router-dom";
import Error from './Error'
import Menu from './Menu'
import './Router.css'


//when we need to pass props we should use render method (service &about)
//and use component method when don't need to pass props(contact) i.e 
//if we want to call component what it is 


//no difference in performance b/w render and component method

//component method reload the page whenever we click on 
//while render do not
const MyApp = () => {
    return (
        <div>
          <BrowserRouter>
          <Menu/>
          
            <Switch>
                {/* <User/> */}
                {/* by default / is home page */}
                {/* exact is used to exctly show the / page not /about page */}
                <Route exact path="/" render={()=> <About name="About"/>} />
                <Route exact path="/services" render={()=> <Service name="Service"/>} />
                <Route path="/contact" component={Contact} />
                {/* <Route path="/services" component={Service} /> */}

                <Route path="/search" component={Search} />


                {/* we can add two value dynamically */}
                <Route path="/User/:fname/:lname" component={User}/>


                {/* <Route component={Error}/> */}
                {/* put error page in last */}

                {/* if path not found than it will redirect to about page */}
                <Redirect to="/"/>

                
            </Switch>

            {/* <About/>
            <Contact/>
            <h1>Hiii</h1> */}
          </BrowserRouter>
        </div>
    )
}

export default MyApp
