import * as React from 'react';
import { CloseTwoTone } from '@mui/icons-material';
import { Button, Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import zona1 from '../img/zona1.jpg';
import zona2 from '../img/zona2.jpg';
import zona3 from '../img/zona3.jpg';
import zona4 from '../img/zona4.jpg';
import './css/imgText.css'

//tenemos las imagenes de las rutas.
export const ServicioCobertura=() =>{

        var items = [
            {
                images: img1,
                h1: 'Antioquia',
                info2:'(Occidente, Suroeste, Norte, Zona minera, Caucasia, Zona de Urabá y Área Metropolitana) ',
                image2: zona1
        
            },
            {
                images: img2,
                h1: 'Chocó',
                info2:'(Occidente, Suroeste, Norte, Zona minera, Caucasia, Zona de Urabá y Área Metropolitana) ',
                image2: zona2
              },
            {
                images: img3,
                h1: 'Córdoba',
                info2:'(Occidente, Suroeste, Norte, Zona minera, Caucasia, Zona de Urabá y Área Metropolitana) ',
                image2: zona3
              },
            {
              images: img4,
              h1: 'Sucre',
              info2:'(Occidente, Suroeste, Norte, Zona minera, Caucasia, Zona de Urabá y Área Metropolitana) ',
              image2: zona4
            }
        ] 
   
  return (
    
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    id="serviciosycobertura"
    >
    
   { items.map( (item, i) => <Imagesk key={i} item={item} /> ) }
    </Grid>
  );
}


function Imagesk(props) {

  const [open, setOpen] = useState(false)
  
  const [hover, setHover] = useState(false);

    const handleClickOpen = ()=>{
         setOpen(true);
    };

    const handleClose = ()=>{
        setOpen(false);
    };
    

  return (
   <Grid
   onMouseEnter={() => setHover(true)}
   onMouseLeave={() => setHover(false)}
   >

  
    <Card className='mi-card-media' sx={{ maxWidth: 250,  margin: 3, mt: 8, }}  >
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia
          
          component="img"
          image={props.item.images}
          
        />
        
          <Typography className='mi-card-media texto-encima'>
            + info
          </Typography>
       
      
      
        <CardContent>
          <Typography gutterBottom variant="h5" color='primary' >
          {props.item.h1} 
          </Typography>
         
        </CardContent>
      </CardActionArea>

      
      <Dialog
      open={open}
      onClose={handleClose}
      
    >
     
      <DialogActions>
        <Button  
          onClick={handleClose}
        >   
            <CloseTwoTone size='small' />
        </Button >
      </DialogActions>


      <Card sx={{ maxWidth: 400, margin: 3, }}  >
        <CardMedia
          
          component="img"
          image={props.item.image2}
          alt="green iguana"
        />
      </Card>
      
    </Dialog>
    </Card>

    <div className='mobile-text'>
      + info
    </div>

    </Grid>
    
   
  );
}