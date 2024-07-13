import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import IMAGES from '../../images';

const Standards = () => {
    const [dropdownsOpen, setDropdownsOpen] = useState({
        dropdown1: false,
        dropdown2: false,
        dropdown3: false,
    });
    const [dropdownsOpen2, setDropdownsOpen2] = useState({
        dropdown4: false,
        dropdown5: false,
        dropdown6: false,
        dropdown7: false,
    });
    const dropdownData = [
        {
            id: 'dropdown1',
            title: 'RX Masculino',
            content: [
                {
                    heading: 'Barra (peso, de trabajo esperado):',
                    items: ['Snatch – 80KG.', 'Clean & Jerk – 100KG.', 'Mancuernas - 30KG.']
                },
                {
                    heading: 'Gimnásticos:',
                    items: [
                        'Muscleups en anillias & barra.',
                        'C2B.',
                        'T2B.',
                        'HSPU estrictos.',
                        'HSW.',
                        'Pistols.',
                        'Legless rope climb',
                        'Dobles de comba',
                        'Crossovers de comba.',
                    ]
                },
                // {
                //     heading: 'Qualification',
                //     items: [
                //         'Elite – 1st to 20th',
                //         'Rx – 21st to 40th',
                //         '41st and below: Eligible For Open Division via Open registration'
                //     ]
                // },

            ]
        },
        {
            id: 'dropdown2',
            title: 'RX Femenino',
            content: [
                {
                    heading: 'Barra (peso, de trabajo esperado):',
                    items: ['Snatch – 60KG.', 'Clean & Jerk – 80KG.', 'Mancuernas - 22.5KG.']
                },
                {
                    heading: 'Gimnásticos:',
                    items: [
                        'Muscleups en anillias & barra.',
                        'C2B.',
                        'T2B.',
                        'HSPU estrictos.',
                        'HSW.',
                        'Pistols.',
                        'Legless rope climb',
                        'Dobles de comba',
                        'Crossovers de comba.',
                    ]
                },
                // {
                //     heading: 'Qualification',
                //     items: [
                //         'Elite – 1st to 20th',
                //         'Rx – 21st to 40th',
                //         '41st and below: Eligible For Open Division via Open registration'
                //     ]
                // },
                // ... other content sections for this dropdown
            ]
        },
        {
            id: 'dropdown3',
            title: 'MASTERS +40 Masculino',
            content: [
                {
                    heading: 'Barra (peso, de trabajo esperado):',
                    items: ['Snatch – 70KG.', 'Clean & Jerk – 90KG.', 'Mancuernas - 25KG.']
                },
                {
                    heading: 'Gimnásticos:',
                    items: [
                        'Muscleups en anillias & barra.',
                        'C2B.',
                        'T2B.',
                        'HSPU estrictos.',
                        'HSW.',
                        'Dobles de comba',
                    ]
                },
            ]
        },
        {
            id: 'dropdown3',
            title: 'MASTERS +40 Femenino',
            content: [
                {
                    heading: 'Barra (peso, de trabajo esperado):',
                    items: ['Snatch – 50KG.', 'Clean & Jerk – 70KG.', 'Mancuernas - 17.5KG.']
                },
                {
                    heading: 'Gimnásticos:',
                    items: [
                        'Muscleups en anillias & barra.',
                        'C2B.',
                        'T2B.',
                        'HSPU estrictos.',
                        'HSW.',
                        'Dobles de comba',
                    ]
                },
            ]
        },


    ];

    const dropdownData2 = [
        // {
        //     id: 'dropdown4',
        //     title: 'RX Equipos',
        //     content: [
        //         {
        //             heading: 'Barra (peso, de trabajo esperado):',
        //             items: ['Snatch – 80KG.', 'Clean & Jerk – 100KG.', 'Mancuernas - 30KG.']
        //         },
        //         {
        //             heading: 'Gimnásticos:',
        //             items: [
        //                 'Muscleups en anillias & barra.',
        //                 'C2B.',
        //                 'T2B.',
        //                 'HSPU estrictos.',
        //                 'HSW.',
        //                 'Pistols.',
        //                 'Legless rope climb',
        //                 'Dobles de comba',
        //                 'Crossovers de comba.',
        //             ]
        //         },
        //         // {
        //         //     heading: 'Qualification',
        //         //     items: [
        //         //         'Elite – 1st to 20th',
        //         //         'Rx – 21st to 40th',
        //         //         '41st and below: Eligible For Open Division via Open registration'
        //         //     ]
        //         // },

        //     ]
        // },
        {
            id: 'dropdown5',
            title: 'INTERMEDIO Masculino & Masters +50',
            content: [
                {
                    heading: 'Barra (peso, de trabajo esperado):',
                    items: ['Snatch – 60KG.', 'Clean – 80KG.']
                },
                {
                    heading: 'Gimnásticos:',
                    items: [
                        'Muscle-ups en barra.',
                        'C2B.',
                        'T2B.',
                        'Rope climb',
                        'HSPW.',
                        'Dobles de comba',
                    ]
                },
                // {
                //     heading: 'Qualification',
                //     items: [
                //         'Elite – 1st to 20th',
                //         'Rx – 21st to 40th',
                //         '41st and below: Eligible For Open Division via Open registration'
                //     ]
                // },
                // ... other content sections for this dropdown
            ]
        },
        {
            id: 'dropdown6',
            title: 'INTERMEDIO Femenino & Masters +50',
            content: [
                {
                    heading: 'Barra (peso, de trabajo esperado):',
                    items: ['Snatch – 40KG.', 'Clean – 60KG.']
                },
                {
                    heading: 'Gimnásticos:',
                    items: [
                        'Muscle-ups en barra.',
                        'C2B.',
                        'T2B.',
                        'Rope climb',
                        'HSPW.',
                        'Dobles de comba',
                    ]
                },
                // {
                //     heading: 'Qualification',
                //     items: [
                //         'Elite – 1st to 20th',
                //         'Rx – 21st to 40th',
                //         '41st and below: Eligible For Open Division via Open registration'
                //     ]
                // },
                // ... other content sections for this dropdown
            ]
        },
        // {
        //     id: 'dropdown7',
        //     title: 'INTERMEDIO Parejas MM',
        //     content: [
        //         {
        //             heading: 'Barra (peso, de trabajo esperado):',
        //             items: ['Snatch – 80KG.', 'Clean & Jerk – 100KG.', 'Mancuernas - 30KG.']
        //         },
        //         {
        //             heading: 'Gimnásticos:',
        //             items: [
        //                 'Muscleups en anillias & barra.',
        //                 'C2B.',
        //                 'T2B.',
        //                 'HSPU estrictos.',
        //                 'HSW.',
        //                 'Pistols.',
        //                 'Legless rope climb',
        //                 'Dobles de comba',
        //                 'Crossovers de comba.',
        //             ]
        //         },
        //         // {
        //         //     heading: 'Qualification',
        //         //     items: [
        //         //         'Elite – 1st to 20th',
        //         //         'Rx – 21st to 40th',
        //         //         '41st and below: Eligible For Open Division via Open registration'
        //         //     ]
        //         // },
        //         // ... other content sections for this dropdown
        //     ]
        // },
        // {
        //     id: 'dropdown8',
        //     title: 'INTERMEDIO Equipos',
        //     content: [
        //         {
        //             heading: 'Barra (peso, de trabajo esperado):',
        //             items: ['Snatch – 80KG.', 'Clean & Jerk – 100KG.', 'Mancuernas - 30KG.']
        //         },
        //         {
        //             heading: 'Gimnásticos:',
        //             items: [
        //                 'Muscleups en anillias & barra.',
        //                 'C2B.',
        //                 'T2B.',
        //                 'HSPU estrictos.',
        //                 'HSW.',
        //                 'Pistols.',
        //                 'Legless rope climb',
        //                 'Dobles de comba',
        //                 'Crossovers de comba.',
        //             ]
        //         },
        //         // {
        //         //     heading: 'Qualification',
        //         //     items: [
        //         //         'Elite – 1st to 20th',
        //         //         'Rx – 21st to 40th',
        //         //         '41st and below: Eligible For Open Division via Open registration'
        //         //     ]
        //         // },
        //         // ... other content sections for this dropdown
        //     ]
        // },
        {
            id: 'dropdown9',
            title: 'ESCALADO Masculino',
            content: [
                {
                    heading: 'Barra (peso, de trabajo esperado):',
                    items: ['Snatch – 40KG.', 'Clean – 50KG.']
                },
                {
                    heading: 'Gimnásticos:',
                    items: [
                        'Pull Ups.',
                        'Knee to elbow.',
                        'Burpees.',
                        'HSPU con ABMAT.',
                        'Push Ups.',
                        'Singles de comba',
                    ]
                },
                // {
                //     heading: 'Qualification',
                //     items: [
                //         'Elite – 1st to 20th',
                //         'Rx – 21st to 40th',
                //         '41st and below: Eligible For Open Division via Open registration'
                //     ]
                // },
                // ... other content sections for this dropdown
            ]
        },
        {
            id: 'dropdown10',
            title: 'ESCALADO Femenino',
            content: [
                {
                    heading: 'Barra (peso, de trabajo esperado):',
                    items: ['Snatch – 25KG.', 'Clean – 35KG.']
                },
                {
                    heading: 'Gimnásticos:',
                    items: [
                        'Pull Ups.',
                        'Knees to elbow.',
                        'Burpees.',
                        'HSPU con ABMAT.',
                        'Push Ups.',
                        'Singles de comba',
                    ]
                },
                // {
                //     heading: 'Qualification',
                //     items: [
                //         'Elite – 1st to 20th',
                //         'Rx – 21st to 40th',
                //         '41st and below: Eligible For Open Division via Open registration'
                //     ]
                // },
                // ... other content sections for this dropdown
            ]
        },
        // {
        //     id: 'dropdown11',
        //     title: 'ESCALADO Parejas MM',
        //     content: [
        //         {
        //             heading: 'Barra (peso, de trabajo esperado):',
        //             items: ['Snatch – 80KG.', 'Clean & Jerk – 100KG.', 'Mancuernas - 30KG.']
        //         },
        //         {
        //             heading: 'Gimnásticos:',
        //             items: [
        //                 'Muscleups en anillias & barra.',
        //                 'C2B.',
        //                 'T2B.',
        //                 'HSPU estrictos.',
        //                 'HSW.',
        //                 'Pistols.',
        //                 'Legless rope climb',
        //                 'Dobles de comba',
        //                 'Crossovers de comba.',
        //             ]
        //         },
        //         // {
        //         //     heading: 'Qualification',
        //         //     items: [
        //         //         'Elite – 1st to 20th',
        //         //         'Rx – 21st to 40th',
        //         //         '41st and below: Eligible For Open Division via Open registration'
        //         //     ]
        //         // },
        //         // ... other content sections for this dropdown
        //     ]
        // },
        // {
        //     id: 'dropdown12',
        //     title: 'ESCALADO Equipos',
        //     content: [
        //         {
        //             heading: 'Barra (peso, de trabajo esperado):',
        //             items: ['Snatch – 80KG.', 'Clean & Jerk – 100KG.', 'Mancuernas - 30KG.']
        //         },
        //         {
        //             heading: 'Gimnásticos:',
        //             items: [
        //                 'Muscleups en anillias & barra.',
        //                 'C2B.',
        //                 'T2B.',
        //                 'HSPU estrictos.',
        //                 'HSW.',
        //                 'Pistols.',
        //                 'Legless rope climb',
        //                 'Dobles de comba',
        //                 'Crossovers de comba.',
        //             ]
        //         },
        //         // {
        //         //     heading: 'Qualification',
        //         //     items: [
        //         //         'Elite – 1st to 20th',
        //         //         'Rx – 21st to 40th',
        //         //         '41st and below: Eligible For Open Division via Open registration'
        //         //     ]
        //         // },
        //         // ... other content sections for this dropdown
        //     ]
        // },


    ];

    const toggleDropdown = (id) => {
        setDropdownsOpen(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const toggleDropdown2 = (id) => {
        setDropdownsOpen2(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };
    return (
        <div className='h-screen'>
            <div className='relative'>
                <NavBar activePage="Standards" />
                <div className='flex flex-col items-center gap-5 pt-10' style={{ height: 'calc(100vh - 120px)' }}>
                    <p className='font-bold text-[22px]'>UNA COMPETICION A TU MEDIDA</p>
                    <p className='text-[rgb(119,119,119)] text-[18px] sm:w-full sm:text-center w-[80%] text-center'>Busca el que me mejor se adapta a tu condición física actual.</p>
                    <div className='w-full px-10 py-5 flex lg:flex-row flex-col items-center gap-5'>
                        <div className='flex-1 flex flex-col w-full'>
                            {dropdownData.map(({ id, title, content }) => (
                                <div key={id} className='lg:w-[100%] md:w-[100%] w-[100%] max-w-4xl lg:pl-[150px]'>
                                    <div className='mb-4'>
                                        <div className='text-white  cursor-pointer bg-black py-1 px-3 rounded-md flex flex-row items-center justify-between' onClick={() => toggleDropdown(id)}>
                                            <h3 className={`font-bold ${dropdownsOpen[id] ? 'text-[#B6B5FF]' : 'text-white'}`} >
                                                {title}
                                            </h3>
                                            <img
                                                src={dropdownsOpen[id] ? IMAGES.MenuDown : IMAGES.MenuRight}
                                                alt='Toggle Menu'
                                                className='h-8 w-8'
                                            />
                                        </div>
                                        {dropdownsOpen[id] && (
                                            <div className='bg-whiterounded-md mt-2'>
                                                {content.map((section, index) => (
                                                    <div key={index} className='py-3'>
                                                        <h4 className='font-bold'>{section.heading}</h4>
                                                        <ul className='list-disc ml-6'>
                                                            {section.items.map((item, itemIndex) => {
                                                                let itemval = item;
                                                                return (
                                                                    <li key={itemIndex}><input type="text" onChange={(e) => ( itemval = e.target.value)} placeholder={itemval} className='outline-none placeholder:text-black w-60' /></li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex-1 flex flex-col w-full'>
                            {dropdownData2.map(({ id, title, content }) => (
                                <div key={id} className='lg:w-[100%] md:w-[100%] w-[100%] max-w-4xl lg:pr-[150px]'>
                                    <div className='mb-4'>
                                        <div className='text-white  cursor-pointer bg-black py-1 px-3 rounded-md flex flex-row items-center justify-between' onClick={() => toggleDropdown2(id)}>
                                            <h3 className={`font-bold ${dropdownsOpen2[id] ? 'text-[#B6B5FF]' : 'text-white'}`} >
                                                {title}
                                            </h3>
                                            <img
                                                src={dropdownsOpen2[id] ? IMAGES.MenuDown : IMAGES.MenuRight}
                                                alt='Toggle Menu'
                                                className='h-8 w-8'
                                            />
                                        </div>
                                        {dropdownsOpen2[id] && (
                                            <div className='bg-whiterounded-md mt-2'>
                                                {content.map((section, index) => (
                                                    <div key={index} className='py-3'>
                                                        <h4 className='font-bold'>{section.heading}</h4>
                                                        <ul className='list-disc ml-6'>
                                                            {section.items.map((item, itemIndex) => (
                                                                <li key={itemIndex}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Standards