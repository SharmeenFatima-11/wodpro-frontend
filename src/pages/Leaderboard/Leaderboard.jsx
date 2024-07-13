import React, { useContext, useEffect } from 'react'
import { ExpandedContext } from '../../context/Expanded'
import NavBar from '../../components/NavBar'
import Sidebar, { SidebarItem } from '../../components/Sidebar'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../images'

const athletes = [
    {
        rank: 1,
        name: 'MARTIN DVORAK',
        flag: '🇺🇸',
        points: 22070,
        gym: '802 CrossFit',
        age: 19,
        height: '6\'3"',
        weight: '135 lb',
        events: [
            { name: 'EJERCICIO 1', position: '1st', reps: '90 reps' },
            { name: 'EJERCICIO 2', position: '8th', reps: '522 reps' },
            { name: 'EJERCICIO 3', position: '30th', reps: '400 reps' },
            { name: 'EJERCICIO 4', position: '11th', reps: '545 reps' },
            { name: 'EJERCICIO 5', position: '3rd', reps: '450 reps' },
        ],
    },
    {
        rank: 1,
        name: 'MARTIN DVORAK',
        flag: '🇺🇸',
        points: 22070,
        gym: '802 CrossFit',
        age: 19,
        height: '6\'3"',
        weight: '135 lb',
        events: [
            { name: 'EJERCICIO 1', position: '1st', reps: '90 reps' },
            { name: 'EJERCICIO 2', position: '8th', reps: '522 reps' },
            { name: 'EJERCICIO 3', position: '30th', reps: '400 reps' },
            { name: 'EJERCICIO 4', position: '11th', reps: '545 reps' },
            { name: 'EJERCICIO 5', position: '3rd', reps: '450 reps' },
        ],
    },
    {
        rank: 1,
        name: 'MARTIN DVORAK',
        flag: '🇺🇸',
        points: 22070,
        gym: '802 CrossFit',
        age: 19,
        height: '6\'3"',
        weight: '135 lb',
        events: [
            { name: 'EJERCICIO 1', position: '1st', reps: '90 reps' },
            { name: 'EJERCICIO 2', position: '8th', reps: '522 reps' },
            { name: 'EJERCICIO 3', position: '30th', reps: '400 reps' },
            { name: 'EJERCICIO 4', position: '11th', reps: '545 reps' },
            { name: 'EJERCICIO 5', position: '3rd', reps: '450 reps' },
        ],
    },
    {
        rank: 1,
        name: 'MARTIN DVORAK',
        flag: '🇺🇸',
        points: 22070,
        gym: '802 CrossFit',
        age: 19,
        height: '6\'3"',
        weight: '135 lb',
        events: [
            { name: 'EJERCICIO 1', position: '1st', reps: '90 reps' },
            { name: 'EJERCICIO 2', position: '8th', reps: '522 reps' },
            { name: 'EJERCICIO 3', position: '30th', reps: '400 reps' },
            { name: 'EJERCICIO 4', position: '11th', reps: '545 reps' },
            { name: 'EJERCICIO 5', position: '3rd', reps: '450 reps' },
        ],
    },
    {
        rank: 1,
        name: 'MARTIN DVORAK',
        flag: '🇺🇸',
        points: 22070,
        gym: '802 CrossFit',
        age: 19,
        height: '6\'3"',
        weight: '135 lb',
        events: [
            { name: 'EJERCICIO 1', position: '1st', reps: '90 reps' },
            { name: 'EJERCICIO 2', position: '8th', reps: '522 reps' },
            { name: 'EJERCICIO 3', position: '30th', reps: '400 reps' },
            { name: 'EJERCICIO 4', position: '11th', reps: '545 reps' },
            { name: 'EJERCICIO 5', position: '3rd', reps: '450 reps' },
        ],
    }, {
        rank: 1,
        name: 'MARTIN DVORAK',
        flag: '🇺🇸',
        points: 22070,
        gym: '802 CrossFit',
        age: 19,
        height: '6\'3"',
        weight: '135 lb',
        events: [
            { name: 'EJERCICIO 1', position: '1st', reps: '90 reps' },
            { name: 'EJERCICIO 2', position: '8th', reps: '522 reps' },
            { name: 'EJERCICIO 3', position: '30th', reps: '400 reps' },
            { name: 'EJERCICIO 4', position: '11th', reps: '545 reps' },
            { name: 'EJERCICIO 5', position: '3rd', reps: '450 reps' },
        ],
    },
    {
        rank: 1,
        name: 'MARTIN DVORAK',
        flag: '🇺🇸',
        points: 22070,
        gym: '802 CrossFit',
        age: 19,
        height: '6\'3"',
        weight: '135 lb',
        events: [
            { name: 'EJERCICIO 1', position: '1st', reps: '90 reps' },
            { name: 'EJERCICIO 2', position: '8th', reps: '522 reps' },
            { name: 'EJERCICIO 3', position: '30th', reps: '400 reps' },
            { name: 'EJERCICIO 4', position: '11th', reps: '545 reps' },
            { name: 'EJERCICIO 5', position: '3rd', reps: '450 reps' },
        ],
    },


];

