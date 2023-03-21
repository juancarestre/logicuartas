import { NavBar } from "../../Logicuartas"
import { Footer } from "../../Logicuartas/views"
import { TimeLineComponent } from "../components"

//pagina principáldonde se renderizan los componentes.
//reutilizamos los componentes de navbar, footer.
export const ConsultaEnvioPage = () => {
  return (
    <>
    <NavBar/>
    <TimeLineComponent/>
    <Footer/>
    </>
  )
}

