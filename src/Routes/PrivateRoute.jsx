import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserService } from '../Service/UserService';
import RouterLink from '../Until/RouterLink';

const PrivateRoute = ({children}) => {
    const navigate = useNavigate();
    const [isAuthor,setIsAuthor]=useState(false);
    const render = async ()=>{
        try {
            const currentUser = await UserService.findUserByToken();
            if(currentUser.data.role!=="admin")
                navigate(RouterLink.Home);
            else
                setIsAuthor(true);
        } catch (error) {
            navigate(RouterLink.Home);
        }
    }
    useEffect(()=>{
        render();
    },[navigate])
    return isAuthor ? children : null
};

export default PrivateRoute;