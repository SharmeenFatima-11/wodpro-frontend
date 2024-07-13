import React from 'react'
import IMAGES from '../images'

const Footer = () => {
    return (
        <div className='bg-black flex flex-col py-8 gap-5 items-center justify-center'>
            <p className='text-white'>Siga con nosotros</p>
            <div className='flex gap-4'>
                <a href="https://www.tiktok.com/@wod.pro.league" target='_ blank'>
                    <img src={IMAGES.Tiktok} alt='Menu' className='h-10 w-10' />
                </a>
                <a href="https://www.instagram.com/wodproleague/" target='_ blank'>
                    <img src={IMAGES.Insta} alt='Menu' className='h-10 w-10' />
                </a>
                <img src={IMAGES.Youtube} alt='Menu' className='h-10 w-10' />
                <img src={IMAGES.Facebook} alt='Menu' className='h-10 w-10' />
            </div>
            <div className='flex gap-2'>
                <p className='text-white text-[13px]'>Política de privacidad</p>
                <p className='text-white text-[13px]'>Contacta con nosotros</p>

            </div>
        </div>
    )
}

export default Footer