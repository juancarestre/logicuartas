import {Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Tab } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';

const pages = [
  {
      tittle: "Quienes Somos",
      hrefId: "/logicuartas#somos"
  },
  {
      tittle: "Servicios y Cobertura",
      hrefId: "/logicuartas#serviciosycobertura"
  },
  {
      tittle: "Contactanos",
      hrefId: "/logicuartas#contactanos"
  },
  {
      tittle: "Rastrea Tu Guía",
      hrefId: "/consultaenvio"
  }
]

//menu que sale cuando la app esta en modo movil.

export const DrawerCompt = () => {
    //menu icon 
    const [openDrawer, setOpenDrawer] = useState(false)


  return (
    <>
       

      <Drawer 
      
      PaperProps={{
        sx: {
          width: 250,
          height: 600,
        }
          }}
              open={openDrawer}
              onClose={ ()=>setOpenDrawer(false) }
              >

          <List  textcolor="inherit" >
            {
              pages.map((page, index)=>(
                <ListItemButton  onClick={()=>setOpenDrawer(false) } key={index}>
                <ListItemIcon >
                  <ListItemText>
                  <Tab key={index} label={page.tittle} href={page.hrefId}/>
                  </ListItemText>
                </ListItemIcon>
            </ListItemButton>
              ))
            }
          </List>
      </Drawer>
    
      <IconButton 
      sx={{ marginLeft: 'auto' }}
      color="secondary" 
      onClick={ ()=> setOpenDrawer(!openDrawer) }
      >
        <MenuIcon/>
      </IconButton>


      
     
  </> 
  )
}
