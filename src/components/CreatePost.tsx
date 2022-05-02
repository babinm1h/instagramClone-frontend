import React, { FC, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/useAppSelector';
import { createPost } from '../redux/thunks/posts';
import FormControl from '../UI/FormControl';
import { validate } from '../utils/validate';

interface IFormFields {
    title: string
}

interface ICreatePostProps {
    onClose: () => void
}

const CreatePost: FC<ICreatePostProps> = ({ onClose }) => {
    const dispatch = useDispatch()
    const error = useAppSelector(state => state.posts.error)

    const [preview, setPreview] = useState<string | null>(null)
    const [file, setFile] = useState<File | null>(null)
    const fileRef = useRef<HTMLInputElement>(null)


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

    const onSubmit: SubmitHandler<IFormFields> = ({ title }) => {
        const fd = new FormData()
        fd.append("title", title)
        fd.append("img", file!)

        dispatch(createPost(fd) as any)
        setFile(null)
        setPreview(null)
        reset()
        onClose()
    }


    return (
        <div className="p-5">
            <div className="flex items-center flex-col">
                <div className="mb-3">
                    <img alt="img"
                        src={preview ? preview : 'https://www.haleftatli.com/assets/images/default.png'} className="object-contain w-full h-52" />
                </div>

                <button className="bg-mainBlue text-white rounded-md h-[30px] px-3 transition-colors hover:bg-opacity-80" onClick={() => fileRef.current?.click()}>
                    Upload image
                </button>
                <input hidden type="file" name="file" id="file" ref={fileRef}
                    accept="image/png, image/jpg, image/jpeg" onChange={handleFile} />
            </div>

            <form action="" className="mt-2 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <FormControl register={register("title", validate(100, 1))} id="title"
                    label="Post title" error={errors.title} type="text" />

                {error && <div className="text-red-700 text-xs">{error}</div>}

                <button type="submit" disabled={!file}
                    className="bg-mainBlue text-white rounded-md h-[30px] px-3 transition-colors hover:bg-opacity-80 mt-4">
                    Create post
                </button>
            </form>
        </div>
    );
};

export default CreatePost;