import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Typography } from '@mui/material';

//informacion que se renderizara cuuando ingresen una guia.
export const LineTimeComponent = () => {
  return (
    <Timeline position='alternate'>
    <Grid item mt={10} >
      {/* cajita#1 */}
    <Typography textAlign="center" variant='h6' color='#00425A'>
      Ingreso
     </Typography>
    <TimelineItem> 
      <TimelineOppositeContent
      sx={{ m: 'auto 0'}}
      align='right'
      variant='body2'
      color='primary'
      >
        9:30 am
      </TimelineOppositeContent>
      <TimelineSeparator>
      <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
          <TimelineDot color="primary" variant="outlined">
            <FastfoodIcon />
          </TimelineDot>
      <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
      </TimelineSeparator>
      <TimelineContent  sx={{ py: '12px', px: 2 }} >
          <Typography variant='h6' component='span' >
            Eat
          </Typography>
          <Typography color='black' >Because you need strength</Typography>
      </TimelineContent>
  </TimelineItem>

    {/* cajita#2 */}
  <Typography mt={2} textAlign="center" variant='h6' color='#F99417'>
      Transporte 🚚
  </Typography>
  <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        variant="body2"
        color="primary"
      >
        10:00 am
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
          <TimelineDot color="primary" variant="outlined">
            <LaptopMacIcon  />
          </TimelineDot>
        <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          Code
        </Typography>
        <Typography color='black'>Because it&apos;s awesome!</Typography>
      </TimelineContent>
    </TimelineItem>

   {/* cajita#3 */}
    <Typography mt={2} textAlign="center" variant='h6' color='#3C84AB'>
      Entrega 👋
    </Typography>
    <TimelineItem>
    <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        variant="body2"
        color="primary"
      >
        10:00 am
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
        <TimelineDot color="primary" variant="outlined">
          <HotelIcon />
        </TimelineDot>
        <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography  variant="h6" component="span">
          Sleep
        </Typography>
        <Typography color='black'>Because you need rest</Typography>
      </TimelineContent>
    </TimelineItem>
    {/* cajita#4 */}
    <Typography mt={2} textAlign="center" variant='h6' color='#C92C6D'>
      Cumplido 👨🏾‍🤝‍👨🏻
    </Typography>
    <TimelineItem>
    <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        variant="body2"
        color="primary"
      >
        10:00 am
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
        <TimelineDot color="primary" variant="outlined">
          <RepeatIcon />
        </TimelineDot>
        <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          Repeat
        </Typography>
        <Typography color='black' >Because this is the life you love!</Typography>
      </TimelineContent>
    </TimelineItem>
  </Grid> 


  </Timeline>
  )
}
