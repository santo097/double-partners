import React, {useState} from 'react';
import Sidenav from '../components/Navside/Sidenav';
import { Avatar, Box } from '@mui/material';
import { TextField, Button, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import { DataGrid } from '@mui/x-data-grid';
import columnUsers from '../components/Table/ColumnTable';
import { validateUsername, validateLength } from '../services/validators';
import Swal from 'sweetalert2';
import { uploadUsers } from '../services/userService';

const SearchUsers = () => {
  const [userName, setUserName] = useState('');
  const [userItems, setUserItems] = useState({});
  const [showed, setShowed] = useState(false);
  
  // Caught information from forms

async  function handleSubmit(event) {
      event.preventDefault();
      if(validateLength(userName)){
        return Swal.fire({
          title: 'Error!',
          text: 'Requires minimum 4 characters to search users',
          icon: 'error',
          confirmButtonText: 'Cool'
        });
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
            const infouser = await uploadUsers(userName);
            if(infouser.total_count <= 0){
              return Swal.fire({
                title: 'Error!',
                text: 'No data',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
            }
            else{
              setUserItems(infouser.items);
              setShowed(true);
            }
        }
      }

  }

  return (
    <>
    <Box sx={{display:"flex",justifyContent: 'center', alignItems: 'center', p:5,width:'70%'}}>
      
      <Sidenav />
      
      {/* Right Section Component */}

      <Box component="main" bgcolor={{backgroundColor:'#E9E9E9'}} sx={{ flexGrow: 1, p: 4,m:7, borderRadius:2 }}>
        
        {/* Header */}
        
        <div style={{backgroundColor:'#FFF', padding:30, borderRadius:20,boxShadow:'0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'}}>
        <Stack spacing={2} direction={"row"}  sx={{marginBottom:5, alignContent:'inherit'}}>
          <Avatar src={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'} />
          <h1 style={{marginTop: -4}}>search users</h1>
        </Stack>

        {/* Form Component */}
        
        <form onSubmit={handleSubmit} style={{marginBottom:40}}>
                <Stack spacing={2} direction="row">
                    <TextField sx={{backgroundColor:'#FFF'}} variant='outlined' type="text" color='primary' label="User" onChange={e => setUserName(e.target.value)} value={userName} required/>
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
  );
}

export default SearchUsers;