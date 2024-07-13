import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import Button from '../../components/Button'
import IMAGES from '../../images'
import './Calendar.css'

const months = [
    // {
    //     id: 'jan', name: 'Ene', content: {
    //         heading: 'Wod 1',
    //         timeline: 'Jan 14 - Jan 20',
    //         title: 'Title for March Event',
    //         description: 'Description of the March event and more details.',
    //         startDate: '2024-03-01',
    //         endDate: '2024-03-31'
    //     }
    // },
    // {
    //     id: 'feb', name: 'Feb', content: {
    //         heading: 'Wod 2',
    //         timeline: 'Feb 14 - Feb 20',
    //         title: 'Title for March Event',
    //         description: 'Description of the March event and more details.',
    //         startDate: '2024-03-01',
    //         endDate: '2024-03-31'
    //     }
    // },
    // {
    //     id: 'mar', name: 'Mar', content: {
    //         heading: 'Wod 3',
    //         timeline: 'Mar 14 - Mar 20',
    //         title: 'Title for March Event',
    //         description: 'Description of the March event and more details.',
    //         startDate: '2024-03-01',
    //         endDate: '2024-03-31'
    //     }
    // },
    // {
    //     id: 'apr', name: 'Abr', content: {
    //         heading: 'Wod 4',
    //         timeline: 'Apr 14 - Apr 20',
    //         title: 'Title for March Event',
    //         description: 'Description of the March event and more details.',
    //         startDate: '2024-03-01',
    //         endDate: '2024-03-31'
    //     }
    // },
    // {
    //     id: 'may', name: 'May', content: {
    //         heading: 'Wod 5',
    //         timeline: 'May 14 - May 20',
    //         title: 'Title for March Event',
    //         description: 'Description of the March event and more details.',
    //         startDate: '2024-03-01',
    //         endDate: '2024-03-31'
    //     }
    // },
    // {
    //     id: 'jun', name: 'Jun', content: {
    //         heading: 'Wod 6',
    //         timeline: 'Jun 14 - Jun 20',
    //         title: 'Title for March Event',
    //         description: 'Description of the March event and more details.',
    //         startDate: '2024-03-01',
    //         endDate: '2024-03-31'
    //     }
    // },
    // {
    //     id: 'jul', name: 'Jul', content: {
    //         heading: 'Wod 7',
    //         timeline: 'July 14 - July 20',
    //         title: 'Title for March Event',
    //         description: 'Description of the March event and more details.',
    //         startDate: '2024-03-01',
    //         endDate: '2024-03-31'
    //     }
    // },
    // {
    //     id: 'aug', name: 'Ago', content: {
    //         heading: 'Wod 8',
    //         timeline: 'Aug 14 - Aug 20',
    //         title: 'Title for March Event',
    //         description: 'Description of the March event and more details.',
    //         startDate: '2024-03-01',
    //         endDate: '2024-03-31'
    //     }
    // },
    {
        id: 'sept', name: 'Sept', content: {
            heading: 'Wod 1',
            timeline: 'Sept 14 - Sept 20',
            title: 'Más información próximamente',
            description: 'Description of the March event and more details.',
            startDate: '2024-10-13',
            endDate: '2024-11-03'
        }
    },
    {
        id: 'oct', name: 'Oct', content: {
            heading: 'Wod 2',
            timeline: 'Oct 14 - Oct 20',
            title: 'Más información próximamente',
            description: 'Description of the March event and more details.',
            startDate: '2024-11-03',
            endDate: '2024-11-24'
        }
    },
    {
        id: 'nov', name: 'Nov', content: {
            heading: 'Wod 3',
            timeline: 'Nov 14 - Nov 20',
            title: 'Más información próximamente',
            description: 'Description of the March event and more details.',
            startDate: '2024-11-24',
            endDate: '2024-12-15'
        }
    },
    {
        id: 'dec', name: 'Dic', content: {
            heading: 'Wod 4',
            timeline: 'Dec 14 - Dec 20',
            title: 'Más información próximamente',
            description: 'Description of the March event and more details.',
            startDate: '2024-12-15',
            endDate: '2025-01-05'
        }
    },

];

