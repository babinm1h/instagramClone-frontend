import React from 'react';
import { Route, Routes } from 'react-router';
import { useAppSelector } from '../hooks/useAppSelector';
import Edit from '../pages/Edit';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import Signup from '../pages/Signup';
import Users from '../pages/Users';


export enum AllRoutes {
    home = "/",
    signup = "/signup",
    signin = "/signin",
    profile = "/profile",
    edit = "/edit",
    users = "/users"
}

const AppRoutes = () => {
    const { isAuth } = useAppSelector(state => state.user)

    const publicRoutes = [
        { path: AllRoutes.signin, elem: <SignIn /> },
        { path: AllRoutes.signup, elem: <Signup /> },
        { path: AllRoutes.home, elem: <Home /> },
        { path: AllRoutes.profile + "/:id", elem: <Profile /> },
        { path: AllRoutes.users + "/:search", elem: <Users /> }
    ]

    const privateRoutes = [
        { path: AllRoutes.edit + "/:id", elem: <Edit /> }
    ]

    return (
        <>
            <Routes>
                {publicRoutes.map(r => <Route key={r.path} element={r.elem} path={r.path} />)}

                {isAuth && privateRoutes.map(r => <Route key={r.path} element={r.elem} path={r.path} />)}
            </Routes>
        </>
    );
};

export default AppRoutes;