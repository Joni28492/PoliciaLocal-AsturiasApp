import React, {  useContext } from 'react';
import { UiContext } from '../../context';

import { Drawer, Box,  List } from '@mui/material'
import { ISideBarEntries } from '../interfaces/ui';
import { SideBarItemComponent } from './components/SideBarItemComponent';

import { v4 as uuid} from 'uuid';
import { sideBarEntries } from './data/sideBarRoutes';




export const SideBar = () => {

    const { isMenuOpen, toggleSideMenu } = useContext(UiContext)

    return (
        <Drawer
            open={isMenuOpen}
            onClose={toggleSideMenu}
            anchor='left'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        >
            <Box sx={{ width: 280, pt: 5, display:'flex', flexDirection: 'flex-wrap' }}  >

                <List>

                    {
                        sideBarEntries.map(({href, Icon, primary, arrow, childrens }:ISideBarEntries)=>(
                            <SideBarItemComponent 
                                key={uuid()}
                                href = {href} 
                                Icon = {Icon} 
                                primary = {primary}
                                arrow = {arrow}
                                childrens = {childrens}
                            />
                           
                        ))
                    }

                   

                </List>
            </Box>

        </Drawer>
    )
}











//BAse Anterior al map, solo los bloques
 {/* <NextLink href='/bloqueI'>
                        <Link>
                        <ListItem button onClick={toggleSideMenu}>    
                              
                                    <ListItemIcon>
                                        <BookOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'Bloque I'} />
                           
                                <ArrowDropDownIcon />

                        </ListItem>
                        </Link>    
                    </NextLink>
                  

                    <NextLink href='/bloqueII'>
                        <Link>
                    <ListItem button  onClick={toggleSideMenu}>
                        <ListItemIcon>
                            <LocalPoliceOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Bloque II'} />
                        <ArrowDropDownIcon />
                        
                    </ListItem>
                    </Link>    
                    </NextLink>

                    <NextLink href='/bloqueIII'>
                        <Link>
                    <ListItem button  onClick={toggleSideMenu}>
                        <ListItemIcon>
                            <EditRoadOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Bloque III'} />
                        <ArrowDropDownIcon />
                        
                    </ListItem>
                    </Link>    
                    </NextLink>


                    <NextLink href='/bloqueIV'>
                        <Link>
                    <ListItem button onClick={toggleSideMenu}>
                        <ListItemIcon>
                            <GavelOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Bloque IV'} />
                        <ArrowDropDownIcon />
                        
                    </ListItem>
                    </Link>    
                    </NextLink> */}



// <NextLink href={href} key={href}>
    //     <Link>
    //     <ListItem button onClick={toggleSideMenu}>    
            
    //             {
    //                 (Icon) && <ListItemIcon>
    //                             <Icon />
    //                         </ListItemIcon>
    //             }
    //             <ListItemText primary={primary} />

    //     {
    //         (arrow) && <ArrowDropDownIcon />
    //     }

    //     </ListItem>
    //     </Link>    
    // </NextLink>