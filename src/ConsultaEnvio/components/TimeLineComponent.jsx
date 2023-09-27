
import React, { useState } from 'react'
import { Grid, IconButton, TextField, Typography } from '@mui/material';

import { Stack } from '@mui/system';
import { Search } from '@mui/icons-material';
import { LineTimeComponent } from './LineTimeComponent';
import { ApiLogicuartas } from '../helpers/ApiLogicuartas';


//componente de la vista y del input.
function isNineDigitString(str) {
  if (typeof str !== "string") return false;
  if (str.length !== 9) return false;
  for (let i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i]))) return false;
  }
  return true;
}

export const TimeLineComponent = () => {

    //estado inicial de la vista y su contenido.
    const [firstView, setFirstView] = useState(false);

    //state input 
    const [valueInput, setValueInput] = useState('');

    //el valor lo mandamos al boton.
    const onSearchValueChange = (event)=>{
      const clickInput = event.target.value;
      if (clickInput.length <= 9 && !isNaN(parseInt(clickInput))) {
      setValueInput(clickInput);}
    }

    //funcion despues de setiar el boton.
    const handleSubmit = async()=>{
      const isNumber =  isNineDigitString(valueInput);
      
      if(!isNumber){
        return
      }
    //peticion (devolvemos json)
      const respuestaApi = await ApiLogicuartas(valueInput)
      console.log(respuestaApi)
    // esto es despues de ya tener la info del api
      setFirstView(true)
    }


  return (
    <Grid
      container
      mt={10}
      direction='column'
      justifyContent='space-between'
      alignItems='center'
    >

    <Typography textAlign="center" variant='h3' color='black'>
        Ingresa Número De Guía
    </Typography>

      <Stack
      direction='row'
      sx={{
        marginTop: '30px',
        width: '80%',
      }}>

        <TextField
          id="outlined-basic"
          label="Busca tu Guia"
          variant="outlined" 
          placeholder='Buscar Guía'
          size='small'
          value={valueInput}
          onChange={onSearchValueChange}
          sx={{
            width: '99%'
          }}>

        </TextField>
        <IconButton
          onClick={handleSubmit} 
          size='small'
          sx={{
            left: '-45px',
          }}>
          <Search/>
          
        </IconButton>
        
      </Stack>
    
  {
    (firstView) ? <LineTimeComponent/> : null
  }

    </Grid>
  
  )
}
