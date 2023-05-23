import React from 'react';
import Sidenav from '../components/Navside/Sidenav';
import { Box } from '@mui/material';
import DrawerHeader from '../components/Navside/DrawerHeader';

const Settings = () => {
  return (
    <>
      <Box sx={{display:"flex"}}>
        <Sidenav />
        {/* Right Section Component */}

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Settings</h1>
          <DrawerHeader />
        </Box>
      </Box>
    </>
  )
}

export default Settings;