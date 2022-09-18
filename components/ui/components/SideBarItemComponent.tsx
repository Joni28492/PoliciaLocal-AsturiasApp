import React, { FC, useContext, useState } from 'react'
import NextLink from 'next/link';
import { UiContext } from '../../../context';
import {  ListItemIcon, ListItemText, ListItem, Link, Box, Divider} from '@mui/material'
import { v4 as uuid} from 'uuid';

import { ISideBarEntries } from '../../interfaces/ui';

import { ArrowDropDownIcon, ArrowDropUpIcon } from '../icons';

export const SideBarItemComponent:FC<ISideBarEntries> = ({href, Icon, primary, arrow, childrens=[], divider}:ISideBarEntries) => {

    const { toggleSideMenu } = useContext(UiContext)
    const [arrowToggle, setArrowToggle] = useState(arrow?.arrowPosition)

  return (
    <>
    {/* PrincipalItem */}
    <Box display='flex' flexDirection='row' alignItems='center'>
    <NextLink href={href} key={href}>
        <Link>
            <ListItem button onClick={toggleSideMenu}>    
            {
                (Icon) && <ListItemIcon>
                            <Icon />
                        </ListItemIcon>
            }
         
            <ListItemText primary={primary} />

            </ListItem>
        </Link>    
    </NextLink>    
    
    {
        (childrens?.length>0) &&
        <ArrowToggle arrow={arrow} arrowToggle={arrowToggle} setArrowToggle={setArrowToggle} />

    }



    </Box>

    {//SubItems
        (childrens && arrowToggle) && 
        <Box display='flex' flexDirection='column'>
            {
                childrens.map( ({href, Icon, primary, arrow, childrens, style, divider:subDivider})=>(
                    <SideBarItemComponent 
                        style={{
                            ...style,
                            // marginLeft: `${href.split('/').length*5}px`
                        }}
                        key={uuid()}
                        href = {href} 
                        Icon = {Icon} 
                        primary = {primary}
                        arrow = {arrow}
                        childrens = {childrens}
                        divider={subDivider}
                    />
                ))
            }
        </Box>   
    }
    {/* Todo configurar divider correctamente */}
    { (divider) && <Divider />}
    </>

  )
}


interface IArrowToggle {
    arrow: {arrowPosition: boolean;} | undefined;
    arrowToggle: boolean| undefined;
    setArrowToggle: React.Dispatch<React.SetStateAction<boolean | undefined>>
}
export const ArrowToggle = ({arrow, arrowToggle, setArrowToggle}:IArrowToggle) => {
  return (
    (arrow) && (!arrowToggle) 
    ?<div onClick={()=>setArrowToggle(!arrowToggle)}>
         <ArrowDropDownIcon />
     </ div> 
    :<div onClick={()=>setArrowToggle(!arrowToggle)}>
        <ArrowDropUpIcon />
     </ div> 
  )
}
