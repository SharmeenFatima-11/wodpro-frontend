import React from 'react'
import IMAGES from '../../images'
import NavBar from '../../components/NavBar'

const Information = () => {
    return (
        <div className='bg-cover min-h-screen relative' style={{ backgroundImage: `url(${IMAGES.BackgroundImage2})` }}>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-80"></div>
            <div className='relative'>
                <NavBar activePage="Information" />
            </div>
            <div className='relative z-10 lg:px-14 px-9'>

                <div className='lg:pt-[30px] md:pt-[60px] pt-[25px] flex'>
                    <div className='flex-[3] flex flex-col md:gap-2 sm:gap-6 gap-3'>

                        <div className='w-full '>
                            <p className='font-bold lg:text-[35px] sm:text-[40px] text-[30px] text-white sm:text-left text-center '>
                                ¡La primera liga de Cross Training llega a España!

                            </p>
                        </div>
                        <div className='w-full'>
                            <p className='lg:text-[18px] sm:text-[17px] text-[14px] text-white sm:text-left text-center'>
                                15 de Septiembre de 2024
                            </p>
                            <p className='lg:text-[18px] sm:text-[17px] text-[14px] text-white sm:text-left text-center'>
                                Online

                            </p>
                        </div>
                        <div className='flex flex-col mt-2 w-full  gap-2'>
                            <p className='text-[19px] text-white font-semibold sm:text-left text-center' >Sobre WodPro League</p>
                            <p className='text-[17px] text-white  sm:text-left text-justify'>Únete a nosotros en este emocionante evento de crossfit donde podrás medirte con atletas de toda España. Se trata de la primera liga de CrossTraining, en la que podrás competir desde tu box y animado por tus amigos.</p>
                        </div>

                    </div>
                    <div className='lg:flex-[4] md:flex-[2] md:flex hidden relative items-center justify-center'>
                        <img src={IMAGES.Exercise1} alt='' className='absolute top-5 xl:left-[350px] lg:left-[200px] left-[100px] lg:w-[320px] lg:h-[320px] h-[200px] w-[200px] object-cover' />
                        <img src={IMAGES.Exercise2} alt='' className='absolute top-5 xl:left-[200px] lg:left-[100px]  left-[10px] lg:w-[320px] lg:h-[320px] h-[200px] w-[200px] object-cover' />
                    </div>

                </div>
            </div>
            <div className='flex relative z-10 lg:flex-row flex-col md:mt-2 mt-5'>
                {/* Overlay div with bg-black and 50% opacity */}
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0'></div>

                <div className='flex-[3]  pt-4 pb-2 px-[50px] flex flex-col gap-3 z-10 items-center justify-center'>
                    <img src={IMAGES.wod} alt='' className='lg:w-[150px] lg:h-[150px]  h-[90px] w-[90px] object-cover' />
                    <p className='text-white z-10 font-semibold text-[20px]'>WOD</p>
                    <p className='text-white z-10 text-[15px]'>Experimentarás WOD´s diversos, desafiantes y adaptados a tu nivel, para poner a prueba tus habilidades. Podrás consultar tu panel personalizado donde accederás a todas las novedades y podrás compartir tus resultados.</p>
                </div>
                <div className='flex-[3] pt-4 pb-2 px-[50px] flex flex-col gap-3 z-10 items-center justify-center'>
                    <img src={IMAGES.timetable} alt='' className='lg:w-[150px] lg:h-[150px] h-[90px] w-[90px] object-cover' />
                    <p className='text-white z-10 font-semibold text-[20px]'>Ranking</p>
                    <p className='text-white z-10 text-[15px]'>Competirás con atletas de tu misma categoría y podrás seguir tu progreso en la tabla de clasificación en tiempo real. Podrás verte en el ranking nacional, dentro de tu box, comunidad autónoma y de tu localidad.</p>
                </div>
                <div className='flex-[3] pt-4 pb-2 px-[50px] flex flex-col gap-3 z-10 items-center justify-center'>
                    <img src={IMAGES.calendar} alt='' className='lg:w-[150px] lg:h-[150px] h-[90px] w-[90px] object-cover' />
                    <p className='text-white z-10 font-semibold text-[20px]'>Calendario</p>
                    <p className='text-white z-10 text-[15px]'>Verás todas las fechas de los WODS y de publicación de resultados finales. Adapta la participación a tu agenda y vive esta inolvidable experiencia.</p>
                </div>
            </div>
        </div>
    )
}

export default Information