const months2 = [
    // {
    //     id: 'jan', name: 'Ene', content: {
    //         heading: 'Wod 1',
    //         timeline: 'Jan 14 - Jan 20',
    //         title: 'Title for March Event',
    //         description: 'Description of the March event and more details.',
    //         startDate: '2024-03-01',
    //         endDate: '2024-03-31'
    //     }
    // },
    // {
    //     id: 'feb', name: 'Feb', content: {
    //         heading: 'Wod 2',
    //         timeline: 'Feb 14 - Feb 20',
    //         title: 'Title for March Event',
    //         description: 'Description of the March event and more details.',
    //         startDate: '2024-03-01',
    //         endDate: '2024-03-31'
    //     }
    // },
    // {
    //     id: 'mar', name: 'Mar', content: {
    //         heading: 'Wod 3',
    //         timeline: 'Mar 14 - Mar 20',
    //         title: 'Title for March Event',
    //         description: 'Description of the March event and more details.',
    //         startDate: '2024-03-01',
    //         endDate: '2024-03-31'
    //     }
    // },
    // {
    //     id: 'apr', name: 'Abr', content: {
    //         heading: 'Wod 4',
    //         timeline: 'Apr 14 - Apr 20',
    //         title: 'Title for March Event',
    //         description: 'Description of the March event and more details.',
    //         startDate: '2024-03-01',
    //         endDate: '2024-03-31'
    //     }
    // },
    // {
    //     id: 'may', name: 'May', content: {
    //         heading: 'Wod 5',
    //         timeline: 'May 14 - May 20',
    //         title: 'Title for March Event',
    //         description: 'Description of the March event and more details.',
    //         startDate: '2024-03-01',
    //         endDate: '2024-03-31'
    //     }
    // },
    // {
    //     id: 'jun', name: 'Jun', content: {
    //         heading: 'Wod 6',
    //         timeline: 'Jun 14 - Jun 20',
    //         title: 'Title for March Event',
    //         description: 'Description of the March event and more details.',
    //         startDate: '2024-03-01',
    //         endDate: '2024-03-31'
    //     }
    // },
    // {
    //     id: 'jul', name: 'Jul', content: {
    //         heading: 'Wod 7',
    //         timeline: 'July 14 - July 20',
    //         title: 'Title for March Event',
    //         description: 'Description of the March event and more details.',
    //         startDate: '2024-03-01',
    //         endDate: '2024-03-31'
    //     }
    // },
    // {
    //     id: 'aug', name: 'Ago', content: {
    //         heading: 'Wod 8',
    //         timeline: 'Aug 14 - Aug 20',
    //         title: 'Title for March Event',
    //         description: 'Description of the March event and more details.',
    //         startDate: '2024-03-01',
    //         endDate: '2024-03-31'
    //     }
    // },
    {
        id: 'enero', name: 'Enero', content: {
            heading: 'Wod 1',
            timeline: 'Enero 14 - Enero 20',
            title: 'Más información próximamente',
            description: 'Description of the January event and more details.',
            startDate: '2025-01-05',
            endDate: '2025-01-26'
        }
    },
    {
        id: 'febrero', name: 'Febrero', content: {
            heading: 'Wod 2',
            timeline: 'Febrero 14 - Febrero 20',
            title: 'Más información próximamente',
            description: 'Description of the Febrero event and more details.',
            startDate: '2024-01-26',
            endDate: '2024-02-16'
        }
    },
    {
        id: 'marzo', name: 'Marzo', content: {
            heading: 'Wod 3',
            timeline: 'Marzo 14 - Marzo 20',
            title: 'Más información próximamente',
            description: 'Description of the Marzo event and more details.',
            startDate: '2024-02-16',
            endDate: '2024-03-09'
        }
    },
    {
        id: 'Abril', name: 'Abril', content: {
            heading: 'Wod 4',
            timeline: 'Abril 14 - Abril 20',
            title: 'Más información próximamente',
            description: 'Description of the Abril event and more details.',
            startDate: '2024-03-31',
            endDate: '2024-04-21'
        }
    },

];

