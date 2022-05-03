import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import { logout } from '../redux/thunks/user';
import { AllRoutes } from './AppRoutes';

interface INavProps {
    onOpen: () => void
    open: boolean
}

const Nav: FC<INavProps> = ({ onOpen, open }) => {
    const { user } = useAppSelector(state => state.user)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout() as any)
    }

    return (
        <nav className={`bg-white absolute left-0 w-full border-t-2 border-mainGray md:hidden transition-all duration-300 ease-in-out ${open ? "top-[60px]" : "top-[-150px]"}`}>
            <ul className="flex flex-col">
                <NavLink to={AllRoutes.profile + `/${user?._id}`}>
                    <li className="navLink">
                        Profile
                    </li>
                </NavLink>
                <li className="navLink" onClick={onOpen}>
                    Create Post
                </li>
                <li onClick={handleLogout} className="navLink text-red-700">
                    Logout
                </li>
            </ul>
        </nav>
    );
};

export default Nav;