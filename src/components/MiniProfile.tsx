import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import { logout } from '../redux/thunks/user';
import { AllRoutes } from './AppRoutes';

const MiniProfile = () => {
    const dispatch = useDispatch()
    const { user } = useAppSelector(state => state.user)

    const handleLogout = () => {
        if (window.confirm("You want to logout?")) dispatch(logout() as any)

    }

    return (
        <div className="flex items-center gap-5">
            <div className="h-14 w-14">
                <NavLink to={AllRoutes.profile + `/${user?._id}`}>
                    <img src={user?.img} alt="user"
                        className="object-contain rounded-[50%] border border-mainGray" />
                </NavLink>
            </div>

            <div className="flex-1">
                <p className="font-semibold truncate max-w-[200px]">{user?.username}</p>
                <p className="text-mainGray truncate max-w-[200px]">{user?.email}</p>
            </div>

            <button className="text-mainBlue" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default MiniProfile;