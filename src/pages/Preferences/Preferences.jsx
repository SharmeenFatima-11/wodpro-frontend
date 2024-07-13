import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import { ExpandedContext } from '../../context/Expanded'
import Sidebar, { SidebarItem } from '../../components/Sidebar'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../images'

const Preferences = () => {
    const sidebarContext = useContext(ExpandedContext)
    const [isCheckedFirst, setIsCheckedFirst] = useState(false);
    const [isCheckedSecond, setIsCheckedSecond] = useState(false);

    const toggleFirstCheckbox = () => {
        setIsCheckedFirst(!isCheckedFirst);
    };
    const toggleSecondCheckbox = () => {
        setIsCheckedSecond(!isCheckedSecond);
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
                            <SidebarItem text="Configuraciones de la cuenta" image={IMAGES.Profile} />
                        </NavLink>
                        <NavLink to="/athleteprofile">
                            <SidebarItem text="Perfil del atleta" image={IMAGES.Running} />
                        </NavLink>
                        <NavLink to="/history">
                            <SidebarItem text="Historial de pedidos" image={IMAGES.Retry} />
                        </NavLink>
                        <NavLink to="/preferences">
                            <SidebarItem text="Últimas noticias" image={IMAGES.Preferences} active/>
                        </NavLink>
                        <NavLink to="/leaderboard">
                            <SidebarItem text="Ranking" image={IMAGES.Leaderboard} />
                        </NavLink>

                    </Sidebar>
                    <div className=' overflow-y-auto w-full md:px-8 px-4 py-10'>
                        <div className='flex flex-col sm:gap-7 gap-3'>
                            <p className='font-bold sm:text-[25px] text-[22px]'>Preferencias de boletines</p>
                            <div className='flex flex-col gap-0'>
                                <p className='sm:text-[21px] text-[18px]  font-semibold'>Comunicación por correo electrónico</p>
                                <p className='sm:text-[20px] text-[15px] text-[#777777]'>Seleccione de qué listas le gustaría recibir comunicaciones</p>
                            </div>
                            <div className='w-full flex flex-col gap-10 border-2 rounded-lg py-5 px-5'>
                                <div className='flex items-center justify-between'>
                                    <p>WOD 1</p>
                                    <input
                                        type="checkbox"
                                        checked={isCheckedFirst}
                                        onChange={toggleFirstCheckbox}
                                    />
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p>WOD 2</p>
                                    <input
                                        type="checkbox"
                                        checked={isCheckedSecond}
                                        onChange={toggleSecondCheckbox}
                                    />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Preferences