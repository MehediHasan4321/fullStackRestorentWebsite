import loginBgImg from '../../../assets/others/authentication.png'
import loginImg from '../../../assets/others/authentication2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { getAuth } from 'firebase/auth'
import app from '../../../firebase/firebase.config';

const Regeister = () => {
    const { signUpWithEmailPass } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'
    const auth = getAuth(app)
    const handleRegeister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        const photoURL = form.url.value
        const saveUser = { name, email,images:photoURL }
        signUpWithEmailPass(email, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(() => {
                        fetch(`http://localhost:5000/users?email=${email}`,{
                            method:"POST",
                            headers:{'content-type':'application/json'},
                            body:JSON.stringify(saveUser)
                        })
                        .then(res=>res.json())
                        .then(data=>{
                            console.log(data)
                        })
                        form.reset()
                        toast.success('login successfull')
                        navigate(from,{replace:true})
                    })
                    .catch(err => toast.error(`${err.message}`))

            })
            .catch(err => toast.error(`${err.message}`))
    }
    return (
        <div className='w-full h-screen flex items-center' style={{ backgroundImage: `url(${loginBgImg})` }}>
            <div className='container mx-auto p-24 flex gap-10 items-center'>
                <form onSubmit={handleRegeister} className=' space-y-5'>
                    <h1 className='text-3xl font-semibold text-center'>Create An Account</h1>
                    <div className=' space-y-2'>
                        <p className='font-semibold'>Name</p>
                        <input type="text" name="name" id="name" required className='py-3 px-2 w-96 rounded' placeholder='Enter Your Name' />
                    </div>
                    <div className=' space-y-2'>
                        <p className='font-semibold'>Email</p>
                        <input type="email" name="email" id="email" required className='py-3 px-2 w-96 rounded' placeholder='Enter Your Email' />
                    </div>
                    <div className=' space-y-2'>
                        <p className='font-semibold'>Photo URL</p>
                        <input type="url" name="url" id="url" required className='py-3 px-2 w-96 rounded' placeholder='Enter Your Email' />
                    </div>
                    <div className=' space-y-2'>
                        <p className='font-semibold'>Password</p>
                        <input type="Password" name="password" id="Password" required className='py-3 px-2 w-96 rounded' placeholder='Enter Your Password' />
                    </div>
                    <div className='mt-3'>
                        <input type="submit" value="Sign Up" className='py-3 px-2 w-96 rounded bg-[#D1A054] text-white font-semibold' />
                    </div>
                    <div className="mt-3 w-full">
                        <p className='text-[#D1A054] text-center'><Link to={'/login'}>Already Have An Accouont? Login</Link></p>
                        <div className='w-96 text-center mt-3'>
                            <small className='text-center'>Or Sing In With</small>
                            <div className='flex justify-center items-center gap-5 mt-3 text-3xl cursor-pointer'>
                                <FaFacebook />
                                <FaGoogle />
                                <FaGithub />
                            </div>
                        </div>
                    </div>
                </form>
                <img src={loginImg} alt="login images" />
            </div>
            <Toaster />
        </div>
    );
};

export default Regeister;