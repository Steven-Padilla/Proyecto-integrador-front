import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/api"
  });


export const getDatos= async()=>{
  const response=await api.get('/datos')

  return response;
}

export const getUser = async (uname, pass) => {
  const response = await api.post('/user/' + uname, {
    password: pass
  })

  if (response.status !== 200) {
    return (false)
  } else {
    const user = response.data
    return (user)
  }


}