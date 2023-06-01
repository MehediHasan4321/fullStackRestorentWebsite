import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useIsAdmin from '../Hooks/useIsAdmin';

const AdminRoute = () => {
    const {user,isLoading} = useAuth()
    const [isAdmin, isAdminLoading] = useIsAdmin()
    const from = useLocation()
    if(isLoading || isAdminLoading){
        return <h1 className="text-xl font-semitbold text-center mt-12">Loading</h1>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to={'/login'} state={{from}} replace></Navigate>
};

export default AdminRoute;