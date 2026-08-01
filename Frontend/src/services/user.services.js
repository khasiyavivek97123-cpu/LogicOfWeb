import api from './api.services.js'

export const getCurrentUser = async()=>{
    try {

        const response = await api.get('/user/me')
        return response.data

    } catch (error) {
        console.log(error)
        return error.response.data
    }
}