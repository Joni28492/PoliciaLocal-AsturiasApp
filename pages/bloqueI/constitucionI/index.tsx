import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Divider } from '@mui/material'

import React from 'react'
import { MainLayout } from '../../../components/layouts'
import { fechasConstitucion } from '../../../data/constitucion'

import { v4 as uuid} from 'uuid';

const index = () => {
  return (
    <MainLayout title='Constitución I' pageDescription='Bloque I - Tema I - Constitucion I'>
    <h1 style={{textAlign:'center'}}>Constitucion I</h1>
    <Divider />

    <h3 style={{textAlign:'center'}}>Fechas Importantes</h3>

    {/* <Box  display='flex' justify-content="space-evenly" > */}
      <Grid container display='flex' justify-content="center" alignItems='center'>
    {
      fechasConstitucion.map(({desc, date, img, more})=>(
        <Grid item key={uuid()} xs={12} sm={6} md={3} sx={{mt:2}}>
        <Card  sx={{ maxWidth: 345, ml:'15px' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={img}
              alt={desc}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">{date}</Typography>
              <Typography variant="body1" color="text.secondary">{desc}</Typography>
              {(more)&& <Typography variant="body2" color="text.secondary">{more}</Typography>}
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
      ))
    }

    </Grid>
     {/* </Box> */}
    

    </MainLayout>
  )
}

export default index