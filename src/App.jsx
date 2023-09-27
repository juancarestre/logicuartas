
import { RouterApp } from "./router/RouterApp";
import { AppTheme } from "./theme";




export const App = () => {
  return (
    <>
    {/* tema personalizado </AppTheme> */}
    <AppTheme>
        <RouterApp/>
    </AppTheme>
    </>
  )
}
