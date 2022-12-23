import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export const Authorization = ({children}) => {
    let isAuth=useSelector((state)=>{
        return state.isAuth
    })
    let location=useLocation()
    if(!isAuth){
        return <Navigate to="/login" state={{from:location.pathname}} replace={true} />
    }
  return  children
}
