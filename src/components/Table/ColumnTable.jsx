import React from 'react';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { Link } from 'react-router-dom';

// Columns name

const columnUsers = [
  {field:'id', headerName:'ID', width:70, align: 'center'},
  {field:'avatar_url', headerName:'Avatar', width:70,
    renderCell: (params) =>{

      return(
        <>
          <Avatar src={params.value} />
        </>
      );
    }},
  {field:'username',headerName:'Username',width:150},
  {field:'html_url',headerName:'Site page', width:100,
    renderCell:(params) =>{
    return(
      <>
        <Button href={params.value}><GitHubIcon /></Button>
      </>
    );
  }},
  {field:'login',headerName:'Profile', width:100,
    renderCell:(params) =>{
      return(      
      <>
        <div>
          <Link to={"/user/"+params.value}><Button ><PersonSearchIcon /></Button></Link>
        </div>
      </>);
  }},
];

export default columnUsers;