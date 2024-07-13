import React from 'react'
import NavBar from '../../components/NavBar'
import IMAGES from '../../images'

const Premios = () => {

    const Mastertable = ({ first }) => {
        return (
            <table>
                <thead className=''>
                    {/* {first &&
                        <tr className=''>
                            <td className='w-32'>Categories</td>
                            <td className='w-32'>PREMIOS</td>
                        </tr>
                    } */}
                </thead>
                <tbody>
                    {/* <tr className=''>
                        <td className='w-44'>Masters +40 Masculino</td>
                        <td className='w-32'>110 €</td>
                    </tr> */}
                    <tr className=''>
                        <td className='w-44'>Masters +40 Femenino</td>
                        <td className='w-32'>110 €</td>
                    </tr>
                    <tr className=''>
                        <td className='w-44'>Masters +50 Masculino</td>
                        <td className='w-32'>110 €</td>
                    </tr>
                    <tr className=''>
                        <td className='w-44'>Masters +50 Femenino</td>
                        <td className='w-32'>110 € </td>
                    </tr>
                </tbody>
            </table>
        )
    }

    const SingleTable = ({ first, p1, p2, p3, p4 }) => {
        return (
            <table>
                <thead className=''>
                    {/* {first &&
                        <tr className=''>
                            <td className='w-32'>Categories</td>
                            <td className='w-32'>Premios</td>
                        </tr>
                    } */}
                </thead>
                <tbody>
                    {/* <tr className='overflow-x-auto'>
                        <td className='w-44'>Individual Muscilano</td>
                        <td className='w-32'>{p1} €</td>
                    </tr> */}
                    <tr className=''>
                        <td className='w-44'>Individual Femenino</td>
                        <td className='w-32'>{p2} €</td>
                    </tr>
                    <tr className=''>
                        <td className='w-44'>Perajas MM</td>
                        <td className='w-32'>{p3} €</td>
                    </tr>
                    <tr className=''>
                        <td className='w-44'>Equiqpos MMMF</td>
                        <td className='w-32'>{p4} € </td>
                    </tr>
                </tbody>
            </table>
        )
    }

    const OtherTable = ({ first }) => {
        return (
            <table>
                <thead className=''>
                    {/* {first &&
                        <tr>

                            <td className='w-32'>Premier Premio</td>
                            <td className='w-32'>Segundo Premio</td>
                            <td className='w-32'>Tracer Premio</td>
                        </tr>
                    } */}
                </thead>
                <tbody>
                    {/* <tr className=''>
                        <td className='w-32'>2.000</td>
                        <td className='w-32'>1.000</td>
                        <td className='w-32'>500</td>
                    </tr> */}
                    <tr className=''>
                        <td className='w-32'>2.000</td>
                        <td className='w-32'>1.000</td>
                        <td className='w-32'>500</td>
                    </tr>
                    <tr className=''>
                        <td className='w-32'>2.000</td>
                        <td className='w-32'>1.000</td>
                        <td className='w-32'>500</td>
                    </tr>
                    <tr className=''>
                        <td className='w-32'>2.000</td>
                        <td className='w-32'>1.000</td>
                        <td className='w-32'>500</td>
                    </tr>
                </tbody>
            </table>
        )
    }


    return (
        <div className='bg-cover  min-h-screen' style={{ backgroundImage: `url(${IMAGES.BackgroundImage})` }}>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
            <div className='relative'>
                <NavBar activePage="Premios" />
                <div className='flex  text-white bg-transparent items-center md:justify-start justify-center md:pl-[60px] py-10' >
                    <div className='flex flex-col gap-10 max-lg:mx-8 flex-1 '>
                        <div className='flex flex-col'>
                            {/* <p className='font-bold text-[22px]'>PREMIOS</p> */}
                        </div>
                        <div>
                            <div className='flex flex-1 flex-col gap-6 px-2 md:px-0'>
                                <div className='flex flex-1 gap-8 flex-col md:flex-row'>
                                    <div className=' flex flex-col flex-1'>
                                        <div className='flex py-6 justify-center font-bold'>
                                            <p className='text-2xl'>PREMIOS RX</p>
                                        </div>
                                        <div className='flex text-white gap-6'>
                                            <div className='flex font-bold text-sm flex-1 flex-col gap-5'>
                                                <p></p>
                                                <p></p>
                                                <p>INDIVIDUAL MASCULINO</p>
                                                <p>INDIVIDUAL FEMENINO</p>
                                                <p>PAREJAS MM</p>
                                                <p>EQUIPOS MMMF</p>
                                            </div>
                                            <div className='flex flex-col flex-1 gap-4'>
                                                <div className='underline'>
                                                    <div className='flex gap-6 text-xs'>
                                                        <p>1° PUESTO</p>
                                                        <p>2° PUESTO</p>
                                                        <p>3° PUESTO</p>
                                                    </div>
                                                </div>
                                                <div className='flex gap-6'>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                </div>
                                                <div className='flex gap-6'>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                </div>
                                                <div className='flex gap-6'>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                </div>
                                                <div className='flex gap-6'>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' flex flex-col flex-1'>
                                        <div className='flex py-6 justify-center font-bold'>
                                            <p className='text-2xl'>PREMIOS INTERMEIDO</p>
                                        </div>
                                        <div className='flex text-white gap-6'>
                                            <div className='flex font-bold text-sm flex-1 flex-col gap-5'>
                                                <p></p>
                                                <p></p>
                                                <p>INDIVIDUAL MASCULINO</p>
                                                <p>INDIVIDUAL FEMENINO</p>
                                                <p>PAREJAS MM</p>
                                                <p>EQUIPOS MMMF</p>
                                            </div>
                                            <div className='flex flex-col flex-1 gap-4'>
                                                <div className='underline'>
                                                    <div className='flex gap-6 text-xs'>
                                                        <p>1° PUESTO</p>
                                                        <p>2° PUESTO</p>
                                                        <p>3° PUESTO</p>
                                                    </div>
                                                </div>
                                                <div className='flex gap-6'>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                </div>
                                                <div className='flex gap-6'>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                </div>
                                                <div className='flex gap-6'>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                </div>
                                                <div className='flex gap-6'>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-1 gap-8 flex-col md:flex-row'>
                                    <div className=' flex flex-col flex-1'>
                                        <div className='flex py-6 justify-center font-bold'>
                                            <p className='text-2xl'>PREMIOS MASTERS</p>
                                        </div>
                                        <div className='flex text-white gap-6'>
                                            <div className='flex font-bold text-sm flex-1 flex-col gap-5'>
                                                <p></p>
                                                <p></p>
                                                <p>INDIVIDUAL MASCULINO</p>
                                                <p>INDIVIDUAL FEMENINO</p>
                                                <p>PAREJAS MM</p>
                                                <p>EQUIPOS MMMF</p>
                                            </div>
                                            <div className='flex flex-col flex-1 gap-4'>
                                                <div className='underline'>
                                                    <div className='flex gap-6 text-xs'>
                                                        <p>1° PUESTO</p>
                                                        <p>2° PUESTO</p>
                                                        <p>3° PUESTO</p>
                                                    </div>
                                                </div>
                                                <div className='flex gap-6'>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                </div>
                                                <div className='flex gap-6'>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                </div>
                                                <div className='flex gap-6'>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                </div>
                                                <div className='flex gap-6'>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                    <p>2000 €</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' flex flex-col flex-1'>
                                        <div className='flex py-6 justify-center font-bold'>
                                            <p className='text-2xl'>PREMIOS ESCALADO</p>
                                        </div>
                                        <div className='flex text-white gap-6'>
                                            <div className='flex font-bold text-sm flex-1 flex-col gap-5'>
                                                <p></p>
                                                <p></p>
                                                <p>INDIVIDUAL MASCULINO</p>
                                                <p>INDIVIDUAL FEMENINO</p>
                                                <p>PAREJAS MM</p>
                                                <p>EQUIPOS MMMF</p>
                                            </div>
                                            <div className='flex flex-col flex-1 gap-4'>
                                                <div className='underline'>
                                                    <div className='flex gap-6 text-xs'>
                                                        <p>1° PUESTO</p>
                                                        <p>2° PUESTO</p>
                                                        <p>3° PUESTO</p>
                                                    </div>
                                                </div>
                                                <div className='flex gap-6'>
                                                    <p>RAGLOS PATROCINADORES</p>
                                                </div>
                                                <div className='flex gap-6'>
                                                    <p>RAGLOS PATROCINADORES</p>
                                                </div>
                                                <div className='flex gap-6'>
                                                    <p>RAGLOS PATROCINADORES</p>
                                                </div>
                                                <div className='flex gap-6'>
                                                    <p>RAGLOS PATROCINADORES</p>
                                                </div>
                                            </div>
                                        </div>
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

export default Premios
