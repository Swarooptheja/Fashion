import { failure, login, request, success } from "./Types"

import axios from "axios"
import { Login } from "./Login"

let Successdata=(payload)=>{
    return{
        type:success,
        payload
    }
}

let Failuredata=()=>{
    return{
        type:failure,
        
    }
}

let Reqdata=()=>{
    return {
        type:request
    }
}

let Loginsuccess=(payload)=>{
    return {
        type:login,
        payload
    }
}

let getdata=(payload)=>(dispatch)=>{
    axios.post("https://reqres.in/api/login",payload)
    .then((res)=>{
        console.log(res.data)
        dispatch(Loginsuccess(res.data))
    })
}

export {Successdata,Failuredata,Reqdata,getdata}