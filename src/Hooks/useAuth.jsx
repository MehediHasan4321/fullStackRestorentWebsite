import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Layouts/AuthProvider/AuthProvider';

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default useAuth;