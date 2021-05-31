import React from 'react'
import {NavLink,Link} from 'react-router-dom'

const Menu=()=> {
    
    return (
        <div className="menu_style">
           
           {/* activeClassName is used to add css */}
            <NavLink exact activeClassName="active_class" to ="/">AboutUs</NavLink>
            <NavLink exact activeClassName="active_class" to ="/contact">ContactUs</NavLink>
            <NavLink exact activeClassName="active_class" to ="/services">Services</NavLink>
            <NavLink exact activeClassName="active_class" to ="/User">User</NavLink>
            <NavLink exact activeClassName="active_class" to ="/search">Search</NavLink>

            {/* <Link to="/">AboutUs</Link>
            <Link to="/contact">ContactUs</Link> */}

            <br/>

            {/* if we render using a tag than our page will reload but we want to only render a particular component 
            so instead we will use link */}


           {/* <a href="/">AboutUs</a>
           <a href="/contact">ContactUs</a> */}

        </div>
    )
}

export default Menu
