import React, { useState } from 'react';
import logo from "../assets/logo.png"
import mobLogo from "../assets/mobileLogo.jpg"
import { SearchIcon, HomeIcon, HeartIcon, MenuIcon, PaperAirplaneIcon, PlusCircleIcon } from "@heroicons/react/outline"
import { useAppSelector } from '../hooks/useAppSelector';
import { NavLink } from 'react-router-dom';
import { AllRoutes } from './AppRoutes';
import Modal from './Modal';
import CreatePost from './CreatePost';

const Header = () => {
    const { isAuth, user } = useAppSelector(state => state.user)

    const [open, setOpen] = useState(false)

    const onOpen = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }

    return (
        <>
            <nav className="flex flex-col basis-[60px] justify-center px-5 shadow-sm shadow-gray-400 bg-white z-3 sticky top-0 left-0">
                <div className="flex justify-between max-w-6xl w-full items-center lg:mx-auto">

                    <div className="relative hidden lg:inline-grid cursor-pointer">
                        <NavLink to={AllRoutes.home}>
                            <img src={logo} alt="logo" className="w-[100px] object-contain" />
                        </NavLink>
                    </div>
                    <div className="relative lg:hidden cursor-pointer w-12 h-12 flex-shrink-0 mb-2">
                        <NavLink to={AllRoutes.home}>
                            <img src={mobLogo} alt="logo" className="object-contain" />
                        </NavLink>
                    </div>


                    <div className="">
                        <div className="flex items-center bg-[#efefef] px-4 rounded-lg">
                            <SearchIcon className="h-5 w-5 text-mainGray mr-3" />
                            <input type="text" placeholder="Search" className="bg-[#efefef] h-8" />
                        </div>
                    </div>


                    {isAuth
                        ? <div className="flex items-center gap-4">
                            <NavLink to={AllRoutes.home}><HomeIcon className="navBtn " /></NavLink>
                            <PaperAirplaneIcon className="navBtn rotate-45" />
                            <HeartIcon className="navBtn" />
                            <PlusCircleIcon className="navBtn" onClick={onOpen} />
                            <MenuIcon className="w-6 h-6 md:hidden cursor-pointer" />

                            <img src="https://avatars.mds.yandex.net/i?id=43e1df1ae371ea83ec70300a17577172-5236798-images-thumbs&n=13" alt="user" className="cursor-pointer w-7 h-7" />
                        </div>

                        : <NavLink to={AllRoutes.signin}>
                            <div className="flex items-center cursor-pointer font-semibold">Sign In
                                <HomeIcon className="navBtn ml-2" />
                            </div>
                        </NavLink>}

                </div>
            </nav>
            {open && <Modal onClose={onClose} title="Create new post">
                <CreatePost onClose={onClose} />
            </Modal>}
        </>
    );
};

export default Header;