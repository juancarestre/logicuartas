
import {  Grid,  Typography } from "@mui/material"

export const TextServicios = () => {
  return (
    
      <Grid mt={15}
      container 
      spacing={2} 
      justifyContent='center'
      alignItems='center'
      id="serviciosycobertura"
      >

     <Grid item md={8}  >
        <Typography textAlign='center' variant="h2"   color="primary"> 
                Rutas y Coberturas 
          </Typography>


          <Typography   
          mt={3} variant="h6" align="center"
          style={{ 
           display: 'inline-block',
           border: '1px solid white',
           padding: '10px',
           textAlign: 'justify',
           lineHeight: '35px'
         }}>
              Transportamos mercancía y paquetería a más de 200 poblaciones,
              manejamos carga masiva y semi masiva, nuestros operarios de 
              logística se encargan de que tengas una mejor experiencia en tú entrega.
              los paquetes llegarán en 24 a 36 horas hábiles.
            </Typography>

    </Grid>

    <Grid item>
    <Typography   
           variant='subtitle1' 
           align="center"
          style={{ 
           display: 'inline-block',
           border: '1px solid white',
           padding: '10px',
           textAlign: 'justify',
           lineHeight: '35px',
           fontSize: '20px'
         }}>
         <b>- - -  Mira las imágenes para más información - - -</b> 
         </Typography>
    </Grid>
         
      </Grid>
      
   
  );
}
