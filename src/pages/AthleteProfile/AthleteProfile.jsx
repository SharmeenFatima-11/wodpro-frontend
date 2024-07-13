import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import Sidebar, { SidebarItem } from '../../components/Sidebar'
import { ExpandedContext } from '../../context/Expanded'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../images'

const profiles = [
    "SENTADILLA DE ESPALDA",
    "CHAD1000X",
    "LIMPIO Y JERK",
    "SENTADILLA DE ESPALDA",
    "CHAD1000X",
    "LIMPIO Y JERK",
    "SENTADILLA DE ESPALDA",
    "CHAD1000X",
    "LIMPIO Y JERK",
    "SENTADILLA DE ESPALDA",
    "CHAD1000X",
    "LIMPIO Y JERK",

]

const AthleteProfile = () => {
    const [coverPic, setCoverPic] = useState("");
    const [coverPic2, setCoverPic2] = useState("");

    const sidebarContext = useContext(ExpandedContext)

    const handleFileChange = (e) => {
        setCoverPic(e.target.files[0]);
    };
    const handleFileChange2 = (e) => {
        setCoverPic2(e.target.files[0]);
    };

    const [cm, setCm] = useState('');
    const [kgs, setKgs] = useState('');



    const handleChange = (event) => {
        setCm(event.target.value);
    };
    const handleChangeKgs = (event) => {
        setKgs(event.target.value);
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
                            <SidebarItem text="Perfil del atleta" image={IMAGES.Running} active />
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
                    <div className=' overflow-y-auto w-full md:px-8 px-5 py-10'>
                        <div className='flex flex-col gap-7'>
                            <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:gap-0 gap-3'>
                                <p className='font-semibold text-[25px] sm:text-left text-center'>Perfil del atleta</p>
                                <div className='flex items-center justify-center px-3 py-2 font-medium text-[#B6B5FF] cursor-pointer bg-black rounded-md'>
                                    Ver perfil del atleta
                                </div>
                            </div>
                            <div className=' flex flex-col gap-3 mt-3'>
                                <p className='font-semibold text-lg md:ml-5'>Imagen de perfil</p>
                                <div className='flex-[1] border-2 rounded-lg py-8 md:px-5 px-2 flex border-b lg:gap-0 gap-3'>
                                    <div className='flex-[1] flex items-center justify-center'>
                                        {coverPic ? (
                                            <img
                                                src={URL.createObjectURL(coverPic)}
                                                alt="Profile"
                                                className="sm:w-[80px] sm:h-[80px] h-[60px] w-[60px] rounded-full object-cover"
                                            />
                                        ) : (
                                            <img
                                                src={IMAGES.InputImage}
                                                alt="ABC"
                                                className="sm:w-[80px] sm:h-[80px] h-[60px] w-[60px]  rounded-full object-cover"
                                            />
                                        )}

                                        <input
                                            id="profilePic"
                                            type="file"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                    <div className='flex-[3] flex flex-col'>
                                        <button
                                            className="mt-2 sm:p-2 p-1 bg-white border-2 border-black lg:w-[30%] md:w-[40%] sm:w-[50%] w-[90%] text-black rounded"
                                            onClick={() => document.getElementById('profilePic').click()}
                                        >
                                            Cambiar la imagen
                                        </button>
                                        <p className='text-[#777777] sm:text-[16px] text-[14px] text-justify'>Los archivos deben ser JPEG, PNG o GIF y no superar los 3 MB.</p>
                                    </div>

                                </div>


                            </div>
                            <div className=' flex flex-col gap-3 mt-6'>
                                <p className='font-semibold text-lg md:ml-5'>Banner de perfil</p>
                                <div className='flex-[1] border-2 rounded-lg py-8 md:px-5 px-2 flex border-b lg:gap-0 gap-3'>
                                    <div className='w-[40%] flex items-center justify-center'>
                                        {coverPic2 ? (
                                            <img
                                                src={URL.createObjectURL(coverPic2)}
                                                alt="Profile"
                                                className="w-[380px] h-[180px]"
                                            />
                                        ) : (
                                            <img
                                                src={IMAGES.Deadlift}
                                                alt="ABC"
                                                className="w-[380px] h-[180px]"
                                            />
                                        )}

                                        <input
                                            id="profilePic2"
                                            type="file"
                                            className="hidden"
                                            onChange={handleFileChange2}
                                        />
                                    </div>
                                    <div className='w-[60%] flex flex-col sm:items-start sm:justify-center items-center justify-center'>
                                        <button
                                            className="mt-2 sm:p-2 p-1 bg-white border-2 border-black lg:w-[30%] md:w-[50%] sm:w-[60%] w-[100%] text-black rounded"
                                            onClick={() => document.getElementById('profilePic2').click()}
                                        >
                                            Cambiar la imagen
                                        </button>
                                        <p className='text-[#777777] sm:text-[16px] text-[14px] text-justify'>Los archivos deben ser JPEG, PNG o GIF y no superar los 3 MB.</p>
                                    </div>

                                </div>


                            </div>

                            <div className=' flex flex-col gap-3 mt-6'>
                                <div className='flex flex-col gap-1'>
                                    <p className='font-semibold text-lg md:ml-5'>Configuración de perfil</p>
                                    <p className='text-sm md:ml-5 text-[#777777]'>Cambie los datos públicos de su cuenta.</p>
                                </div>
                                <div className='flex-[1] border-2 rounded-lg py-8 md:px-5 px-2 flex border-b lg:gap-0 gap-3'>
                                    <div className='flex-[1] flex items-center justify-center'>
                                        <p>Bio</p>
                                    </div>
                                    <div className='flex-[3] flex flex-col'>
                                        <button
                                            className="mt-2 sm:p-2 p-1 lg:w-[30%] md:w-[50%] sm:w-[60%] w-[100%] bg-white border-2 border-black  text-black rounded"

                                        >
                                            Agregar biografía
                                        </button>
                                    </div>

                                </div>


                            </div>
                            <div className='flex flex-col gap-3 mt-6'>
                                <div className='flex flex-col gap-1'>
                                    <p className='font-semibold text-lg md:ml-5'>Características físicas:</p>
                                    <p className='text-sm md:ml-5 text-[#777777]'>Actualiza tus atributos físicos.</p>

                                </div>
                                <div className='flex flex-col border-2 rounded-lg'>
                                    <div className='flex-[1] md:py-8 py-6 md:px-5 px-2 border-b lg:gap-0 md:gap-3 gap-6 flex md:flex-row flex-col  items-center justify-between'>
                                        <div className='flex flex-row sm:gap-10 gap-1 items-center'>
                                            <p className='sm:w-[50px] w-[40px]'>Altura</p>
                                            <input
                                                className='py-1 px-3 border-2 rounded-md'
                                                type="number"
                                                id="cmInput"
                                                value={cm}
                                                onChange={handleChange}
                                                placeholder="cm"
                                            />

                                        </div>
                                        <div className='flex flex-row gap-5'>
                                            <div className='md:py-2 py-1 md:px-6 px-4 bg-black flex items-center cursor-pointer rounded-md text-[#B6B5FF]'>
                                                Guardar
                                            </div>
                                            <div className='md:py-2 py-1 md:px-6 px-4 bg-white rounded-md cursor-pointer text-black border-2 flex items-center border-black'>
                                                Cancelar
                                            </div>
                                        </div>


                                    </div>

                                    <div className='flex-[1] md:py-8 py-6 md:px-5 px-2 border-b lg:gap-0 md:gap-3 gap-6 flex md:flex-row flex-col  items-center justify-between'>
                                        <div className='flex flex-row sm:gap-10 gap-1 items-center'>
                                            <p className='sm:w-[50px] w-[40px]'>Peso</p>
                                            <input
                                                className='py-1 px-3 border-2 rounded-md'
                                                type="number"
                                                id="kgsInput"
                                                value={kgs}
                                                onChange={handleChangeKgs}
                                                placeholder="kgs"
                                            />

                                        </div>
                                        <div className='flex flex-row gap-5'>
                                            <div className='md:py-2 py-1 md:px-6 px-4 bg-black flex cursor-pointer items-center rounded-md text-[#B6B5FF]'>
                                                Guardar
                                            </div>
                                            <div className='md:py-2 py-1 md:px-6 px-4 bg-white rounded-md text-black border-2  cursor-pointer flex items-center border-black'>
                                                Cancelar
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            {/* <div className='flex flex-col gap-3 mt-6'>
                                <div className='flex flex-col gap-1'>
                                    <p className='font-semibold text-lg md:ml-5'>Puntos de referencia</p>
                                    <p className='text-sm md:ml-5 text-[#777777]'>Realice un seguimiento de sus puntos de referencia. Estos se muestran en su perfil público de atleta.</p>

                                </div>
                                <div className='flex mt-3 '>
                                    <div className="grid md:grid-cols-2 flex-[1] lg:grid-cols-3 gap-4">
                                        {profiles.map((profile, index) => (
                                            <div key={index} className="border-2 py-3 px-4 rounded-md">
                                                <div className='flex flex-col gap-10'>
                                                    <div className='flex flex-row items-center justify-between'>
                                                        <p className='font-bold'>{profile}</p>
                                                        <img src={IMAGES.Edit} alt='' className='w-[20px] h-[24px] cursor-pointer ' />
                                                    </div>
                                                    <p className='font-bold'>_</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div> */}



                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default AthleteProfile