import axios from 'axios';
const baseUrl = 'https://game-api-rsu3.onrender.com/loginRouter'

const register = async (username, password) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, {
      username, password
    });
    
    if (response.data === false) {
      console.log(response);
      throw new Error("Registration failed. Please check your input.");
    }

    console.log("You've registered Successfully");
    return response.data;
  } catch (error) {
    console.error(error);
    // You can choose to handle the error or rethrow it as needed
    throw error;
  }
};

const logIn = async (username, password) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, {
      username, password
    });
    console.log(response.data)
    if (response.data === false) {
      throw new Error("Log In failed. Please check your input.");
    }

    console.log("You've logged in Successfully");
    return response.data;
  } catch (error) {
    console.error(error);
    // You can choose to handle the error or rethrow it as needed
    throw error;
  }
}

export { register, logIn };