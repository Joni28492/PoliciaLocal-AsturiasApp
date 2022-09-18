import { Typography, Box } from '@mui/material'

import React from 'react'
import { MainLayout } from '../components/layouts'

const NotFoundPage = () => {
    return (
        <MainLayout title='Pagina no encontrada' pageDescription='Pagina no encontrada'>
        <Box display='flex' alignItems='center' justifyContent='center' mt='450px'>
         
            <Typography  variant='h3'>Not Found 404</Typography>
        </Box>


        </MainLayout>
    )
}

export default NotFoundPage