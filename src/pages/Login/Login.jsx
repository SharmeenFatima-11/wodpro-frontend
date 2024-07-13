import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import IMAGES from '../../images'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Loader from '../../components/Loader'
import { settings } from 'firebase/analytics'

const Login = () => {

    const auth = getAuth();

    const [loading,setLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate("/signup")
    }

    const handleClick = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            if (response.user) {
                setLoading(true);
                console.log("user is : ", response.user);
                setIsLoggedIn(true);
                setTimeout(() => {
                    setLoading(false);
                    navigate("/dashboard")
                }, 2000);
            }
        } catch (error) {
            console.log(error.message)
            if(error.message = "Firebase: Error (auth/invalid-credential)."){
                alert("Invalid Credentials");
            }
        }
    }

    const { setIsLoggedIn } = useAuth()

    return (
        <>
            <div className='bg-cover h-screen' style={{ backgroundImage: `url(${IMAGES.BackgroundImage})` }}>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                <div className='relative'>
                    {/* <NavBar activePage="Signup" /> */}
                    <div className='flex items-center justify-center' style={{ height: 'calc(100vh - 120px)' }}>
                        <div className='flex flex-col gap-2 border-2 border-white rounded-xl pb-10 pt-6 px-6 bg-[#000000]/50 xl:w-[23%] lg:w-[28%] md:w-[33%] sm:w-[45%]'>
                            <div>
                                <img src={IMAGES.Logo} alt='' className='h-[120px] w-full' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <input
                                    type="text"
                                    placeholder="Correo electrónico"
                                    className="px-4 py-2 border rounded bg-transparent text-white text-sm"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                <input
                                    type="password"
                                    placeholder="Contraseña"
                                    className="px-4 py-2 border rounded bg-transparent text-white text-sm"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <div className='mt-8 flex flex-col gap-2'>
                            {loading? <div className='flex justify-center'> <Loader /> </div> :
                                <Button text={"Entrar"} bgColor={"#B6B5FF"} borderColor={"#B6B5FF"} textColor={"#1A101A"} handleClick={handleClick} />
                                    }
                                <div className='flex items-center justify-center gap-1'>
                                    <p className='text-white text-sm'>¿No tienes cuenta?</p>
                                    <p onClick={handleSignUp} className=' border-b text-white text-sm cursor-pointer'> ¡Únete!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>

    )
}

export default Login