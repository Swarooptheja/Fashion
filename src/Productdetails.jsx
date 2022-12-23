import React from "react"

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    Portal,
    Box
  } from '@chakra-ui/react'
function InternalStateEx(props) {
let {size,title,brand, actual_color}=props
    const initRef = React.useRef()
    return (
      <Popover closeOnBlur={false} placement='right' initialFocusRef={initRef}>
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <Button color="white" cursor="pointer" bg="red" border="none" _hover="none" > Product Details</Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverHeader>
                    <h4>
                    Style No. 80499536  Color:{ actual_color}
                    </h4>
                    </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <Box>
                  <div>
                    <h4>Product Type: {title}</h4>
                    </div>
                  <div>
                    <h4>
                    Brand : {brand}
                    </h4>
                  </div>
                  <div>
                    <h4>
                    size : {size}
                    </h4>
                  </div>
                  </Box>
                  <Button
                    mt={4}
                    colorScheme='red'
                    onClick={onClose}
                    ref={initRef}
                  >
                    Close
                  </Button>
                </PopoverBody>
                <PopoverFooter></PopoverFooter>
              </PopoverContent>
            </Portal>
          </>
        )}
      </Popover>
    )
  }

  export {InternalStateEx}