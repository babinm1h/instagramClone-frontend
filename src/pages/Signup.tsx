import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
import { AllRoutes } from '../components/AppRoutes';
import { useAppSelector } from '../hooks/useAppSelector';
import { signUp } from '../redux/thunks/user';
import FormControl from '../UI/FormControl';
import { validate } from '../utils/validate';

interface IFormFields {
    email: string
    password: string
    username: string
}

const Signup = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const { isAuth, isProcessing, signupError } = useAppSelector(state => state.user)

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormFields>()

    const onSubmit: SubmitHandler<IFormFields> = ({ email, password, username }) => {
        dispatch(signUp({ email, password, username }) as any)
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
                    Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
                </p>

                <div className="w-full">
                    <form action="" className="flex flex-col items-center"
                        onSubmit={handleSubmit(onSubmit)}>

                        <FormControl id="email" label="Your email" type="email"
                            register={register("email", validate(35, 5))} error={errors.email} />

                        <FormControl id="username" label="Username" type="text"
                            register={register("username", validate(35, 5))} error={errors.username} />

                        <FormControl id="password" label="Password" type="password"
                            register={register("password", validate(35, 6))} error={errors.password} />

                        {signupError && <div className="text-red-700">
                            {signupError}
                        </div>}

                        <button type="submit" className='bg-mainBlue text-white transition-colors hover:bg-opacity-90 h-[30px] flex items-center justify-center rounded-md w-full mt-2' disabled={isProcessing}>
                            Зарегестрироваться
                        </button>
                    </form>

                    <p className="text-xs text-mainGray text-center mt-5">
                        Регистрируясь, вы принимаете наши Условия. Прочитайте Политику использования данных, чтобы узнать, как мы получаем, используем и передаем ваши данные, а также просмотрите Политику в отношении файлов cookie.
                    </p>
                </div>

            </div>

            <div className="shadow-sm shadow-mainGray p-5 mt-5 w-[400px] text-center">
                Уже есть аккаунт?
                <NavLink to={AllRoutes.signin} className="text-mainBlue ml-2">
                    Войти
                </NavLink>
            </div>
        </div>
    );
};

export default Signup;