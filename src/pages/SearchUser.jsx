import React from 'react';
import Sidenav from '../components/Navside/Sidenav';
import { Avatar, Box } from '@mui/material';
import DrawerHeader from '../components/Navside/DrawerHeader';
import {Stack} from '@mui/material';

export const SearchUser = () => {
  return (
    <Box sx={{display:"flex"}}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Stack spacing={2} direction={"row"}  sx={{marginBottom:5, alignContent:'inherit'}}>
          <Avatar src={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'} />
          <h1 style={{marginTop: -4}}>search git user</h1>
        </Stack>
        <DrawerHeader />
        </Box>
    </Box>
  )
}
