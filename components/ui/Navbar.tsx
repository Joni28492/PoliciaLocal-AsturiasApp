import { AppBar, Toolbar, Link, Typography, Box, IconButton, Button } from "@mui/material"
import NextLink from 'next/link'
import { useContext } from "react"
import { UiContext } from "../../context"

export const Navbar = () => {

    const { toggleSideMenu } = useContext(UiContext);


    return (
        <AppBar >
            <Toolbar >
                <NextLink href='/' passHref>
                    <Link display='flex' alignItems='center'>
                        <Typography variant='h6'>Policia Local </Typography>

                    </Link>
                </NextLink>

                {/* todo flex */}
                <Box flex={1} />





                <Button onClick={toggleSideMenu}>Menú</Button>

            </Toolbar>
        </AppBar>

    )
}
