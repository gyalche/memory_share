import * as api from "../api/index.js";

//Action creatores;
export const getPosts = ()=>async(dispatch)=>{

    try {
        const {data}= await api.fetchPost();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message)
    }
    
}

export const createPost=(post)=>async(dispatch)=>{
    try {
        const {data}= await api.createPost(post);
        dispatch({type:'CREATE', payload:data})
    } catch (error) {
        console.log("unable to createPost")
    }
}

