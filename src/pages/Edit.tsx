import React, { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import Loader from '../components/Loader/Loader';
import { useAppSelector } from '../hooks/useAppSelector';
import { updateProfile } from '../redux/thunks/user';
import { validate } from '../utils/validate';

interface IFormFields {
    username: string
    email: string
}

const Edit = () => {
    const dispatch = useDispatch()

    const [file, setFile] = useState<null | File>(null)
    const [preview, setPreview] = useState<null | string>()
    const inputRef = useRef<HTMLInputElement>(null)

    const { user, updateError, isUpdating } = useAppSelector(state => state.user)

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader()
        if (e.target.files) {
            setFile(e.target.files[0])
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setPreview(readerEvent.target?.result as string)
        }
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormFields>()

    const onSubmit: SubmitHandler<IFormFields> = ({ email, username }) => {
        const fd = new FormData()
        fd.append("email", email)
        fd.append("username", username)
        if (file) fd.append("img", file)

        dispatch(updateProfile(fd) as any)
        setPreview(null)
        setFile(null)
        reset()
    }


    return (
        <>
            <Header />
            <div className="h-full w-full flex flex-col items-center justify-center">
                {isUpdating
                    ? <div className="text-center"><Loader /></div>

                    : <div className="border border-borderGray p-8 mt-10 bg-white max-w-[700px] w-full">

                        <div className="editBlock">
                            <img src={preview ? preview : user?.img} alt="ava"
                                className="h-12 w-12 rounded-[50%] object-cover" />
                            <input type="file" name="" id="" ref={inputRef} onChange={handleFile}
                                className="hidden" accept="image/png, image/jpg, image/jpeg" />
                            <button className="text-mainBlue hover:underline"
                                onClick={() => inputRef.current?.click()}>
                                Change photo
                            </button>
                        </div>

                        <form action="" className="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="editBlock">
                                <label htmlFor="username" className="font-semibold w-20">
                                    Username
                                </label>
                                <input type="text" defaultValue={user?.username} id="username"
                                    {...register("username", validate(35, 4))}
                                    className="border border-gray-300 px-2 py-1 rounded-md w-[300px]" />
                                {errors.username?.message && <div className="text-red-700 my-1 text-xs">
                                    {errors.username.message}
                                </div>}
                            </div>

                            <div className="editBlock">
                                <label htmlFor="email" className="font-semibold w-20">
                                    E-mail
                                </label>
                                <input type="email" defaultValue={user?.email} id="email"
                                    {...register("email", validate(35, 6))}
                                    className="border border-gray-300 px-2 py-1 rounded-md w-[300px]" />
                                {errors.email?.message && <div className="text-red-700 my-1 text-xs">
                                    {errors.email.message}
                                </div>}
                            </div>

                            {updateError && <div className="text-red-700 my-1">{updateError}</div>}

                            <button className="h-[30px] px-5 bg-mainBlue rounded-md text-white transition-colors hover:bg-opacity-90"
                                type="submit">
                                Изменить профиль
                            </button>
                        </form>
                    </div>}
            </div >
        </>
    );
};

export default Edit;