// const CalendarCard = ({ month, isSelected, onSelect }) => {
//     const { heading, timeline, title, description, startDate, endDate } = month.content;

//     return (
//         <div className='flex flex-col items-center gap-2'>
//             <p className='card-title border-b border-[#B6B5FF]'>{month.name}</p>
//             <div
//                 className={`card ${isSelected ? 'selected' : ''}`}
//                 onClick={() => onSelect(month.id)}
//             >
//                 {isSelected && (
//                     <div className='card-content'>
//                         <div className='bg-black flex items-center justify-center py-1'>
//                             <p className='font-semibold'>{heading}</p>
//                         </div>
//                         <div className='flex flex-col gap-3 text-black items-center mt-2 px-2'>
//                             <p className='text-[15px]'>{timeline}</p>
//                             <p className='text-[17px] font-semibold'>{title}</p>
//                             <p className='text-[15px] text-[#636363]'>{description}</p>
//                             <p className='text-[15px]'>{startDate}</p>
//                             <p className='text-[15px]'>{endDate}</p>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };


const CalendarCard = ({ month }) => {
    const { heading, timeline, title, description, startDate, endDate } = month.content;

    return (
        <div className='flex flex-col items-center gap-2'>
            <p className='card-title border-b border-[#B6B5FF]'>{month.name}</p>
            <div className={`card selected`}> {/* Assuming 'selected' was the class adding the styles for an opened card */}
                <div className='card-content'>
                    <div className='bg-black flex items-center justify-center py-1'>
                        <p className='font-semibold'>{heading}</p>
                    </div>
                    <div className='flex flex-col gap-3 text-black items-center mt-2 px-2'>
                        <p className='text-[15px]'>{timeline}</p>
                        <p className='text-[17px] font-semibold'>{title}</p>
                        {/* <p className='text-[15px] text-[#636363]'>{description}</p> */}
                        <p className='text-[15px] text-white'>{startDate}</p>
                        <p className='text-[15px] text-white'>{endDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Calendar = () => {
    // const [selectedMonth, setSelectedMonth] = useState(null);
    // const [selectedMonth2, setSelectedMonth2] = useState(null);

    // const handleSelectMonth = (monthId) => {
    //     setSelectedMonth(prevSelectedMonth =>
    //         prevSelectedMonth === monthId ? null : monthId
    //     );
    // };

    // const handleSelectMonth2 = (monthId) => {
    //     setSelectedMonth2(prevSelectedMonth =>
    //         prevSelectedMonth === monthId ? null : monthId
    //     );
    // };

    return (
        <>
            <div className='bg-cover' style={{ backgroundImage: `url(${IMAGES.BackgroundImage})` }}>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                <div className='relative'>
                    <NavBar activePage="Calendar" />
                    <div style={{ height: 'calc(100vh)' }} className='pt-2 px-3 flex flex-col'>
                        <div className='flex justify-center'>
                            <p className='text-white font-bold text-[25px]'>Temporada 2024 / 2025</p>
                        </div>
                        <div className='calendar-container max-md:flex-col border mt-5'>
                            <div className='flex justify-center items-center'>
                                <p className='md:-rotate-90 text-white font-semibold text-[20px]'>Temporada 2024</p>
                            </div>
                            {months.map((month) => (
                                <CalendarCard
                                    key={month.id}
                                    month={month}
                                    // isSelected={selectedMonth === month.id}
                                    // onSelect={handleSelectMonth}
                                />
                            ))}
                            <div className='md:hidden'>
                            {months2.map((month) => (
                                <CalendarCard
                                    key={month.id}
                                    month={month}
                                    // isSelected={selectedMonth2 === month.id}
                                    // onSelect={handleSelectMonth2}
                                />
                            ))}
                            </div>
                        </div>
                        <div className='bg-[#B6B5FF99]/60 flex justify-center '>
                            {/* <p className='font-semibold text-white text-[20px]'>PARON NAVIDEÑO</p> */}
                        </div>
                        <div className='calendar-container max-md:flex-col border max-md:hidden'>
                            <div className='flex items-center justify-center'>
                                <p className='md:-rotate-90 text-white font-semibold text-[20px]'>Temporada 2024</p>
                            </div>
                            {months2.map((month) => (
                                <CalendarCard
                                    key={month.id}
                                    month={month}
                                    // isSelected={selectedMonth2 === month.id}
                                    // onSelect={handleSelectMonth2}
                                />
                            ))}
                        </div>
                    </div>


                </div>

            </div>
            <div className='bg-cover min-h-screen relative' style={{ backgroundImage: `url(${IMAGES.BackgroundImage})` }}>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                <div className='relative'>

                    <div style={{ height: 'calc(100vh)' }} className='pt-5 px-3 flex flex-col'>
                        {/* <div className='flex justify-center flex-[1]'>
                            <p className='text-white font-bold text-[25px]'>Temporada 2024 / 2025</p>
                        </div> */}
                        {/* <div className='calendar-container h-[40%] border flex-[3]'>
                            <div className='flex items-center'>
                                <p className='-rotate-90 text-white font-semibold text-[20px]'>Off Season</p>
                            </div>
                            <div className='flex flex-col items-center gap-2 bg-white '>
                                <div className='w-[350px]'>
                                    <div className='card-content '>
                                        <div className='bg-black flex items-center justify-center py-1'>
                                            <p className='font-semibold text-white'>Off Season</p>
                                        </div>
                                        <div className='flex flex-col gap-5 text-black items-center mt-2 px-2'>
                                            <p className='text-[15px] font-semibold'>All Year</p>
                                            <p className='text-[23px] font-semibold'>OFF SEASON COMPETITION</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            {Array.from({ length: 5 }, (_, index) => (
                                <div key={index} className='flex flex-col card2 items-center gap-2 bg-white'>
                                    <div>
                                        <div className=' card-content '>
                                            <div className=' flex items-center justify-center py-1'>
                                                <p className='font-semibold text-white'></p>
                                            </div>
                                            <div className='flex flex-col gap-5 text-black items-center mt-2 px-2'>
                                                <p className='text-[15px] font-semibold'></p>
                                                <p className='text-[25px] font-semibold'></p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            ))}



                        </div> */}

                        <div className='bg-[#171717] w-full px-10 pt-10 pb-5 flex flex-[3]'>
                            <div className='flex-[3] flex flex-col gap-4'>
                                <p className='text-white font-bold text-[21px] md:text-left text-center'>WOD PRO LEAGUE APP</p>
                                <p className='text-white  md:text-left text-center text-[17px]'>Descárgate la aplicación de WOD Pro League, tanto en Apple Store como en Google Play.  Únete a una comunidad de amantes del crossfit, descubre nuevos entrenamientos y desafíate.</p>
                                <div className='flex gap-3 items-center md:justify-start justify-center'>
                                    <img src={IMAGES.Google} alt='' className='h-[60px] w-[120px] cursor-pointer' />
                                    <img src={IMAGES.App} alt='' className='h-[60px] w-[120px] cursor-pointer' />

                                </div>
                            </div>
                            {/* <div className='flex-[2] md:flex hidden items-center justify-center'>
                                <img src={IMAGES.Mobile} alt='' className='lg:h-[260px] lg:w-[320px] w-[260px] h-[200px] ' />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calendar