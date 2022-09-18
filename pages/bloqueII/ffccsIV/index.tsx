import React from 'react'
import { Typography } from '@mui/material'
import { Infracciones } from '../../../components/Infracciones'
import { MainLayout } from '../../../components/layouts'
import { regDisciplinarioInfracciones } from '../../../data/regDisciplinario'

const index = () => {
  return (
    <MainLayout title='' pageDescription=''>
        <Typography style={{ textAlign: 'center', marginBottom:2 }}  variant='h1'>Regimen disciplinarion 4/2010</Typography>
       
        <Infracciones 
          infracciones={regDisciplinarioInfracciones}
        />
    </MainLayout>
  )
}

export default index