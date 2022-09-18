import { Grid, Typography } from '@mui/material'
import React, { FC } from 'react'



interface Props {
  key:string;
  value:string;
}

export const Definicion:FC<Props> = ({key, value}:Props) => {

    // console.log(key)
  return (
    
        <Grid item>
            <Typography variant='h4'>{key}</Typography>
            <Typography variant='body1'>{value}</Typography>

        </Grid>
    
  )
}
