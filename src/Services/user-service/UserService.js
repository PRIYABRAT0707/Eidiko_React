import { baseUrl } from "./baseUrl"
import axios from "axios"
import { Navigate, useNavigate } from "react-router"
import { myAxios } from "../../Server/MyAxios"

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

    shiftTimingsService:async function(weekOff,startDate,endDate,shiftStartTime,shiftEndTime){
        let data=null
       await myAxios.post("/employee/add-shift-timing",{
            "weekOff":weekOff,
            "startDate":startDate,
            "endDate":endDate,
            "shiftStartTime":shiftStartTime,
            "shiftEndTime":shiftEndTime

        }).then((result)=>{
         
            data=result}
       
        )
        return data

    },

    reportingManager: async function(manager){
        let data=null
        await myAxios.post("/employee/add-reporting-manager",manager).then((res)=>{
            data=res
            //console.log(res)
        })

        return data

    },

    changePassword:async function(empPassword){
        let data=null
        myAxios.post("/employee/change-password",empPassword).then((res)=>{
            data=res
        }) 
        return data

    }
    
   
    



}




export default userServiceModule
