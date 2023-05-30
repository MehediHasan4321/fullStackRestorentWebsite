import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginBgImg from '../../../assets/others/authentication.png'
import loginImg from '../../../assets/others/authentication2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ThirdPartyLogin from '../../ShareCompo/ThirdPartyLoging/ThirdPartyLogin';
const Login = () => {
    const [isDisable, setIsDisable] = useState(true)
    const capchaRef = useRef(null)
    const { logInWithEmailPassword } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        logInWithEmailPassword(email, password)
            .then(() => {
                alert('Login Successfull')
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleValided = () => {
        const value = (capchaRef.current.value)
        if (validateCaptcha(value)) {
            setIsDisable(false)
        } else {
            setIsDisable(true)
        }
    }

    return (
        <div className='w-full h-screen flex items-center' style={{ backgroundImage: `url(${loginBgImg})` }}>
            <div className='container mx-auto p-24 flex gap-10 items-center'>
                <img src={loginImg} alt="login images" />
                <form onSubmit={handleLogin} className=' space-y-5'>
                    <h1 className='text-3xl font-semibold text-center'>Login</h1>
                    <div className=' space-y-2'>
                        <p className='font-semibold'>Email</p>
                        <input type="email" name="email" id="email" className='py-3 px-2 w-96 rounded' placeholder='Enter Your Email' />
                    </div>
                    <div className=' space-y-2'>
                        <p className='font-semibold'>Password</p>
                        <input type="Password" name="password" id="Password" className='py-3 px-2 w-96 rounded' placeholder='Enter Your Password' />
                    </div>
                    <div className=' space-y-2 pt-3'>
                        <LoadCanvasTemplate />
                    </div>
                    <div className='mt-3'>
                        <div className="form-control">
                            <div className="input-group">
                                <input ref={capchaRef} type="text" placeholder="Enter The Capcar" className="input input-bordered w-[320px] " />
                                <button onClick={handleValided} className="text-white font-semibold btn-square bg-[#D1A054] w-16">valided</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <input type="submit" disabled={isDisable} value="Sign In" className='py-3 px-2 w-96 rounded bg-[#D1A054] text-white font-semibold cursor-pointer disabled:bg-gray-200' />
                    </div>
                    <div className="mt-3 w-full">
                        <p className='text-[#D1A054] text-center'><Link to={'/regeister'}>New Here? Create a New Account</Link></p>
                        <ThirdPartyLogin />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;