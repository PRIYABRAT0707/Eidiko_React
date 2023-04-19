import { myAxios } from "../Server/MyAxios"



export const getProfileData=()=>{
   return myAxios.get(`employee/get-employee/${sessionStorage.getItem("id")}`).then((response) => response.data)
}