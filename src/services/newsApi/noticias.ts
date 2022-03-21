import { newsApi } from "./config";


export const getTopHeadLines = async ()=>{
    try {
        const response = await newsApi.get('/top-headlines?country=br');
        
        return response.data;
    } catch (error) {
        return {
            message: "Erro ao tentar receber dados da API"
        }
    }
}
export const getSportsNews = async ()=>{
    try {
        const response = await newsApi.get('/top-headlines?country=br&category=sports');
        
        return response.data;
    } catch (error) {
        return {
            message: "Erro ao tentar receber dados da API"
        }
    }
}
export const getEntretainNews = async ()=>{
    try {
        const response = await newsApi.get('/top-headlines?country=br&category=entertainment');
        
        return response.data;
    } catch (error) {
        return {
            message: "Erro ao tentar receber dados da API"
        }
    }
}
// export const getSpidermanPics = async ()=>{
//     try {
//         const response = await newsApi.get('/top-headlines?country=br&category=sports');
        
//         return response.data;
//     } catch (error) {
//         return {
//             message: "Erro ao tentar receber dados da API"
//         }
//     }
// }
export const getTechNews = async ()=>{
    try {
        const response = await newsApi.get('/top-headlines?country=br&category=technology');
        
        return response.data;
    } catch (error) {
        return {
            message: "Erro ao tentar receber dados da API"
        }
    }
}