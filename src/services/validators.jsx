import Alert from '@mui/material/Alert';

const validateUsername = (username) =>{
    if(username === 'doublevpartners'){
        return(<Alert severity='warning'>No se encuentra disponible</Alert>)
    }
    else if (username !== 'doublevpartners'){
        return(<Alert security='info'>Usuario encontrado</Alert>)
    }

}

export default validateUsername;