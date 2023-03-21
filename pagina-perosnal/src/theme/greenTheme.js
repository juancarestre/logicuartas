import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";




export const greenTheme = createTheme({
    palette: {
        // azul
        primary:{
         main: '#10004F'
    },
        // verde
    secondary:{
        main: '#C1D82F'
    },
    error:{
        main: red.A400
    }
 }
})  
