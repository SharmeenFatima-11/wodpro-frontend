import React from 'react'
import NavBar from '../../components/NavBar'
import SearchBar from '../../components/SearchBar'
import IMAGES from '../../images';


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

const Ranking = () => {
    return (
        <div className='bg-cover h-screen'>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
            <div className='relative'>
                <NavBar user={true} activePage="Ranking" />
                <div className='flex flex-col gap-5 px-5 py-3 bg-white' style={{ height: 'calc(100vh - 120px)' }}>
                    <div className='flex'>
                        <div className='flex flex-row items-center justify-end w-[50%]'>

                        </div>
                        <div className='flex flex-row items-center justify-end md:w-[50%] w-[100%]'>
                            <SearchBar />
                        </div>
                    </div>
                    <div className='md:w-[70%]  w-[80%] text-black text-justify flex font-semibold md:ml-10 ml-4 sm:text-[28px] text-[22px]'>
                        ¡Descubre la clasificación de los mejores atletas de la WodPro League!
                    </div>
                    <div className='relative z-10 xl:px-14 px-4 md:pt-2 pt-1 w-full'>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 sm:flex-row sm:gap-0">
                            <div className="relative bg-transparent flex flex-col items-center justify-center border-2 sm:rounded-tl-lg sm:rounded-bl-lg border-gray-300 flex-grow">
                                <div className='w-full text-center'>
                                    <label for="year" className="block max-md:text-xl md:text-2xl text-black font-semibold sm:text-md text-sm md:py-2 py-0 md:px-4 px-0">
                                        Año
                                    </label>
                                    <select class="bg-transparent max-md:text-xl md:text-2xl w-[90%] text-[#777777] md:py-2 py-1 md:px-4 px-2  rounded leading-tight focus:outline-none focus:border-gray-500" id="year">
                                        <option value="2023">2023</option>

                                    </select>
                                </div>
                            </div>
                            {/* <div className="relative flex-grow bg-transparent border-2 border-gray-300 flex flex-col items-center justify-center">
                                <div className='w-full text-center'>
                                    <label for="Quarter Final" className="block sm:text-md text-sm text-black font-semibold md:py-2 py-0 md:px-4 px-0">
                                        Delete
                                    </label>
                                    <select class="bg-transparent w-[80%]  text-[#777777] md:py-2 py-1 md:px-4 px-2 rounded leading-tight focus:outline-none focus:border-gray-500" id="Quarter Final">
                                        <option value="Individual Quarterfinal">Individual Quarterfinal</option>

                                    </select>
                                </div>
                            </div> */}
                            <div className="relative bg-transparent flex-grow border-2 border-gray-300 flex flex-col items-center justify-center">
                                <div class="w-full text-center">
                                    <label for="Nombre del box" className="block max-md:text-xl md:text-2xl text-black font-semibold md:py-2 py-0 md:px-4 px-0">
                                        Nombre del box
                                    </label>
                                    <select class="bg-transparent xl:w-[90%] max-md:text-xl md:text-2xl text-[#777777] md:py-2 py-1 md:px-4 px-2 rounded leading-tight focus:outline-none focus:border-gray-500" id="Nombre del box">
                                        <option value="abc">abc</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center relative bg-transparent border-2 flex-grow border-gray-300">
                                <div className='w-full text-center'>
                                    <label for="Category" className="block text-center max-md:text-xl md:text-2xl text-black font-semibold md:py-2 py-0 md:px-4 px-0">
                                        Categoría
                                    </label>
                                    <select className="bg-transparent max-md:text-xl md:text-2xl xl:w-[90%] text-[#777777] md:py-2 py-1 md:px-4 px-2  rounded leading-tight focus:outline-none focus:border-gray-500" id="Category">
                                        <option value="Men">Men</option>

                                    </select>
                                </div>
                            </div>
                            <div class="flex flex-col items-center justify-center relative flex-grow bg-transparent border-2 sm:rounded-tr-lg sm:rounded-br-lg border-gray-300">
                                <div className='w-full text-center'>
                                    <label for="Sort" className="block max-md:text-xl md:text-2xl text-black font-semibold md:py-1 py-0 md:px-4 px-0">
                                        Zona
                                    </label>
                                    <select className="bg-transparent max-md:text-xl md:text-2xl max-xl:w-full xl:w-[90%] text-[#777777] md:py-2 py-1 md:px-4 px-2 rounded leading-tight focus:outline-none focus:border-gray-500" id="Sort">
                                        <option value="Overall">geográfica</option>

                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='lg:px-14 px-4 pt-5 pb-10 flex'>
                        <div className=" lg:w-full">
                            <div className="overflow-x-auto" >
                                <table className="min-w-full bg-white text-xs sm:text-sm md:text-base">
                                    <thead>
                                        <tr className='bg-black text-white '>
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
    )
}

export default Ranking