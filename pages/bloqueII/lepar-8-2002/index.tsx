import React from 'react'
import {   Typography } from '@mui/material';
import { Infracciones } from '../../../components/Infracciones';
import { MainLayout } from '../../../components/layouts';
import { infraccionesLeparData } from '../../../data/lepar';


const index = () => {
  return (
    <MainLayout title='' pageDescription=''>
    <Typography style={{ textAlign: 'center', marginBottom:2 }}  variant='h1'>Ley Espectaculos publicos</Typography>
   
    <Infracciones 
      infracciones={infraccionesLeparData}
    />
    

    </MainLayout>
  )
}

export default index