import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import "./Navbar.css"
import {BsFillCartFill} from "react-icons/bs"
import { HamburgerIcon, CloseIcon, AddIcon,DownloadIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const Links = ['Home','Products', 'Login', 'Signup'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Box>
    <Link
    // px={2}
    // py={1}
    // rounded={'md'}
    // _hover={{
    //   textDecoration: 'none',
    //   bg: useColorModeValue('gray.200', 'gray.700'),
    // }}
    // href={'#'}
   
    >
    {children}
  </Link>
  {/* <Link href='#aboutme'>{children}</Link> */}
  </Box>
  
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navigate=useNavigate()
  let handlecart=()=>{
    navigate("/cartpage")
  }
  return (
    <div id='navbarmain'>
      <Box bg={useColorModeValue('gray.600', 'gray.100')}   px={4}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'lg'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon  />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            // color={"black"}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <BsFillCartFill color='white' size={39} onClick={handlecart} />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
             
             <button className='btng'>
              <a id='a' href="/">Home</a>
             </button>
             <button className='btng'>
              <a id='a' href="/main">Products</a>
             </button>
             <button className='btng'>
              <a id='a' href="/login">Login</a>
             </button>
             <button className='btng'>
              <a id='a' href="/signup">Signup</a>
             </button>
            
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {/* <Button
              variant={'solid'}
              color="white"
              backgroundColor="blue"
              _hover={"none"}
              size={'lg'}
              border={'none'}
              borderRadius={'10'}
              mr={4}
              rightIcon={<DownloadIcon />}>
                 <a style={{textDecoration:"none"}} href="https://drive.google.com/file/d/1NDlDVTUhEjf4quPFjS6bshmHNXHNkq0d/view?usp=sharing" download="Thejaswaroop.pdf" className='btnnavbar'  target="_blank">Download</a>
             
            </Button> */}
            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu> */}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'}>
            <button className='btnn'>
              <a id='a' href="/">Home</a>
             </button>
             <button className='btnn'>
              <a id='a' href="/main">Products</a>
             </button>
             <button className='btnn'>
              <a id='a' href="/login">Login</a>
             </button>
             <button className='btnn'>
              <a id='a' href="/signup">Signup</a>
             </button>
            
              

            </Stack>
          </Box>
        ) : null}
      </Box>

  </div>
  );
}

// export default Navbar