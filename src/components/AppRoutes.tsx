import React from 'react';
import { Route, Routes } from 'react-router';
import { useAppSelector } from '../hooks/useAppSelector';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import Signup from '../pages/Signup';


export enum AllRoutes {
    home = "/",
    signup = "/signup",
    signin = "/signin",
    profile = "/profile",
}

const AppRoutes = () => {
    const { isAuth } = useAppSelector(state => state.user)

    const publicRoutes = [
        { path: AllRoutes.signin, elem: <SignIn /> },
        { path: AllRoutes.signup, elem: <Signup /> },
        { path: AllRoutes.home, elem: <Home /> },
        { path: AllRoutes.profile + "/:id", elem: <Profile /> },
    ]

    const privateRoutes = [
        { path: AllRoutes.home, elem: <Home /> },
        { path: AllRoutes.profile + "/:id", elem: <Profile /> },
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