import * as React from 'react';
import { AppBar, IconButton, Toolbar, Typography, useMediaQuery, useTheme, } from "@mui/material"
import { DrawerCompt } from "./DrawerCompt";
import logo from "../img/logo5.png";
import { MenuNab } from "./MenuNab";
import { Link } from 'react-router-dom';

//componente donde renderizamos como tal el menunab y el drawer.
export const NavBar = () => {

  //poner icono menu y elementos pantalla pequeña
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    
  return (
    <AppBar position='sticky' color="primary" > 
       <Toolbar>

        <Link to='/'>
            <IconButton >
              <img  height={100}  src={logo} />
            </IconButton>
        </Link>
    
            {
              isMatch ? ( 
              <>
              <DrawerCompt />
              </> ) 
              : ( 
              <MenuNab/>
              )
            }

        </Toolbar>
    </AppBar>

  )
}
