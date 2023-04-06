import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';
import {scrollToElement} from "./../utils/smoothScroll";


const Navbar = () => {
    const [activeBtn, setActiveBtn] = useState("home")


   // useEffect(()=>{
   //
   //     console.log("lala")
   // },[window.location.href])


    return   <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
        <Link to="/">
            <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
        </Link>
        <Stack
            direction="row"
            gap="40px"
            fontFamily="Alegreya"
            fontSize="24px"
            alignItems="flex-end"
        >
            <Link className={activeBtn === "home" ? "active" :""} to="/" style={{ textDecoration: 'none', color: '#3A1212' }}>Home</Link>
            <Link className={activeBtn === "exercises" ? "active" :""} to="/" onClick={()=> {scrollToElement("exercises")}
                }  style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</Link>
        </Stack>
    </Stack>
}

export default Navbar;
