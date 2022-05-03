import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IUser } from '../types/DBmodels';
import { AllRoutes } from './AppRoutes';

interface IRecomendationItemProps {
    item: IUser
}

const RecommendationItem: FC<IRecomendationItemProps> = ({ item }) => {
    return (
        <li className="flex items-center gap-4 mt-4">
            <div className="">
                <NavLink to={AllRoutes.profile + `/${item._id}`}>
                    <img src={item.img} alt="user"
                        className="object-cover rounded-[50%] w-8 h-8" />
                </NavLink>
            </div>

            <div className="flex-1">
                <NavLink to={AllRoutes.profile + `/${item._id}`}
                    className="font-semibold truncate max-w-[160px] hover:underline">
                    {item.username}
                </NavLink>
            </div>
        </li>
    );
};

export default RecommendationItem;