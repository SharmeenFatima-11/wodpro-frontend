import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import IMAGES from '../../images'
import Button from '../../components/Button'
import { NavLink, useNavigate } from 'react-router-dom'
import Sidebar, { SidebarItem } from '../../components/Sidebar'
import { ExpandedContext } from '../../context/Expanded'

const Dashboard = () => {
    const sidebarContext = useContext(ExpandedContext)

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
        <>
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
                                <SidebarItem text="Descripción general" image={IMAGES.Description} active />
                            </NavLink>
                            <NavLink to="/profile">
                                <SidebarItem text="Configuraciones de la cuenta" image={IMAGES.Profile} />
                            </NavLink>
                            <NavLink to="/employees">
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
                        <div className='bg-cover min-h-screen relative w-full' style={{ backgroundImage: `url(${IMAGES.DashboardImage})` }}>
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70"></div>
                            <div className='relative z-10 lg:px-14 px-9 pt-10 w-full'>
                                <div className='border-b'>
                                    <p className='text-white text-[25px]'>Descripción general</p>
                                </div>
                            </div>
                            <div className='relative z-10 lg:px-14 px-9  w-full h-full flex pt-[180px]'>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-white text-[20px]'>WOD PRO LEAGUE</p>
                                    <p className='text-white text-[35px] font-bold'>TEMPORADA 2024 / 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>

        </>

    )
}

export default Dashboard