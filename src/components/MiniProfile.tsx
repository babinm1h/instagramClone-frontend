import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/useAppSelector';
import { logout } from '../redux/thunks/users';

const MiniProfile = () => {
    const dispatch = useDispatch()
    const { user } = useAppSelector(state => state.user)

    const handleLogout = () => {
        if (window.confirm("You want to logout?")) dispatch(logout() as any)

    }

    return (
        <div className="flex items-center gap-5">
            <div className="h-14 w-14">
                <img src={user?.img} alt="user"
                    className="object-contain rounded-[50%] border border-mainGray" />
            </div>

            <div className="flex-1">
                <p className="font-semibold">{user?.username}</p>
                <p className="text-mainGray">{user?.email}</p>
            </div>

            <button className="text-mainBlue" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default MiniProfile;