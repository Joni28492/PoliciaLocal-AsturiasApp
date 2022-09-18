import React from 'react'
import { Typography } from '@mui/material'

import { MainLayout } from '../../../../components/layouts'

import { Infracciones } from '../../../../components/Infracciones'
import { infraccionesAnimales } from '../../../../data/animales'


const index = () => {
  return (
    <MainLayout title='' pageDescription=''>
    <Typography style={{ textAlign: 'center', marginBottom:2 }}  variant='h1'>Alcohol 4/2015</Typography>
    <Infracciones 
      infracciones={infraccionesAnimales}
    />
</MainLayout>
  )
}

export default index