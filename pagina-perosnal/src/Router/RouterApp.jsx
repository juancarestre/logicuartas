import { Route, Routes } from "react-router-dom"
import { ConsultaEnvioPage } from "../ConsultaEnvio/page/ConsultaEnvioPage"
import { RouterLogicuartas } from "../Logicuartas/routes/RouterLogicuartas"


export const RouterApp = () => {
  return (
    <>
        <Routes>
            {/* ruta Applogicuartas. */}
           <Route path="/*"  element={ <RouterLogicuartas/>} /> 
            {/* ruta consultaEnvio */}
           <Route path="/consultaEnvio" element={ <ConsultaEnvioPage/>} />
        </Routes>
    </>
  )
}
