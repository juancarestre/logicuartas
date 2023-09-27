import { Navigate, Route, Routes } from "react-router-dom";
import { ConsultaEnvioPage } from "../../ConsultaEnvio/page/ConsultaEnvioPage";
import { NavBar } from "../components";
import { Logicuartas } from "../page/Logicuartas";


export const RouterLogicuartas = () => {
  return (
    <>

<NavBar/>

        <Routes>
            <Route path="logicuartas" element={<Logicuartas/>} />
            <Route path="Consultaenvio" element={<ConsultaEnvioPage/>} />
            <Route path="*" element={ <Navigate to="logicuartas" /> } />
            {/* <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>
    </>
  )
}
