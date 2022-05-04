import React, { useState } from 'react';
import logo from "../assets/logo.png"
import mobLogo from "../assets/mobileLogo.jpg"
import { SearchIcon, HomeIcon, HeartIcon, MenuIcon, PaperAirplaneIcon, PlusCircleIcon, XIcon } from "@heroicons/react/outline"
import { useAppSelector } from '../hooks/useAppSelector';
import { NavLink } from 'react-router-dom';
import { AllRoutes } from './AppRoutes';
import Modal from './Modal';
import CreatePost from './CreatePost';
import Nav from './Nav';
import SearchBar from './SearchBar';



const Header = () => {
    const { isAuth, user } = useAppSelector(state => state.user)

    const [open, setOpen] = useState<boolean>(false)
    const [nav, setNav] = useState<boolean>(false)


    const toggleNav = () => {
        setNav(!nav)
    }

    const onOpen = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }


    return (
        <>
            <header className="flex flex-col basis-[60px] justify-center px-5 shadow-sm shadow-gray-400 bg-white z-3 sticky top-0 left-0 w-full">
                <div className="flex justify-between max-w-6xl w-full items-center lg:mx-auto">

                    <div className="relative hidden lg:inline-grid cursor-pointer">
                        <NavLink to={AllRoutes.home}>
                            <img src={logo} alt="logo" className="w-[100px] object-contain" />
                        </NavLink>
                    </div>
                    <div className="relative lg:hidden cursor-pointer w-12 h-12 flex-shrink-0 mb-[2px]">
                        <NavLink to={AllRoutes.home}>
                            <img src={mobLogo} alt="logo" className="object-contain" />
                        </NavLink>
                    </div>


                    <div className="hidden xs:block">
                        <SearchBar />
                    </div>


                    {isAuth
                        ? <div className="flex items-center gap-4">
                            <NavLink to={AllRoutes.home}><HomeIcon className="navBtn " /></NavLink>
                            <PaperAirplaneIcon className="navBtn rotate-45" />
                            <HeartIcon className="navBtn" />
                            <PlusCircleIcon className="navBtn" onClick={onOpen} />

                            {nav
                                ? <XIcon className="w-6 h-6 md:hidden cursor-pointer"
                                    onClick={toggleNav} />
                                : <MenuIcon className="w-6 h-6 md:hidden cursor-pointer"
                                    onClick={toggleNav} />}

                            <img src={user?.img} alt="user" className="cursor-pointer w-7 h-7 rounded-[50%] object-cover" />
                        </div>

                        : <NavLink to={AllRoutes.signin}>
                            <div className="flex items-center cursor-pointer font-semibold">Sign In
                                <HomeIcon className="navBtn ml-2" />
                            </div>
                        </NavLink>}
                    {<Nav onOpen={onOpen} open={nav} />}
                </div>
            </header>
            {open && <Modal onClose={onClose} title="Create new post">
                <CreatePost onClose={onClose} />
            </Modal>}
        </>
    );
};

export default Header;