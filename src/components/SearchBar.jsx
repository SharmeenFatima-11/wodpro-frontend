import React from 'react'
import IMAGES from '../images'

const SearchBar = () => {
    return (
        <div className='bg-white flex items-center pl-[15px] pr-[15px] pt-[7px] pb-[7px] border-2 rounded-[5px] w-1/2 gap-2.5'>
            <img src={IMAGES.Search} alt='' className='w-[20px] h-[22px]' />
            <input
                type="text"
                className="w-full font-secondary outline-none"
                style={{ backgroundColor: 'transparent', border: 'none' }}
                placeholder='Search...'

            />
        </div>
    )
}

export default SearchBar