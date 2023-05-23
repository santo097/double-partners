import React, { useEffect,useState } from 'react';
import Sidenav from '../components/Navside/Sidenav';
import { Box, Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import {Stack} from '@mui/material';
import DrawerHeader from '../components/Navside/DrawerHeader';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SaveIcon from '@mui/icons-material/Save';
import { Button } from '@mui/material';

export const CardUser = () => {
  const [userName, setUserName] = useState({});
  const userId = useParams();
    useEffect(() => {
    const fetchData = async () => {
      const user = await axios.get('https://api.github.com/users/'+userId.id);
      setUserName(user.data);
    };
    fetchData();
  }, []);

  return (
    <Box sx={{display:"flex", p:5}}>
      <Sidenav />
        <Box component="main" bgcolor={{backgroundColor:'#E9E9E9'}} sx={{ flexGrow: 1, p: 4,m:7, borderRadius:2 }}>
        <div style={{backgroundColor:"#FFF", padding:'5%', borderRadius:15, boxShadow:'0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'}}>
          <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit'}}>
            <Avatar src={userName.avatar_url} sx={{width:'10%', height:'10%'}} />
            <h1 style={{marginTop: 30}}>{userName.name}</h1>
          </Stack>
          <Divider />
          <DrawerHeader />  
          
              <Box component="main"  sx={{ flexGrow: 1, borderRadius:2 }}>
                <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit', marginRight:'5%'}}>
                  <p style={{marginTop: -30}}><b>bio:</b> {userName.bio}</p>
                  {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                </Stack>
            </Box>

            <Divider />
            <DrawerHeader /> 

              <Box component="main"  sx={{ flexGrow: 1, borderRadius:2 }}>
                <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit', marginRight:'5%'}}>
                  <p style={{marginTop: -30}}><b>username:</b> {userName.login}</p>
                  {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                </Stack>

                <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit'}}>
                  <p style={{marginTop: -30}}><b>company:</b> {userName.company}</p>
                  {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                </Stack>

                <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit'}}>
                  <p style={{marginTop: -30}}><b>location: </b> {userName.location}</p>
                  {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                </Stack>

                <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit'}}>
                  <p style={{marginTop: -30}}><b>email: </b> {userName.email}</p>
                  {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                </Stack>

                <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit'}}>
                  <p style={{marginTop: -30}}><b>twitter user: </b> {userName.twitter_username}</p>
                  {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                </Stack>

                <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit'}}>
                  <p style={{marginTop: -30}}><b>repositories: </b> {userName.public_repos}</p>
                  {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                </Stack>

                <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit'}}>
                  <p style={{marginTop: -30}}><b>repositories: </b> {userName.public_repos}</p>
                  {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                </Stack>

                <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit'}}>
                  <p style={{marginTop: -30}}><b>followers: </b> {userName.followers}</p>
                  {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                </Stack>

                <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit'}}>
                  <p style={{marginTop: -30}}><b>following: </b> {userName.following}</p>
                  {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                </Stack>
            </Box>

            <Button onClick={() =>{console.log(userName)}} variant="outlined" > Exportar excel <SaveIcon /></Button>
          </div>
        </Box>
        
    </Box>
  )
}
