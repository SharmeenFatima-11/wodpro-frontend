import React from 'react'
import NavBar from '../../components/NavBar'
import IMAGES from '../../images'
import Button from '../../components/Button'

const ContactUs = () => {
    return (
        <div className='bg-cover h-screen' style={{ backgroundImage: `url(${IMAGES.BackgroundImage})` }}>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
            {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div> */}
            <div className='relative'>
                <NavBar user={true} activePage="Contact" />
                <div className='flex text-white bg-transparent items-center lg:justify-start max-lg:justify-center max-lg:items-center md:pl-[60px]' style={{ height: 'calc(100vh - 120px)' }}>
                    <div className='flex flex-col gap-10 max-md:px-14'>
                        <div className='flex flex-col'>
                            <p className='font-bold text-[22px]'>¿Dudas? ¿Sugerencias? ¡Contáctanos!</p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='font-bold text-[20px]'>
                                Correo electrónico
                            </div>
                            <div className=' text-[18px]'>
                                Atletas: hola@WodProLeague.com
                            </div>
                            <div className='text-[18px]'>
                                Patrocinadores o Gimnasios:
                                patrocinadores@wodproleague.es
                            </div>
                            {/* <div className='flex flex-col gap-5'>
                                <p className='font-semibold text-[18px]'>Dirección Corporativa:</p>
                                <p className='text-[18px]'>Dirección Dirección Dirección</p>
                                <p className='text-[18px]'>Dirección Dirección</p>
                                <p className='font-semibold text-[18px]'>Dirección de envio:</p>
                                <p className='text-[18px]'>Dirección Dirección Dirección</p>
                                <p className='text-[18px]'>Dirección Dirección</p>
                            </div> */}
                        </div>
                    </div>
                </div>
               
            </div>

        </div>
    )
}

export default ContactUs