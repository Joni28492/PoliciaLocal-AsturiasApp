import React from 'react'
import { Typography } from '@mui/material'
import { Infracciones } from '../../../components/Infracciones'
import { MainLayout } from '../../../components/layouts'
import { infraccionesRegArmas } from '../../../data/regArmas';


const index = () => {

  return (
    <MainLayout title='' pageDescription=''>

      <Typography variant='h2'>Definiciones</Typography>
   

        <Typography style={{ textAlign: 'center', marginBottom:2 }}  variant='h1'>Reglamento de Armas</Typography>
       
        <Infracciones 
          infracciones={infraccionesRegArmas}
        />
    </MainLayout>
  )
}

export default index