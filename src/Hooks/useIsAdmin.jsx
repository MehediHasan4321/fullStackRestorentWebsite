import React from 'react';
import useAuth from './useAuth';
import useAexiosSerure from './useAexiosSerure';
import { useQuery } from '@tanstack/react-query';

const useIsAdmin = () => {
    const { user } = useAuth()
    const [axiosSerure] = useAexiosSerure()
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSerure(`/user/admin/${user?.email}`)
            return res.data.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useIsAdmin;