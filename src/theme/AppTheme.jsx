import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
// tema que hicimos desde la carpeta themes
import { greenTheme } from "./greenTheme";

// el children es el App
export const AppTheme = ({children}) => {

   return (
      
      <ThemeProvider theme={greenTheme} >
         <CssBaseline/>
         {children}
      </ThemeProvider>
 )
}
