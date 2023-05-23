import axios from "axios";

export const uploadUser = async (userName) => {
    try {
      const user = await axios.get('https://api.github.com/users/'+userName);
      return user.data;
    } catch (error) {
      console.error(error);
    }
  } 

export const uploadUsers = async (userName) => {
    try {
      const users = await axios.get("https://api.github.com/search/users?q="+userName);
      users.data.items.forEach(element => {
        element.username = element.login
      });
      return users.data;
    } catch (error) {
      console.error(error);
    }
} 