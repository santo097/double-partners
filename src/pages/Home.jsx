import React from 'react'
import Sidenav from '../components/Navside/Sidenav';
import { Avatar, Box } from '@mui/material';
import {  Stack } from '@mui/material';

const Home = () => {
  return (
    <>
      <Box sx={{display:"flex",justifyContent: 'center', p:5, width:'70%', alignItems: 'center'}}>
        <Sidenav />
        
        {/* Right Section Component */}

        <Box component="main" bgcolor={{backgroundColor:'#E9E9E9'}} sx={{ flexGrow: 1, p: 4,m:7, borderRadius:2 }}>
        <div style={{backgroundColor:'#FFF', marginBottom:'5%',padding:30, borderRadius:20, boxShadow:'0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'}}>
            <Stack spacing={4} direction={"row"}  sx={{marginBottom:5, alignContent:'inherit'}}>
              <Avatar sx={{width:80, height:80}} src={'https://www.kindpng.com/picc/m/430-4305597_design-animated-owl-png-transparent-cartoons-design-animated.png'} />
              <h1 style={{marginTop: 12}}>Welcome!</h1>
            </Stack>
        </div>
        </Box>
      </Box>
    </>
  )
}

export default Home;