import React, { useContext, useEffect } from 'react'
import NavBar from '../../components/NavBar'
import Sidebar, { SidebarItem } from '../../components/Sidebar'
import { ExpandedContext } from '../../context/Expanded'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../images'

const interactions = [
    {
        date : "22 Jan 2024",
        title : "RX Individual Masculinot",
        price : 250
    },
    {
        date : "22 Jan 2024",
        title : "RX Individual Masculinot",
        price : 250
    },
    {
        date : "22 Jan 2024",
        title : "RX Individual Masculinot",
        price : 250
    },
]
const History = () => {
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
                            <SidebarItem text="Historial de pedidos" image={IMAGES.Retry} active />
                        </NavLink>
                        <NavLink to="/preferences">
                            <SidebarItem text="Últimas noticias" image={IMAGES.Preferences} />
                        </NavLink>
                        <NavLink to="/leaderboard">
                            <SidebarItem text="Ranking" image={IMAGES.Leaderboard} />
                        </NavLink>

                    </Sidebar>
                    <div className=' overflow-y-auto w-full md:px-8 px-5 py-10'>
                        <div className='flex flex-col gap-7'>
                            <p className='font-bold text-[25px]'>Historial de pedidos</p>
                            
                            {
                                interactions.map((interaction)=>{
                                    return(
                                    <div className='sm:px-6 px-3 py-4 border-2 flex flex-col gap-3 rounded-md'>
                                        <p className='text-[#777777]'>{interaction.date}</p>
                                        <div className='flex flex-row items-center justify-between'>
                                            <p className='font-medium'>{interaction.title}</p>
                                            <p>{"$" + interaction.price}</p>

                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default History