// Validate length users

export const validateLength = (userName) =>{
    if(userName.length < 4){
        return true;
    }
}

// Validate the doublevpartners user

export const validateUsername = (userName) =>{
        if(userName === 'doublevpartners'){
            return true;
        }
        else{
            return false;
        }
}

// Validate undefined data

export const validateData = (infouser) =>{
    if(infouser === undefined){
        return true;
    }
    else{
        return false;
    }
}