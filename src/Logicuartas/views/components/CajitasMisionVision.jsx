import { experimentalStyled as styled } from '@mui/material/styles';
import {  Grid, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system";

//componente para mision y vision.
export const CajitasMisionVision = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));


  return (
   
    <Box  mt={15}  sx={{ flexFlow: 1,  }}>

        <Grid
       
        container
        spacing={{ xs: 2, md: 3}}
        columns={{ xs:4, sm:8, md: 12}}
        >
            <Grid  item xs={12}  md={4} >
            <Item style={{
                backgroundColor:'#10004F'
                }}>
                <Typography variant='h5' color='white'>Misión</Typography>
            </Item>
            <Grid item xs={12} style={{
                 backgroundColor: '#D3EBCD', 
                 padding: '30px', 
                 borderRadius: '5px',}}
                 >
                    <Typography margin={5} color='black' textAlign='center' >
                    ENTREGAR ENVIOS Y MERCANCIA  EN EL MENOR 
                    TIEMPO POSIBLE.
                    </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12}  md={4} >
            <Item style={{
                backgroundColor:'#10004F'
                }}>
                <Typography variant='h5' color='white'>Visión</Typography>
            </Item>
            <Grid item xs={12} style={{ 
                backgroundColor: '#D3EBCD', 
                padding: '30px', 
                borderRadius: '5px'}}
                >
                    <Typography margin={5} color='black' textAlign='center' >
                     INTEGRAR TODOS LOS 
                    REQUISITOS LEGALES DE CLIENTES Y ALIADOS.
                    </Typography>
            </Grid>
            </Grid>
            
          <Grid item xs={12} md={4} >

            <Item style={{
                backgroundColor:'#10004F'
                }}>
                <Typography variant='h5' color='white'>Valores</Typography>
            </Item>

            <Grid item xs={12} style={{ 
                backgroundColor: '#D3EBCD', 
                padding: '30px', 
                borderRadius: '5px'}}
                >
                    <Typography margin={5} color='black' textAlign='center' >
                    RESPONSABILIDAD, TOLERANCIA, COMPROMISO Y RESPETO
                    </Typography>
            </Grid>
          </Grid>
        </Grid>
    </Box>
   
  )
}
