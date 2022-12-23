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
function InternalStateEx1() {

    const initRef = React.useRef()
    return (
      <Popover closeOnBlur={false} placement='right' initialFocusRef={initRef}>
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <Button color="white" cursor="pointer" bg="red" border="none" _hover="none"> Shipping & Returns</Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                
                <PopoverCloseButton />
                <PopoverBody>
                  <Box>
                     <div>
                        <h3>Shipping</h3>
                        <p>At checkout, we’ll provide you with an estimated delivery date for your order based on your shipping method. Standard shipping charges may apply based on the order value. AnthroPerks members enjoy free Standard Shipping on all orders $50+. Learn more about our shipping</p>
                     </div>

                     <div>
                        <h3>Returns</h3>
                        <p>Within 30 days of purchase, we accept returns for unworn, unwashed, and unaltered items. Items must be returned in original packaging with all tags attached. A refund will be issued to the original form of payment at the original selling price. If returned after 30 days, a merchandise credit will be issued for the original selling price.

For fast and free returns, find your local store. Prefer to return by mail? View our complete return policy</p>
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

  export {InternalStateEx1}