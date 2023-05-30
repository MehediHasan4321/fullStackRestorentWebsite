import React, { useContext } from 'react';
import { AuthContext } from '../Layouts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user,isLoading} = useContext(AuthContext)
    const from = useLocation()
    if(isLoading){
        return <h1 className="text-xl font-semitbold text-center mt-12">Loading</h1>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'} state={{from}} replace></Navigate>
};

export default PrivetRoute;