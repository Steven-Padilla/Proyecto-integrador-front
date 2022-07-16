import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001"
  });



export const getUser=async(uname,pass)=>{
    const reponse= await api.post('/user/'+uname,{
      password:pass
    }).then (function(response){
      if (response.status!==200){
        return (false)
      }else{
        const user=response.data
        return  (user)
      }
        
    })

    return reponse
}