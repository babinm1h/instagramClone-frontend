import React from 'react';
import Header from '../components/Header';

interface IFormFields {
    username: string
    email: string
}

const Edit = () => {
    return (
        <>
            <Header />
            <div className="h-full w-full flex flex-col items-center justify-center">
                <div className="border border-borderGray py-8 px-5 mt-10">

                </div>
            </div>
        </>
    );
};

export default Edit;