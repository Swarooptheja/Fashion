import React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
import { useSelector } from "react-redux"
import { useState } from "react"
//   variantprice={{el.variant_price}} producttype={el.product_type}  actual_color={el. actual_color} size={el.size} brand={el.brand} title={el.title} 
function TransitionExample({ID,photo,variantprice,producttype,size,actual_color,brand,title}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let data=useSelector((state)=>{
      return state.mainArr
    })
    let [count,setcount]=useState(1)
    let localdata=JSON.parse(localStorage.getItem("alldata")) || []
    let addtobasket=()=>{
      let filterdata=data.filter((el)=>{
        return el.ID===ID
      })

      localdata.push(filterdata)
      localStorage.setItem("alldata",JSON.stringify(localdata))
      alert("product added to the cart succefully")
      setcount((count)=>count+1)

    }
    return (
      <>
        <Button color="white" cursor="pointer" bg="blue" border="none" _hover="none" onClick={onOpen}>ADD TO BASKET</Button>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Checkout</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               <div>
                <img width={170} src={photo} alt="" />
                <h5>Color:{actual_color}</h5>
                <h5>Brand:{brand}</h5>
                <h5>Price:{variantprice}</h5>
                <h5>Size:{size}</h5>
                <Button id="placeorder" disabled={count==2} color="white" cursor="pointer" bg="red" border="none" _hover="none" onClick={addtobasket}  >ADD TO BASKET</Button>
               </div>
              
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export{TransitionExample}