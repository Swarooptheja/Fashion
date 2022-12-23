import { failure, request, success } from "./Types"



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

export {Successdata,Failuredata,Reqdata}