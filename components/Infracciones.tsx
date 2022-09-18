import React, { FC, useState } from 'react'
import {  Grid, Typography, Box, Button, Card, CardMedia,  } from '@mui/material';
import { 
  ISegCiudadana,
  IRegDisciplinario,
  ISegVial,
  ILepar,
  IAlcohol,
  IAnimales,
  IRegArmas
 } from './interfaces/infracciones';
import { useGraduation } from './hooks/useGraduation';

type TInfracciones = ISegCiudadana | IRegDisciplinario | ISegVial | ILepar | IAlcohol | IAnimales | IRegArmas

interface Props {
    infracciones: TInfracciones []
}


//todo prescripcion sancion y cancelacion
export const Infracciones:FC<Props> = ({infracciones}:Props) => {

    const {handleGraduaciones, graduaciones, colorsGraduation,} = useGraduation()


  return (
    <Grid container alignItems='center' justifyContent='center' textAlign='center' sx={{mt: 2}}>
        
          <Grid item 
            // sx={{position:'sticky', top: 70}}
          >

            <Button onClick={()=>handleGraduaciones('Leves')} sx={{fontSize: '32px'}}  variant='text' size='large' color='success'>Leves</Button>
            <Button onClick={()=>handleGraduaciones('Graves')} sx={{fontSize: '32px'}}  variant='text' size='large' color='warning'>Graves</Button>
            <Button onClick={()=>handleGraduaciones('Muy Graves')} sx={{fontSize: '32px'}}  variant='text' size='large' color='error'>Muy Graves</Button>

          </Grid>

          <Grid container justifyContent='center' alignItems='center'   >
            
              {
                infracciones.filter((i)=> graduaciones.includes(i.graduation)).map((
                  
                  { apartado,
                    description, 
                    graduation, 
                    imgs=[],
                  }, i)=>(

                <Grid key={i} item 
               
                sx={{
                    m:4, p:2,
                    border:`1px solid ${colorsGraduation[graduation]}`,
                    borderRadius:'15px', 
                    width:'450px', 
                    height: 'auto', 
                    overflow: 'hidden',
                    flexWrap: 'wrap',
                  }}
                >
                  <Box display='flex' >
                    <Box display="flex" flexDirection='column' >
                    <Typography variant='h5' 
                                sx={{
                                  borderRadius: '10px',
                                  fontSize:'25px', 
                                  fontWeight:600, 
                                  backgroundColor:`${colorsGraduation[graduation]}`, 
                                  mr:2, p:4, 
                                  height: '100px',
                                  width:'100px'

                                }}>
                        {
                          (graduation === 'Leves') ? 'L': 
                          (graduation === 'Graves') ? 'G': 'MG'
                        }
                      
                      </Typography>
                    
                      
                        {
                          (imgs!.length !==0) &&
                      
                          <Card sx={{mt:2, w:'200px'}}>
                          <CardMedia
                            component="img"
                            image={imgs[0]}
                            // alt={description}
                          />
                          </Card>
                        
                        }
                      
                      </Box>
                          

                    <Typography> {apartado}.- {description} </Typography>  
                  </Box>
                </Grid> 
                ))
              }

             

          
          </Grid>
        


        </Grid>
  )
}
