import React from 'react';
import { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';

const ThirdPartyLogin = () => {
    const { singUpWithGoogle } = useContext(AuthContext)
    const handleGoogleLogin = () => {
        singUpWithGoogle()
            .then((resutl) => {
                
                const { displayName, photoURL, email } = resutl.user
                const saveUser = { name: displayName, images: photoURL, email }
                fetch(`http://localhost:5000/users?email=${email}`, {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
                    toast.success('Login Success')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    return (
        <div>
            <div className='w-96 text-center mt-3'>
                <small className='text-center'>Or Sing In With</small>
                <div className='flex justify-center items-center gap-5 mt-3 text-3xl cursor-pointer'>
                    <FaFacebook />
                    <FaGoogle onClick={handleGoogleLogin} />
                    <FaGithub />
                </div>
                <Toaster position='top-right' />
            </div>
        </div>
    );
};

export default ThirdPartyLogin;