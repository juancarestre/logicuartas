import {  WhatsApp } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import { Footer, Mapa, ServicioCobertura, TextContactanos, TextServicios } from "../views";
import { Somos } from "../views/Somos";
import { CarouselComponent } from "../components";

//pagina principal LOGICUARTAS, aca se renderizan los componentes.
export const Logicuartas = () => {

//esto es para el boton de whatsap.
const handleClick = ()=>{
  const phoneNumber = '+3187349472';
  const message = 'Hola, ¿Te podemos ayudar en algo ?'
  const  url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

  return (

     <>
       <CarouselComponent/>
       <Somos/>
       <TextServicios/>
       <ServicioCobertura/>
       
       <TextContactanos/>
       <Mapa/>
       <Footer/>
       
      

        {/* BOTON WTHATSAPP */}
        <Grid>
        <Typography variant='h6' 
        sx={{
          color: 'dimgray',
          position: 'fixed',
          right: 70,
          bottom: 120,
        }}
        >
          Ir a</Typography>
        <Typography variant='h6' 
        sx={{
          color: 'dimgray',
          position: 'fixed',
          right: 40,
          bottom: 100,
        }}
        >
        WhatsApp</Typography>
       <IconButton onClick={handleClick}
          size='large'
          sx={{
            color: 'white',
            backgroundColor: '#00BB2D',
            ':hover': { backgroundColor: '#00BB2D', opacity: 0.9},
            position: 'fixed',
            right: 60,
            bottom: 50,
          }}
          >
            <WhatsApp sx={{fontzise: 30}}/>
        </IconButton>
        </Grid>
       
     </>
     

  )
}
