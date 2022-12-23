import React from 'react'
import "./Login.css"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    Text,
    useDisclosure,
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    InputGroup,
    InputRightElement
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
export const Login = () => {
    let initdata={
        email:'',
        password:''
    }
    let [states,setstates]=useState(initdata)
    let handlechange=(e)=>{
        let {value,name}=e.target
        setstates({
            ...states,
            [name]:value
        })
    }
    let dispatch=useDispatch()
    let handlesubmit=()=>{
        let payload={
            email:states.email,
            password:states.password
        }
        
       
    }
    // console.log(states)


    useEffect(()=>{

    },[states])
    let isError=states.email===""
   let ispassword=states.password===""
   const [show, setShow] = React.useState(false)
   const handleClick = () => setShow(!show)
  return (
    <>
      <div id='loginmain'>
      <FormControl isInvalid={isError}>
      {/* <FormLabel>Email</FormLabel> */}
      <Input type='email' placeholder='Enter your email here'  name="email" value={states.email} onChange={handlechange} />
      {!isError ? (
        <FormHelperText>
         
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
    <FormControl isInvalid={ispassword}>
      <InputGroup size="md">
      <Input type={show ? 'text' : 'password'}
 placeholder='Enter your password here' name="password" value={states.password} onChange={handlechange} />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    
      {!ispassword ? (
        <FormHelperText>
         
        </FormHelperText>
      ) : (
        <FormErrorMessage>Password is required.</FormErrorMessage>
      )}
      </InputGroup>
    </FormControl>

    <button id='submitbtn' onClick={handlesubmit} disabled={isError==true || ispassword==true} >Submit</button>
        </div>   
    </>
  )
}
