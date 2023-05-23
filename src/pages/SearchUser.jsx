import React, {useState} from 'react';
import Sidenav from '../components/Navside/Sidenav';
import { Avatar, Box, Divider } from '@mui/material';
import { TextField, Button, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import axios from 'axios';
import SaveIcon from '@mui/icons-material/Save';
import DrawerHeader from '../components/Navside/DrawerHeader';
import { validateUsername, validateLength, validateData } from '../services/validators';
import { uploadUser  } from '../services/userService';
import Swal from 'sweetalert2';

export const SearchUser = () => {
  const [userName, setUserName] = useState('');
  const [userItems, setUserItems] = useState({});
  const [showed, setShowed] = useState(false);

async function handleSubmit(event) {
    event.preventDefault();
    

    if(validateLength(userName)){
      return Swal.fire({
        title: 'Error!',
        text: 'Requires minimum 4 characters to search users',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
    else{
      if(validateUsername(userName)){
        return Swal.fire({
          title: 'Error!',
          text: 'No disponible',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
      else{
          const infouser = await uploadUser(userName);
          if(validateData(infouser)){
            return Swal.fire({
              title: 'Error!',
              text: 'No data',
              icon: 'error',
              confirmButtonText: 'Cool'
            })
          }
          else{
            setUserItems(infouser);
            setShowed(true);
          }

      }
    }
}

  return (
    <>
      <Box sx={{display:"flex",justifyContent: 'center', p:5, width:'70%', alignItems: 'center'}}>
          <Sidenav />
          
          <Box component="main" bgcolor={{backgroundColor:'#E9E9E9'}} sx={{ flexGrow: 1, p: 4,m:7, borderRadius:2 }}>
          
          <div style={{backgroundColor:'#FFF',padding:30, borderRadius:20, boxShadow:'0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'}}>
            <Stack spacing={2} direction={"row"}  sx={{marginBottom:5, alignContent:'inherit'}}>
              <Avatar src={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'} />
              <h1 style={{marginTop: -4}}>search git user</h1>
            </Stack>

            {/* Form Component */}
              
            <form onSubmit={handleSubmit} style={{marginBottom:40}}>
                    <Stack spacing={2} direction="row">
                        <TextField sx={{backgroundColor:'#FFF'}} variant='outlined' type="text" color='primary' label="User" onChange={e => setUserName(e.target.value)} value={userName} required/>
                      <Button variant="outlined" sx={{backgroundColor:'white'}} color="primary" type="submit"><SearchIcon /></Button>
                    </Stack>
            </form>
            </div>
            

            {/* User Component */}

            {showed ? (
            <>
              <DrawerHeader />  
              <div style={{backgroundColor:"#FFF", padding:'5%', borderRadius:15, boxShadow:'0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'}}>
                <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit'}}>
                  <Avatar src={userItems.avatar_url} sx={{width:'10%', height:'10%'}} />
                  <h1 style={{marginTop: 30}}>{userItems.name}</h1>
                </Stack>
                <Divider />
                <DrawerHeader />  
          
                <Box component="main"  sx={{ flexGrow: 1, borderRadius:2 }}>
                  <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit', marginRight:'5%'}}>
                    <p style={{marginTop: -30}}><b>bio:</b> {userItems.bio}</p>
                    {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                  </Stack>
                </Box>

                <Divider />
                <DrawerHeader /> 

                <Box component="main"  sx={{ flexGrow: 1, borderRadius:2 }}>
                  <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit', marginRight:'5%'}}>
                    <p style={{marginTop: -30}}><b>username:</b> {userItems.login}</p>
                    {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                  </Stack>

                  <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit'}}>
                    <p style={{marginTop: -30}}><b>company:</b> {userItems.company}</p>
                    {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                  </Stack>

                  <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit'}}>
                    <p style={{marginTop: -30}}><b>location: </b> {userItems.location}</p>
                    {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                  </Stack>

                  <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit'}}>
                    <p style={{marginTop: -30}}><b>email: </b> {userItems.email}</p>
                    {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                  </Stack>

                  <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit'}}>
                    <p style={{marginTop: -30}}><b>twitter user: </b> {userItems.twitter_username}</p>
                    {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                  </Stack>

                  <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit'}}>
                    <p style={{marginTop: -30}}><b>repositories: </b> {userItems.public_repos}</p>
                    {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                  </Stack>

                  <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit'}}>
                    <p style={{marginTop: -30}}><b>repositories: </b> {userItems.public_repos}</p>
                    {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                  </Stack>

                  <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit'}}>
                    <p style={{marginTop: -30}}><b>followers: </b> {userItems.followers}</p>
                    {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                  </Stack>

                  <Stack spacing={2} direction={"row"}  sx={{marginBottom:2, alignContent:'inherit'}}>
                    <p style={{marginTop: -30}}><b>following: </b> {userItems.following}</p>
                    {/* <Button href={userName.html_url}><GitHubIcon /></Button> */}
                  </Stack>
              </Box>

              <Button onClick={() =>{console.log(userItems)}} variant="outlined" > Exportar excel <SaveIcon /></Button>
          </div>
            </>
          ) : ( <></>)}
          </Box>
      </Box>
    </>
  );
}
