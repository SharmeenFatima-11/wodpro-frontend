import React, { useState } from 'react'
import IMAGES from '../images'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NavBar = (props) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

    const [isHome, setIsHome] = useState(false);
    const [isInfo, setIsInfo] = useState(false);
    const [isCalendar, setIsCalendar] = useState(false);
    const [isEstandares, setIsEstandares] = useState(false);
    const [isAcceso, setIsAcceso] = useState(false);
    const [isRanking, setIsRanking] = useState(false);
    const [isWorkout, setIsWorkout] = useState(false);
    const [isContacto, setIsContacto] = useState(false);
    const [isPremios, setIsPremios] = useState(false);


    const isActive = (page) => props.activePage === page;

    const navigate = useNavigate()

    const handleHomeClick = () => {
        setIsHome(true)
        setIsInfo(false)
        setIsPremios(false)
        setIsCalendar(false)
        setIsEstandares(false)
        setIsAcceso(false)
        setIsRanking(false)
        setIsWorkout(false)
        setIsContacto(false)
        navigate("/")

    }

    const handleInfoClick = () => {
        setIsHome(false)
        setIsInfo(true)
        setIsCalendar(false)
        setIsPremios(false)
        setIsEstandares(false)
        setIsAcceso(false)
        setIsRanking(false)
        setIsWorkout(false)
        setIsContacto(false)
        navigate("/information")
    }
    const handleCalendarClick = () => {
        setIsHome(false)
        setIsInfo(false)
        setIsCalendar(true)
        setIsEstandares(false)
        setIsPremios(false)
        setIsAcceso(false)
        setIsRanking(false)
        setIsWorkout(false)
        setIsContacto(false)
        navigate("/calendar")

    }
    const handleEstandaresClick = () => {
        setIsHome(false)
        setIsInfo(false)
        setIsCalendar(false)
        setIsEstandares(true)
        setIsPremios(false)
        setIsAcceso(false)
        setIsRanking(false)
        setIsWorkout(false)
        setIsContacto(false)
        navigate("/standards")
    }
    const handleAccesoClick = () => {
        setIsHome(false)
        setIsInfo(false)
        setIsCalendar(false)
        setIsEstandares(false)
        setIsAcceso(true)
        setIsPremios(false)
        setIsRanking(false)
        setIsWorkout(false)
        setIsContacto(false)
        navigate("/login")
    }
    
    const handlePremiosClick = () => {
        setIsHome(false)
        setIsInfo(false)
        setIsCalendar(false)
        setIsPremios(true)
        setIsEstandares(false)
        setIsAcceso(false)
        setIsRanking(false)
        setIsWorkout(false)
        setIsContacto(false)
        navigate("/premios")
    }

    const handleRankingClick = () => {
        setIsHome(false)
        setIsInfo(false)
        setIsCalendar(false)
        setIsEstandares(false)
        setIsAcceso(false)
        setIsRanking(true)
        setIsWorkout(false)
        setIsPremios(false)
        setIsContacto(false)
        navigate("/ranking")
    }

    const handleWorkoutClick = () => {
        setIsHome(false)
        setIsInfo(false)
        setIsCalendar(false)
        setIsEstandares(false)
        setIsAcceso(false)
        setIsPremios(false)
        setIsRanking(false)
        setIsWorkout(true)
        setIsContacto(false)
        navigate("/workout")
    }
    const handleContactoClick = () => {
        setIsHome(false)
        setIsInfo(false)
        setIsCalendar(false)
        setIsEstandares(false)
        setIsAcceso(false)
        setIsPremios(false)
        setIsRanking(false)
        setIsWorkout(false)
        setIsContacto(true)
        navigate("/contactus")
    }

    const takeToHomePage = () => {
        navigate("/")
    }

    const goToProfile = () => {
        navigate("/profile")
    }

    const {isLoggedIn} = useAuth();



    return (
        <div className='w-full flex h-[120px] px-4 lg:px-8 bg-black flex-row items-center md:justify-between justify-center '>
            <div>
                <img src={IMAGES.Logo} onClick={takeToHomePage} alt='' className='lg:w-[120px] lg:h-[120px] h-[100px] w-[100px] cursor-pointer' />
            </div>
            <button onClick={toggleSidebar} className='md:hidden absolute top-8 left-8'>
                <img src={IMAGES.Menu} alt='Menu' className='h-10 w-10' />
            </button>
            {isSidebarVisible && (
                <div style={{ height: 'calc(100vh - 100px)' }} className='absolute top-[100px] left-0 sm:w-[35%] w-[50%]  bg-black shadow-lg z-50 flex flex-col'>
                    <div className='flex flex-col items-start px-7 pt-8 text-white gap-3'>
                        <div onClick={handleHomeClick} className='text-[17px] hover:text-[#B6B5FF] w-full text-center py-2 rounded-sm border-2 border-white cursor-pointer'>Home</div>
                        <div onClick={handleInfoClick} className='text-[17px] hover:text-[#B6B5FF] cursor-pointer w-full text-center py-2 rounded-sm border-2 border-white'>Información</div>
                        <div onClick={handleCalendarClick} className='text-[17px] hover:text-[#B6B5FF] cursor-pointer w-full text-center py-2 rounded-sm border-2 border-white'>Calendario</div>
                        <div onClick={handleEstandaresClick} className='text-[17px] hover:text-[#B6B5FF] cursor-pointer w-full text-center py-2 rounded-sm border-2 border-white'>Estándares</div>
                        <div onClick={handleAccesoClick} className='text-[17px] hover:text-[#B6B5FF] cursor-pointer w-full text-center py-2 rounded-sm border-2 border-white'>Acceso</div>
                        {/* <div onClick={handlePremiosClick} className='text-[17px] hover:text-[#B6B5FF] cursor-pointer w-full text-center py-2 rounded-sm border-2 border-white'>Premios</div> */}
                        <div onClick={handleRankingClick} className='text-[17px] hover:text-[#B6B5FF] cursor-pointer w-full text-center py-2 rounded-sm border-2 border-white'>Ranking</div>
                        <div onClick={handleWorkoutClick} className='text-[17px] hover:text-[#B6B5FF] cursor-pointer w-full text-center py-2 rounded-sm border-2 border-white'>Workouts</div>
                        <div onClick={handleContactoClick} className='text-[17px] hover:text-[#B6B5FF] cursor-pointer w-full text-center py-2 rounded-sm border-2 border-white'>Contacto</div>
                        <div onClick={handlePremiosClick} className='text-[17px] hover:text-[#B6B5FF] cursor-pointer w-full text-center py-2 rounded-sm border-2 border-white'>Premios</div>

                    </div>
                </div>
            )}
            <div className='text-white md:flex hidden flex-row lg:gap-6 gap-3 items-center justify-center'>
                <div onClick={handleHomeClick} className={`text-[17px] lg:text-[19px] hover:text-[#B6B5FF] hover:border-b hover:border-[#B6B5FF] cursor-pointer ${isActive('Home') ? 'text-[#B6B5FF] border-b border-[#B6B5FF]' : ''}`}>Home</div>
                <div onClick={handleInfoClick} className={`text-[17px] lg:text-[19px] hover:text-[#B6B5FF] hover:border-b hover:border-[#B6B5FF] cursor-pointer ${isActive('Information') ? 'text-[#B6B5FF] border-b border-[#B6B5FF]' : ''}`}>Información</div>
                <div onClick={handleCalendarClick} className={`text-[17px] lg:text-[19px] hover:text-[#B6B5FF] hover:border-b hover:border-[#B6B5FF] cursor-pointer ${isActive('Calendar') ? 'text-[#B6B5FF] border-b border-[#B6B5FF]' : ''}'`}>Calendario</div>
                <div onClick={handleEstandaresClick} className={`text-[17px] lg:text-[19px] hover:text-[#B6B5FF] hover:border-b hover:border-[#B6B5FF] cursor-pointer ${isActive('Standards') ? 'text-[#B6B5FF] border-b border-[#B6B5FF]' : ''}'`}>Estándares</div>
                <div onClick={handleAccesoClick} className={`text-[17px] lg:text-[19px] hover:text-[#B6B5FF] hover:border-b hover:border-[#B6B5FF] cursor-pointer ${isActive('Signup') ? 'text-[#B6B5FF] border-b border-[#B6B5FF]' : ''}'`}>Acceso</div>
                <div onClick={handleRankingClick} className={`text-[17px] lg:text-[19px]  hover:text-[#B6B5FF] hover:border-b hover:border-[#B6B5FF] cursor-pointer ${isActive('Ranking') ? 'text-[#B6B5FF] border-b border-[#B6B5FF]' : ''}'`}>Ranking</div>
                <div onClick={handleWorkoutClick} className={`text-[17px] lg:text-[19px] hover:text-[#B6B5FF] hover:border-b hover:border-[#B6B5FF] cursor-pointer ${isActive('Workout') ? 'text-[#B6B5FF] border-b border-[#B6B5FF]' : ''}'`}>Workouts</div>
                <div onClick={handleContactoClick} className={`text-[17px] lg:text-[19px] hover:text-[#B6B5FF] hover:border-b hover:border-[#B6B5FF] cursor-pointer ${isActive('Contact') ? 'text-[#B6B5FF] border-b border-[#B6B5FF]' : ''}'`}>Contacto</div>
                <div onClick={handlePremiosClick} className={`text-[17px] lg:text-[19px] hover:text-[#B6B5FF] hover:border-b hover:border-[#B6B5FF] cursor-pointer ${isActive('Premios') ? 'text-[#B6B5FF] border-b border-[#B6B5FF]' : ''}'`}>Premios</div>

                {
                    isLoggedIn && (
                        <img src={IMAGES.User} alt='Menu' className='h-8 w-8 cursor-pointer' onClick={goToProfile} />

                    )
                }
            </div>
        </div>
    )
}

export default NavBar