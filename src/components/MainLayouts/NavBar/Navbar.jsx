import React from 'react'
import { useNavigate } from 'react-router-dom';

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react'

import { IoMenu } from "react-icons/io5";

import Css from './navbar.module.css'


const Navbar = () => {
    const navigate = useNavigate();

    const aboutNev = () => {
        navigate('/about')
    }

    const contactNev = () => {
        navigate('/contact')
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <div className={Css.Navbar}>
                <h3>Study Abroad</h3>
                <div className={Css.List}>
                    <ul>
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={aboutNev}>About Us</li>
                        <li onClick={contactNev}>Contact</li>
                    </ul>
                </div>
                <div className={Css.btn_box}>
                    <button className={`${Css.btn} ${Css.Loginbtn}`} onClick={() => navigate('/login')}>Login</button>
                    <button className={Css.btn} onClick={() => navigate('/signup')}>Sign Up</button>
                </div>
                <Button ref={btnRef} colorScheme='teal' onClick={onOpen} className={Css.Menu}>
                    <IoMenu />
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <div className={Css.MenuList}>
                                <ul>
                                    <li onClick={() => navigate('/')}>Home</li>
                                    <li onClick={aboutNev}>About Us</li>
                                    <li onClick={contactNev}>Contact</li>
                                </ul>
                            </div>
                        </DrawerBody>
                        <DrawerFooter>
                            <div className={Css.MenuBtn_box}>
                                <button className={`${Css.btn} ${Css.Loginbtn}`} onClick={() => navigate('/login')}>Login</button>
                                <button className={Css.btn} onClick={() => navigate('/signup')}>Sign Up</button>
                            </div>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        </>
    )
}

export default Navbar