import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import Sidebar, { SidebarItem } from '../../components/Sidebar'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../images'
import { ExpandedContext } from '../../context/Expanded'

const Profile = () => {
    const sidebarContext = useContext(ExpandedContext)
    const [selectedGender, setSelectedGender] = useState('Hombre'); 

    const handleChange = (event) => {
        setSelectedGender(event.target.value);
    };

    const checkAndSetSidebarState = () => {
        if (window.innerWidth < 640) {
            sidebarContext.setExpanded(false);
        }
    };

    useEffect(() => {
        // Check the sidebar state on initial render
        checkAndSetSidebarState();

        // Add event listener for window resize
        window.addEventListener('resize', checkAndSetSidebarState);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize', checkAndSetSidebarState);
        };
    }, []);

    return (
        <div className='bg-cover h-screen'>
            <div className='relative'>
                <NavBar />
                <div className='flex flex-row overflow-hidden' style={{ height: 'calc(100vh - 120px)' }}>
                    <Sidebar>
                        <div className='flex flex-row items-center justify-between pb-4'>
                        
                            <button className="sm:flex hidden" onClick={() => sidebarContext.setExpanded(!(sidebarContext.expanded))} >
                                <img src={IMAGES.Menu} alt='' className='w-[30px] h-[30px] ' />
                            </button>
                        </div>
                        <NavLink to="/dashboard">
                            <SidebarItem text="Descripción general" image={IMAGES.Description} />
                        </NavLink>
                        <NavLink to="/profile">
                            <SidebarItem text="Configuraciones de la cuenta" image={IMAGES.Profile} active />
                        </NavLink>
                        <NavLink to="/athleteprofile">
                            <SidebarItem text="Perfil del atleta" image={IMAGES.Running} />
                        </NavLink>
                        <NavLink to="/history">
                            <SidebarItem text="Historial de pedidos" image={IMAGES.Retry} />
                        </NavLink>
                        <NavLink to="/preferences">
                            <SidebarItem text="Últimas noticias" image={IMAGES.Preferences} />
                        </NavLink>
                        <NavLink to="/leaderboard">
                            <SidebarItem text="Ranking" image={IMAGES.Leaderboard} />
                        </NavLink>

                    </Sidebar>
                    <div className=' overflow-y-auto w-full md:px-8 px-3 py-10'>
                        <div className='flex flex-col gap-7'>
                            <p className='font-semibold text-[25px] sm:text-left text-center'>Información personal</p>
                            <div className='border-2 rounded-lg flex flex-col'>
                                <div className='flex-[1] py-8 md:px-5 px-2 flex border-b lg:gap-0 gap-3'>
                                    <div className='flex-[1]'>
                                        <p className='font-semibold'>Nombre</p>
                                    </div>
                                    <div className='flex-[3] flex flex-col'>
                                        <p className='font-semibold'>Amelia Jones</p>
                                        <p className='text-[#777777] text-justify'>Aparece en su perfil público de atleta y en las tablas de clasificación de WodPro League</p>
                                    </div>

                                </div>
                                <div className='flex-[1]  py-8 md:px-5 px-2 flex border-b'>
                                    <div className='flex-[1]'>
                                        <p className='font-semibold'>Género</p>
                                    </div>
                                    <div className='flex-[3] flex flex-row'>
                                        <label className="lg:mr-6 mr-2">
                                            <input
                                                type="radio"
                                                value="Hombre"
                                                checked={selectedGender === 'Hombre'}
                                                onChange={handleChange}
                                            />
                                            Hombre
                                        </label>

                                        <label className="lg:mr-6 mr-2">
                                            <input
                                                type="radio"
                                                value="Mujer"
                                                checked={selectedGender === 'Mujer'}
                                                onChange={handleChange}
                                            />
                                            Mujer
                                        </label>

                                        <label className="lg:mr-6 mr-2">
                                            <input
                                                type="radio"
                                                value="Otro"
                                                checked={selectedGender === 'Otro'}
                                                onChange={handleChange}
                                            />
                                            Otro
                                        </label>

                                        <label className="lg:mr-6 mr-2">
                                            <input
                                                type="radio"
                                                value="ratherNotSay"
                                                checked={selectedGender === 'ratherNotSay'}
                                                onChange={handleChange}
                                            />
                                            Rather not say
                                        </label>
                                    </div>

                                </div>
                                <div className='flex-[1]  py-8 md:px-5 px-2 flex border-b'>
                                    <div className='flex-[1]'>
                                        <p className='font-semibold'>Fecha de nacimiento</p>
                                    </div>
                                    <div className='flex-[3] flex flex-row'>
                                        junio 23, 2000
                                    </div>

                                </div>

                            </div>
                            <p className='font-semibold text-[25px] sm:text-left text-center'>Cuenta de Ingreso</p>
                            <div className='border-2 rounded-lg flex flex-col'>
                                <div className='flex-[1] py-8 md:px-5 px-2 flex border-b lg:gap-0 gap-3'>
                                    <div className='flex-[1]'>
                                        <p className='font-semibold'>Correo electrónico</p>
                                    </div>
                                    <div className='flex-[3] flex flex-col sm:gap-0 gap-2'>
                                        <div className='flex sm:flex-row flex-col sm:gap-0 gap-2 justify-between'>
                                            <p className='font-semibold'>correo electrónico@gmail.com
                                            </p>
                                            <img src={IMAGES.Edit} alt='' className='w-[20px] h-[20px]  cursor-pointer' />
                                        </div>
                                        <p className='text-[#777777] text-justify'>Este correo electrónico está vinculado a su cuenta.</p>
                                    </div>

                                </div>

                                <div className='flex-[3]  py-8 md:px-5 px-2 flex border-b lg:gap-0 gap-3'>
                                    <div className='flex-[1]'>
                                        <p className='font-semibold'>Contraseña</p>
                                    </div>
                                    <div className='flex-[3] flex flex-col gap-1'>
                                        <div className=''>
                                            <div className='px-2 py-1 border-2 flex items-center justify-center lg:w-[28%] md:w-[38%] w-[100%] border-black rounded-md cursor-pointer'>
                                                Cambiar la contraseña
                                            </div>
                                        </div>
                                        <p className='text-[#777777] text-[14px] text-justify'>Recomendamos actualizar su contraseña periódicamente para evitar el acceso no autorizado.</p>
                                    </div>

                                </div>

                            </div>
                            <p className='font-semibold text-[25px] sm:text-left text-center'>Elimina tu cuenta de WOD PRO LEAGUE</p>
                            <div className='border-2 rounded-lg px-5 pt-10 py-[150px]'>
                                <div className='flex flex-row lg:gap-0 gap-3'>
                                    <div className='flex-[1]'>
                                        <p className='font-semibold'>Contraseña</p>
                                    </div>
                                    <div className='flex-[3] flex flex-col gap-2'>
                                        <div className='flex md:flex-row flex-col md:gap-0 gap-2 justify-between'>
                                            <div className='px-2 py-1 bg-red-500 lg:w-[28%] md:w-[38%] w-[100%] text-center text-white cursor-pointer hover:bg-white hover:text-red-500 hover:border-2 hover:border-red-500  rounded-md'>
                                                Borrar cuenta
                                            </div>
                                            <img src={IMAGES.Edit} alt='' className='w-[20px] h-[20px] cursor-pointer ' />

                                        </div>
                                        <p className='text-[#777777] text-[14px] text-justify   '>Esta es una acción permanente. Toda la información será eliminada.</p>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Profile