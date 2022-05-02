import React, { FC, HTMLInputTypeAttribute } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface IFormControlProps {
    id: string
    label: string
    register: UseFormRegisterReturn
    error: FieldError | undefined
    type: HTMLInputTypeAttribute
}

const FormControl: FC<IFormControlProps> = ({ id, label, register, error, type }) => {
    return (
        <div className="mb-2 w-full">
            <label htmlFor={id} className="text-mainGray text-xs">
                {label}
            </label>

            <input type={type} id={id} placeholder={label} {...register}
                className={`border rounded-md p-[7px] w-full 
                ${error?.message ? "border-red-700" : "focus:border-gray-400 border-gray-300"}`} />

            {error && <div className="text-red-700 text-xs">
                {error.message}
            </div>}
        </div>
    );
};

export default FormControl;