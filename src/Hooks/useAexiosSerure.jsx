import { useContext, useEffect } from 'react';
import { AuthContext } from '../Layouts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const useAexiosSerure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const axiosSerure = axios.create({
        baseURL: 'http://localhost:5000'
    })

    useEffect(() => {
        axiosSerure.interceptors.request.use(config => {
            const token = localStorage.getItem('access_token')
            if (token) {
                config.headers.Authorization = `bearer ${token}`
            }
            return config
        });
        axiosSerure.interceptors.response.use(response => response, async error => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                // await logOut()
                navigate('/login')
            }
            return Promise.reject(error)
        })
    }, [logOut, navigate, axiosSerure])
    return [axiosSerure]
};

export default useAexiosSerure;