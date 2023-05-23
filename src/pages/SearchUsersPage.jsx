import React, {useState} from 'react';
import Sidenav from '../components/Navside/Sidenav';
import { Avatar, Box } from '@mui/material';
import { TextField, Button, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Divider from '@mui/material/Divider';
import { DataGrid } from '@mui/x-data-grid';
import columnUsers from '../components/Table/ColumnTable';

const SearchUsers = () => {
  const [userName, setUserName] = useState('');
  const [userItems, setUserItems] = useState([]);
  const [showed, setShowed] = useState(false);
  
  // Caught information from forms

  function handleSubmit(event) {
      event.preventDefault();
      setShowed(true);
      uploadUser(userName);
  }

  
  const uploadUser = async () => {
    try {
      const users = await axios.get("https://api.github.com/search/users?q="+userName);
      // console.log(users.data.items);
      setUserItems(users.data.items);
      users.data.items.forEach(element => {
        element.username = element.login
      });
    } catch (error) {
      console.error(error);
    }
} 

  return (
    <>
    <Box sx={{display:"flex", p:5}}>
      
      <Sidenav />
      
      {/* Right Section Component */}

      <Box component="main" bgcolor={{backgroundColor:'#E9E9E9'}} sx={{ flexGrow: 1, p: 4,m:7, borderRadius:2 }}>
        
        {/* Header */}
        
        <div style={{backgroundColor:'#FFF', padding:30, borderRadius:20,boxShadow:'0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'}}>
        <Stack spacing={2} direction={"row"}  sx={{marginBottom:5, alignContent:'inherit'}}>
          <Avatar src={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'} />
          <h1 style={{marginTop: -4}}>search git user</h1>
        </Stack>

        {/* Form Component */}
        
        <form onSubmit={handleSubmit} style={{marginBottom:40}}>
                <Stack spacing={2} direction="row">
                    <TextField sx={{backgroundColor:'#FFF'}} variant='outlined' type="text" color='primary' label="First Name" onChange={e => setUserName(e.target.value)} value={userName} required/>
                  <Button variant="outlined" sx={{backgroundColor:'white'}} color="primary" type="submit"><SearchIcon /></Button>
                </Stack>
        </form>

        </div>

        {/* Datatable Component */}

        {showed ? (
          <>
            <Divider sx={{marginBottom:5}} />
            
            <div style={{ height: 400, width: '100%', borderRadius:30, backgroundColor:'#FFF', boxShadow:'0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'}}>
              <DataGrid
                rows={userItems}
                columns={columnUsers}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
            </div>
          </>
        ) : (
          <>
          </>
        )}
      </Box>
    </Box>
  </>
  )
}

export default SearchUsers;