const Leaderboard = () => {
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


                                <button className='sm:flex hidden ' onClick={() => sidebarContext.setExpanded(!(sidebarContext.expanded))} >
                                    <img src={IMAGES.Menu} alt='' className='w-[30px] h-[30px] ' />
                                </button>
                            </div>
                            <NavLink to="/dashboard">
                                <SidebarItem text="Descripción general" image={IMAGES.Description} />
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
                                <SidebarItem text="Ranking" image={IMAGES.Leaderboard} active />
                            </NavLink>

                        </Sidebar>
                        <div className='bg-cover min-h-screen relative w-full' style={{ backgroundImage: `url(${IMAGES.Crossfit})` }}>
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70"></div>
                            <div className='relative z-10 xl:px-20 lg:px-20 px-4 md:pt-10 pt-4 '>
                                <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 sm:flex-row sm:gap-0">
                                    <div class="relative  flex flex-col items-center justify-center bg-transparent border-2 sm:rounded-tl-lg sm:rounded-bl-lg border-gray-300 flex-grow">
                                        <div className='w-full text-center'>
                                            <label for="year" class="block text-white sm:text-md text-sm md:py-2 py-0 md:px-4 px-0">
                                                Año
                                            </label>
                                            <select class="bg-transparent w-[50%] text-white md:py-2 py-1 md:px-4 px-2  rounded leading-tight focus:outline-none focus:border-gray-500" id="year">
                                                <option value="2023">2023</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* <div class="relative flex-grow bg-transparent border-2 flex flex-col items-center justify-center border-gray-300">
                                        <div className='w-full text-center'>
                                            <label for="Quarter Final" class="block sm:text-md text-sm text-white md:py-2 py-0 md:px-4 px-0">
                                                Quarter Final
                                            </label>
                                            <select class="bg-transparent w-[80%]  text-white md:py-2 py-1 md:px-4 px-2 rounded leading-tight focus:outline-none focus:border-gray-500" id="Quarter Final">
                                                <option value="Individual Quarterfinal">Individual Quarterfinal</option>

                                            </select>
                                        </div>
                                    </div> */}
                                    <div class="relative bg-transparent flex-grow border-2 border-gray-300 flex flex-col items-center justify-center">
                                        <div className='w-full text-center'>
                                            <label for="Nombre del box" class="block sm:text-md text-sm text-white md:py-2 py-0 md:px-4 px-0">
                                                Nombre del box
                                            </label>
                                            <select class="bg-transparent  w-[50%] text-white md:py-2 py-1 md:px-4 px-2  rounded leading-tight focus:outline-none focus:border-gray-500" id="Nombre del box">
                                                <option value="abc">abc</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div class="relative bg-transparent border-2 flex-grow border-gray-300 flex flex-col items-center justify-center">
                                        <div className='w-full text-center'>
                                            <label for="Category" class="block text-center  sm:text-md text-sm text-white md:py-2 py-0 md:px-4 px-0">
                                                Categoría
                                            </label>
                                            <select class="bg-transparent w-[50%] text-white md:py-2 py-1 md:px-4 px-2  rounded leading-tight focus:outline-none focus:border-gray-500" id="Category">
                                                <option value="Men">Men</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col items-center justify-center flex-grow bg-transparent border-2 sm:rounded-tr-lg sm:rounded-br-lg border-gray-300">
                                        <div className='w-full text-center'>
                                            <label for="Sort" class="block text-center sm:text-md text-sm text-white md:py-2 py-0 md:px-4 px-0">
                                                Zona
                                            </label>
                                            <select class="bg-transparent w-[50%] text-white md:py-2 py-1 md:px-4 px-2 rounded leading-tight focus:outline-none focus:border-gray-500" id="Sort">
                                                <option value="Overall">geográfica</option>

                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='relative z-10 lg:px-14 px-4 pt-5 w-full h-full flex flex-grow'>
                                <div className="overflow-x-auto w-full">
                                    <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 160px)' }}>
                                        <table className="min-w-full bg-white text-xs sm:text-sm md:text-base">

                                            <thead>
                                                <tr className='bg-black text-white'>
                                                    <th className="px-2 sm:px-4 py-1 sm:py-2">RANGO</th>
                                                    <th className="px-2 sm:px-4 py-1 sm:py-2">NOMBRE</th>
                                                    <th className="px-2 sm:px-4 py-1 sm:py-2">PUNTOS</th>
                                                    <th className="px-2 sm:px-4 py-1 sm:py-2">WOD 1</th>
                                                    <th className="px-2 sm:px-4 py-1 sm:py-2">WOD 2</th>
                                                    <th className="px-2 sm:px-4 py-1 sm:py-2">WOD 3</th>
                                                    <th className="px-2 sm:px-4 py-1 sm:py-2">WOD 4</th>
                                                    <th className="px-2 sm:px-4 py-1 sm:py-2">WOD 5</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">

                                                {athletes.map((athlete, index) => (
                                                    <tr key={index}>
                                                        <td className="border px-2 sm:px-4 py-1 sm:py-2">{athlete.rank}</td>
                                                        <td className="border px-2 sm:px-4 py-1 sm:py-2 flex items-center justify-center gap-3">
                                                            <img src={IMAGES.Athlete} alt='' className='w-12 h-12 ml-5 sm:w-16 sm:h-16 rounded-lg' />
                                                            <div className='sm:px-2 sm:py-2 mr-5 py-3'>
                                                                <p className="font-bold">{athlete.name} <span className="font-normal">{athlete.flag}</span></p>
                                                                <p className="text-xs sm:text-sm">{athlete.gym}</p>
                                                                <p className="text-xs sm:text-sm">Age {athlete.age}</p>
                                                                <p className="text-xs sm:text-sm">{athlete.height} | {athlete.weight}</p>
                                                            </div>
                                                        </td>
                                                        <td className="border px-2 sm:px-4 py-1 sm:py-2">{athlete.points}</td>
                                                        {athlete.events.map((event, eventIndex) => (
                                                            <td key={eventIndex} className="border px-2 sm:px-4 py-1 sm:py-2">
                                                                {event.position}
                                                                <div>{event.reps}</div>
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>



                </div>

            </div>

        </>

    )
}

export default Leaderboard