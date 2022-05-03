import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { AllRoutes } from './AppRoutes';

interface IFormFields {
    query: string
}

const SearchBar = () => {
    const { register, handleSubmit } = useForm<IFormFields>()

    const nav = useNavigate()

    const onSubmit: SubmitHandler<IFormFields> = ({ query }) => {
        if (query.length === 0) return;
        nav(AllRoutes.users + `/${query}`)
    }

    return (
        <form className="flex items-center bg-[#efefef] px-4 rounded-lg"
            onSubmit={handleSubmit(onSubmit)}>
            <button type="submit">
                <SearchIcon className="h-5 w-5 text-mainGray mr-3" />
            </button>
            <input type="text" placeholder="Search"{...register("query")}
                className="bg-[#efefef] h-8" />
        </form>
    );
};

export default SearchBar;