
import {  Grid,  Typography } from "@mui/material"
import { CajitasMisionVision } from "./components/CajitasMisionVision";
//  import Image from "mui-image";
//  import misionViaion from '../img/misionVision.jpg';
export const Somos = () => {
  return (
    <>
   
   <Grid 
   mt={10} 
   container 
   spacing={2} 
   justifyContent='center'
   alignItems='center'
   id='somos'
   >
      
   <Grid item md={8}  >
   <Typography textAlign='center' variant="h2"   color="primary"> 
         logi cuartas
      </Typography>

     <Typography mt={3} variant="h6" align="center"
     style={{ 
      display: 'inline-block',
      border: '1px solid white',
      padding: '10px',
      textAlign: 'justify',
      lineHeight: '35px'
    }}>
     Logicuartas SAS, es una empresa de transporte de 
     carga en la modalidad de paqueteo; contamos con 
     un enfoque en el mejoramiento continuo, que nos ha 
     permitido desarrollar herramientas tecnológicas para 
     tener una comunicación en tiempo real con el cliente, 
     el destinatario y los procesos internos de la empresa. 
     Asì mismo, garantizando el cumplimiento de los requisitos 
     legales, con marco en los sistemas de calidad, ambiental, 
     seguridad y salud en el trabajo y seguridad vial.
     Entre nuestros procesos contamos con: Dirección 
     estratégica, Comercial y Servicio al cliente, 
     Cadena de abastecimientos, Compras e infraestructura,
      Gestión humana, Gestión de sistemas de información,
       Gestión integrada de la calidad, SST y PESV.
     </Typography>
   </Grid>
 </Grid>

 <CajitasMisionVision/>
 </>
      
   
  );
}
