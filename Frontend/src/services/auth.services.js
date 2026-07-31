import api from "./api.services";


export const loginUserService = async function({email,password}){

    const response = await api.post('/auth/login',{email,password})
    return response.data
}