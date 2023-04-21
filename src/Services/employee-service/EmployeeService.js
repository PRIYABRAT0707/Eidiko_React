import { myAxios } from "../../Server/MyAxios"

export const createEmployee = (employee) => {
    console.log(employee)
    return myAxios.post(`employee/create`,employee).then((response) => response.data)
}