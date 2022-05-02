import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AllRoutes } from '../components/AppRoutes';
import FormControl from '../UI/FormControl';
import logo from "../assets/logo.png"
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/useAppSelector';
import { signIn } from '../redux/thunks/user';
import { validate } from '../utils/validate';


interface IFormFields {
    email: string
    password: string
}

const SignIn = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const { isAuth, isProcessing, signinError } = useAppSelector(state => state.user)

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormFields>()

    const onSubmit: SubmitHandler<IFormFields> = ({ email, password }) => {
        dispatch(signIn({ email, password }) as any)
    }

    useEffect(() => {
        if (isAuth) {
            reset()
            nav(AllRoutes.home)
        }
    }, [isAuth])

    return (
        <div className="flex items-center justify-center py-10 flex-col">
            <div className="w-[400px] shadow-sm shadow-mainGray flex items-center py-7 flex-col px-10 ">

                <img src={logo} alt="logo" className="w-36 h-12 object-contain" />
                <p className="text-mainGray font-semibold text-lg text-center my-3">
                    Войдите, чтобы смотреть фото и видео ваших друзей.
                </p>

                <div className="w-full">
                    <form action="" className="flex flex-col items-center"
                        onSubmit={handleSubmit(onSubmit)}>
                        <FormControl id="email" label="Your email" type="email"
                            register={register("email", validate(35, 5))} error={errors.email} />

                        <FormControl id="password" label="Password" error={errors.password}
                            register={register("password", validate(35, 6))} type="password" />

                        {signinError && <div className="text-red-700">
                            {signinError}
                        </div>}

                        <button type="submit" className='bg-mainBlue text-white transition-colors hover:bg-opacity-90 h-[30px] flex items-center justify-center rounded-md w-full mt-2' disabled={isProcessing}>
                            Войти
                        </button>
                    </form>

                </div>

            </div>

            <div className="shadow-sm shadow-mainGray p-5 mt-5 w-[400px] text-center">
                Нет аккаунта?
                <NavLink to={AllRoutes.signup} className="text-mainBlue ml-2">
                    Зарегестрироваться
                </NavLink>
            </div>
        </div>
    );
};

export default SignIn;