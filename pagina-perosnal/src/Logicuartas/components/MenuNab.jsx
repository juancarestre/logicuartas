import * as React from 'react';
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material"
import { Box,  IconButton, Tab, Tabs } from "@mui/material"

 //pages
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
        hrefId: "/consultaenvio",
       
    },
]
//menu normal
export const MenuNab = () => {
    // para seleccionar items del nabr
    const [value, setValue] = React.useState(0);
    const handleChange = ( event,  newValue)=>{
       setValue(newValue)
    }
 
  return (
    <>
    <Box sx={{ width: '100%'}}>
                    <Tabs
                        value={value} 
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        sx={{marginLeft: 20}}
                        className='animate__animated animate__fadeInDown'
                        >
                            {
                                pages.map((page, index) =>(
                                    <Tab key={index} label={page.tittle} href={page.hrefId} />
                                ))
                            }
                        {/* <Tab value="two" label="Servicios y Cobertura"/> */}
                    </Tabs>
                </Box>
               
                    <IconButton href='https://www.facebook.com/logicuartas?mibextid=ZbWKwL' target="_blank" rel="noopener noreferrer"  sx={{ marginLeft: "auto"}} color="secondary"  >
                        <Facebook style={{fontSize: 30}}/>
                    </IconButton>
                    
                    <IconButton href='https://instagram.com/logi_cuartas?igshid=YmMyMTA2M2Y=' target="_blank" rel="noopener noreferrer"  sx={{ marginLeft: "auto"}} color="secondary"  >
                        <Instagram style={{fontSize: 30}}/>
                    </IconButton>

                    <IconButton href='https://co.linkedin.com/in/logicuartas-log%C3%ADstica-integral-52648b247' target="_blank" rel="noopener noreferrer" sx={{ marginLeft: "auto"}} color="secondary"  >
                        <LinkedIn style={{fontSize: 30}}/>
                    </IconButton>
              
    </>
  )
}
