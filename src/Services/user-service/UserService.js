import { baseUrl } from "./baseUrl"
import axios from "axios"
import { Navigate, useNavigate } from "react-router"

const userServiceModule= {

    logService: async function(employeeId,password){
       
        let data=null;

      await axios.post(`${baseUrl}/auth/login`,{
            username:employeeId,
            password:password
        }).then((result)=>{
            sessionStorage.setItem("token",result.data.token)
            sessionStorage.setItem("id",employeeId)
            data=result
        })
        return data
    },

    // forgotpassword service starts here

     forgotPasswordService : async function(employeeId3){
        let data=null;
    
     await axios.post(`${baseUrl}/auth/forgot-password?username=${employeeId3}`).then((result)=> {
        data=result
     }
       )
    return data
    },
    // forgotpassword service ends here
    
    isLogedin: function(){
        if(!sessionStorage.getItem("token")){
            return false
        }
        return true
    },
    
   
    



}




export default userServiceModule
