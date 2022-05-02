import { XIcon } from '@heroicons/react/outline';
import React, { FC } from 'react';

interface IModalProps {
    children: React.ReactNode
    onClose: () => void
    title: string
}

const Modal: FC<IModalProps> = ({ children, onClose, title }) => {
    return (
        <div className="w-screen h-full bg-black bg-opacity-60 fixed top-0 left-0 z-20 flex justify-center
        py-12" onClick={onClose}>

            <div className="w-[500px] max-h-[500px] bg-white rounded-xl"
                onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-col h-full">
                    <h1 className="py-2 border-b border-mainGray text-center text-[16px]">
                        {title}
                    </h1>

                    {children}
                    
                </div>
            </div>
            <XIcon className="h-14 w-14 text-white cursor-pointer absolute top-5 right-10 opacity-80 hover:opacity-100" />
        </div>
    );
};

export default Modal;