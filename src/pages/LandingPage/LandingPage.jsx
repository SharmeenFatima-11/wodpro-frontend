import React from 'react'
import IMAGES from '../../images'
import NavBar from '../../components/NavBar'
import Button from '../../components/Button'
import '../LandingPage/LandingPage.css'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/signup")
    }
    const handleClick2 = () => {
        navigate("/information")
    }
    return (
        <>
            <div className='bg-cover h-screen' style={{ backgroundImage: `url(${IMAGES.BackgroundImage})` }}>
            <div className='flex flex-col items-between justify-between h-full'>
                <div>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                <div className='relative'>
                    {/* <NavBar activePage="Home" /> */}
                    <div className='flex flex-row justify-center lg:px-14 sm:px-10 px-8'>
                        <div className='lg:pt-[30px] md:pt-[50px] sm:pt-[35px] pt-[20px] justify-center items-center flex'>
                            <div className='flex-[4] flex flex-col md:gap-2 sm:gap-6 gap-3 items-center'>
                                <div className='lg:w-[50%] md:w-[60%] sm:w-[80%] flex flex-col '>
                                    <p className='font-bold lg:text-[45px] sm:text-[40px] text-[35px] text-white'>
                                    ¡La primera liga de Cross Training llega a España! 

                                    </p>
                                    <p className='font-bold lg:text-[20px] sm:text-[17px] text-[16px] text-white'>Apúntate y gana premios de hasta 30.000€. </p>
                                </div>
                                <div className='lg:w-[50%] md:w-[60%] sm:w-[80%]'>
                                    <p className='lg:text-[19px] sm:text-[17px] text-[16px] text-white'>
                                    Como en cualquier liga profesional, primero seleccionas la categoría en la que quieres competir. Cada dos semanas recibirás un WOD que deberás ejecutar, grabar y subir los resultados 
                                    </p>
                                </div>
                                <div className='flex flex-col sm:mt-2 lg:w-[50%] md:w-[60%] sm:w-[80%]'>
                                    <p className='text-[20px] text-white'>Inscripciones hasta  </p>
                                    <p className='text-[24px] text-white font-semibold'>12 de octubre 2024</p>
                                </div>
                                <div className='lg:mt-5 mt-2 flex gap-3 lg:w-[30%] md:w-[60%] sm:w-[80%]'>
                                    <Button text={"INSCRIBETE "} bgColor={"#B6B5FF"} borderColor={"#B6B5FF"} textColor={"#1A101A"} handleClick={handleClick} />
                                    {/* <Button text={"Cuéntame más"} bgColor={"transparent"} borderColor={"#B6B5FF"} textColor={"#FFFFFF"} handleClick={handleClick2} /> */}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                </div>
                <div>
                <Footer />
                </div>
                
            </div>
                <div className='absolute bottom-0 left-0 right-0 h-12 bg-[#E5FC58] text-black flex items-center'>
                    <div className='news-ticker'>
                        <div className='scrolling-wrapper flex'>
                            <p className='font-semibold'>REGÍSTRATE - </p>
                            <p>REGÍSTRATE PARA LA TEMPORADA 2024 / 2025 - </p>

                            <p className='font-semibold'>REGÍSTRATE - </p>
                            <p>REGÍSTRATE PARA LA TEMPORADA 2024 / 2025</p>
                        </div>
                    </div>
                </div>
            </div>



            {/* <div className='bg-cover min-h-screen relative' style={{ backgroundImage: `url(${IMAGES.BackgroundImage2})` }}> */}
                {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-80"></div>
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
                                    13 de octubre 2024
                                </p>
                                <p className='lg:text-[18px] sm:text-[17px] text-[14px] text-white sm:text-left text-center'>
                                    Online
                                </p>
                            </div>
                            <div className='flex flex-col mt-2 w-full  gap-2'>
                                <p className='text-[19px] text-white font-semibold sm:text-left text-center' >Sobre WodPro League
                                </p>
                                <p className='text-[17px] text-white  sm:text-left text-justify'>Únete a nosotros en este emocionante evento de crossfit donde podrás medirte con atletas de toda España. Se trata de la primera liga de CrossTraining, en la que podrás competir desde tu box y animado por tus amigos.</p>
                            </div>

                        </div>
                        <div className='lg:flex-[4] md:flex-[2] md:flex hidden relative items-center justify-center'>
                            <img src={IMAGES.Exercise1} alt='' className='absolute top-5 xl:left-[350px] lg:left-[200px] left-[100px] lg:w-[320px] lg:h-[320px] h-[200px] w-[200px] object-cover' />
                            <img src={IMAGES.Exercise2} alt='' className='absolute top-5 xl:left-[200px] lg:left-[100px]  left-[10px] lg:w-[320px] lg:h-[320px] h-[200px] w-[200px] object-cover' />
                        </div>

                    </div>
                </div> */}
                {/* <div className='flex relative z-10 lg:flex-row flex-col md:mt-2 mt-5'>
                    
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0'></div>

                    <div className='flex-[3]  pt-4 pb-2 px-[50px] flex flex-col gap-3 z-10 items-center justify-center'>
                        <img src={IMAGES.MaskGroup1} alt='' className='lg:w-[150px] lg:h-[150px]  h-[90px] w-[90px] object-cover' />
                        <p className='text-white z-10 font-semibold text-[20px]'>WOD</p>
                        <p className='text-white z-10 text-[15px]'>Experimentarás WOD´s diversos, desafiantes y adaptados a tu nivel, para poner a prueba tus habilidades. Podrás consultar tu panel personalizado donde accederás a todas las novedades y podrás compartir tus resultados.
                        </p>
                    </div>
                    <div className='flex-[3] pt-4 pb-2 px-[50px] flex flex-col gap-3 z-10 items-center justify-center'>
                        <img src={IMAGES.MaskGroup1} alt='' className='lg:w-[150px] lg:h-[150px] h-[90px] w-[90px] object-cover' />
                        <p className='text-white z-10 font-semibold text-[20px]'>Ranking</p>
                        <p className='text-white z-10 text-[15px]'>Competirás con atletas de tu misma categoría y podrás seguir tu progreso en la tabla de clasificación en tiempo real. Podrás verte en el ranking nacional, dentro de tu box, comunidad autónoma y de tu localidad.</p>
                    </div>
                    <div className='flex-[3] pt-4 pb-2 px-[50px] flex flex-col gap-3 z-10 items-center justify-center'>
                        <img src={IMAGES.MaskGroup1} alt='' className='lg:w-[150px] lg:h-[150px] h-[90px] w-[90px] object-cover' />
                        <p className='text-white z-10 font-semibold text-[20px]'>Calendario</p>
                        <p className='text-white z-10 text-[15px]'>Verás todas las fechas de los WODS y de publicación de resultados finales. Adapta la participación a tu agenda y vive esta inolvidable experiencia.</p>
                    </div>
                </div> */}
            {/* </div> */}
            {/* <div className='bg-[#171717] w-full px-10 pt-10 pb-5 flex '>
                <div className='flex-[3] flex flex-col gap-4'>
                    <p className='text-white font-bold text-[21px] md:text-left text-center'>WOD PRO LEAGUE APP</p>
                    <p className='text-white  md:text-left text-center text-[17px]'>Descárgate la aplicación de WOD Pro League, tanto en Apple Store como en Google Play.  Únete a una comunidad de amantes del CrossTraining y ponte a prueba.</p>
                    <div className='flex gap-3 items-center md:justify-start justify-center'>
                        <img src={IMAGES.Google} alt='' className='h-[60px] w-[120px]' />
                        <img src={IMAGES.App} alt='' className='h-[60px] w-[120px]' />

                    </div>
                </div>
                <div className='flex-[2] md:flex hidden items-center justify-center'>
                    <img src={IMAGES.Mobile} alt='' className='lg:h-[260px] lg:w-[320px] w-[260px] h-[200px]' />

                </div>

            </div> */}
            {/* <div className='bg-[#171717] w-full flex py-20 items-center justify-center'>
                <p className='font-bold text-[25px] text-white'>NUESTROS PATROCINADORES</p>
            </div>
            <div className='bg-[#171717] w-full flex flex-row gap-1'>
                <div className='flex flex-[1] items-center justify-center bg-white py-3 mx-2 my-2'>
                    <img src={IMAGES.Velites} alt='' className='lg:h-[200px] lg:w-[260px] w-[230px] h-[170px]' />
                </div>
                <div className='flex flex-[1] items-center justify-center bg-white py-3 mx-2 my-2'>
                    <img src={IMAGES.Ruster} alt='' className='lg:h-[200px] lg:w-[260px] w-[230px] h-[170px]' />
                </div>
            </div> */}
            {/* <div className='bg-[#171717] w-full flex flex-row sm:gap-2 gap-2'>
                <div className='flex flex-[1] items-center justify-center py-5'>
                    <img src={IMAGES.Company1} alt='' className='lg:h-[200px] lg:w-[260px] w-[230px] h-[170px]' />
                </div>
                <div className='flex flex-[1] items-center justify-center  py-5'>
                    <img src={IMAGES.Company2} alt='' className='lg:h-[200px] lg:w-[260px] w-[230px] h-[170px]' />
                </div>
                <div className='flex flex-[1] items-center justify-center  py-5'>
                    <img src={IMAGES.Company3} alt='' className='lg:h-[200px] lg:w-[260px] w-[230px] h-[170px]' />
                </div>
            </div> */}

            {/* <div className='bg-white w-full flex flex-row sm:gap-0 gap-2'>
                <div className='flex flex-[1] items-center justify-center bg-white py-5'>
                    <img src={IMAGES.Company4} alt='' className='lg:h-[200px] lg:w-[260px] w-[2Y0px] h-[170px]' />
                </div>
                <div className='flex flex-[1] items-center justify-center bg-white py-5'>
                    <img src={IMAGES.Company5} alt='' className='lg:h-[200px] lg:w-[260px] w-[230px] h-[170px]' />
                </div>
                <div className='flex flex-[1] items-center justify-center bg-white py-5'>
                    <img src={IMAGES.Company6} alt='' className='lg:h-[200px] lg:w-[260px] w-[230px] h-[170px]' />
                </div>
                <div className='flex flex-[1] items-center justify-center bg-white py-5'>
                    <img src={IMAGES.Company7} alt='' className='lg:h-[200px] lg:w-[260px] w-[230px] h-[170px]' />
                </div>
            </div> */}
            {/* <Footer /> */}
        </>

    )
}

export default LandingPage