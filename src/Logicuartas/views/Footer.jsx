import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'
import './css/footer.css'
import camion from "../img/flechita.png";
import { IconButton } from '@mui/material';


export const Footer = () => {
  return (
    <footer>

        <div className='conatiner__footer'>

            <div className="box__footer">

               

                <div className="terminos">
                    <h5>Sede Principal:</h5>
                    <p> Cra 56ª N. 62-63 Barrio El Chagualo </p>
                    <p> <b>Medellin Colombia</b> </p>
                    <h5>Teléfono:</h5>
                    <p> <b/> 444-92-47 </p>
                    <h5>Email:</h5>
                    <p> <b/> info@logicuartas.com </p>
                
                </div>

                . <div className="img">
                <img  src={camion} />
                </div>

            </div>

            <div className="box__footer">
                <h2>Sedes</h2>
                <p><b>Uraba</b> (Chigorodo)</p>
                <p>Cra 95 N. 96-30 Brisas del Rio</p>
                <p><b>Puerto Berrio</b></p>
                <p>-Cra 9 N. 49-61 A 49-1</p>
                <p><b>Chocó</b> (Quibdo)</p>
                <p>-Cll 30 N.14-91 Santa Ana</p>
            </div>


            <div className="box__footer">
                <h2>Redes</h2>
                <IconButton className='fab fa-facebook-square' href='https://www.facebook.com/logicuartas?mibextid=ZbWKwL' target="_blank" >
                    <Facebook />
                        Facebook
                </IconButton>
                <IconButton className='fab fa-linkedin-square' href='https://instagram.com/logi_cuartas?igshid=YmMyMTA2M2Y=' target="_blank" >
                    <Instagram/>
                    Linkedin
                </IconButton>
                <IconButton className='fab fa-instagram-square' href='https://co.linkedin.com/in/logicuartas-log%C3%ADstica-integral-52648b247' target="_blank" >
                    <LinkedIn/>
                    Instagram
                </IconButton>
               
           
            </div>
            <div className="box__footer">
                <h2>Vigilado por</h2>
                <a href="https://www.supertransporte.gov.co/" target="_blank">SuperTransporte</a>
                <a href="https://www.mintic.gov.co/portal/inicio/" target="_blank"> Mintic</a>
               <a href="https://www.logicuartas.com/wp-content/uploads/2021/08/Politica-de-proteccion-de-datos.pdf" target="_blank">
                Politica De Proctección de datos 
                <p>Logicuartas</p>
               </a>
            </div>
         
        </div>
        <div className="box__coppight">
           
            <p>Todos los derechos reservados ®  <b>Copyright</b>  2023  <b>Logicuartas</b> </p>
        </div>
    </footer>
    
  )
}
