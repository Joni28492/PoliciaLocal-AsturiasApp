import {   Typography } from '@mui/material';
import { Infracciones } from '../../../components/Infracciones';
import { MainLayout } from '../../../components/layouts'
import { infracionesSeguridadCiudadana } from '../../../data/seguridadCiudadana';





const index = () => {

  return (
    <MainLayout title='' pageDescription=''>
        <Typography style={{ textAlign: 'center', marginBottom:2 }}  variant='h1'>Seguridad Ciudadana</Typography>
       
        <Infracciones 
          infracciones={infracionesSeguridadCiudadana}
        />
        
    
    </MainLayout>
  )
}

export default index




