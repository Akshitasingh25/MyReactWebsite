import React from 'react'
import { NavLink } from 'react-router-dom'
import Common from './Common'
import web from'./web.jpg'

const Home = () => {
    return (
        <>
           <Common
            name='Grow your business with'
            imgsrc={web}
            visit='/service'
            btname="Get Started" 
           />
        </>
    )
}

export default Home
