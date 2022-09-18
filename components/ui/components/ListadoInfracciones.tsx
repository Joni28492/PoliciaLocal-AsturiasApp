import { List, Box, ListItem } from '@mui/material'
import React, { FC } from 'react'
import { I_Infracciones } from '../../interfaces/infracciones'




export const ListadoInfracciones:FC<I_Infracciones> = ({desc, graduation}:I_Infracciones) => {



  return (
    <Box>
      <List>
        
      </List>
    </Box>
  )
}


// const InfraccionItem = ({desc, graduation}:I_Infracciones) => {
//   return (
//     <ListItem sx={{
//       bg:
//       `${(graduation === 'Leve') ? 'green':
//           (graduation === 'Grave') ? 'yellow':'red'}` 
//       }}>
//       {desc}
//     </ListItem>
//   )
// }
