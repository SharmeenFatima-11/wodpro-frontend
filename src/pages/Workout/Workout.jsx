import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import IMAGES from '../../images';
import './Workout.css'

const Workout = () => {
    const [selectedYear, setSelectedYear] = useState('2024');
    const years = Array.from(new Array(20), (val, index) => 2024 - index);

    const [activeTab, setActiveTab] = useState(1);
    const tabs = 11;
    return (
        <>
            <div className='min-h-screen'>
                <div>
                    <NavBar user={true} activePage="Workout" />
                    <div className='min-h-screen gap-10 bg-[#171717] flex flex-col pt-10 px-10'>
                        <div className='flex-1'>
                            <div className='bg-[#383737] mt-2 mx-6 px-2 flex flex-col sm:flex-row gap-6'>
                                <select
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.target.value)}
                                    className="block  w-full sm:w-[30%] bg-[#383737]  text-white py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-[#383737] focus:border-white"
                                >
                                    {years.map((year) => (
                                        <option key={year} value={year}>
                                            Año {year}
                                        </option>
                                    ))}
                                </select>
                                <div className='w-full sm:w-[70%] mx-auto bg-[#383737] flex items-center  overflow-x-auto'>
                                    <div className='text-white px-4 py-2 hidden sm:block'>WORKOUT</div>
                                    {Array.from({ length: tabs }, (_, index) => (
                                        <button
                                            key={index}
                                            className={`py-2 font-semibold px-4 focus:outline-none ${activeTab === index + 1 ? 'bg-[#B6B5FF] text-black' : 'bg-[#383737] text-white'}`}
                                            onClick={() => setActiveTab(index + 1)}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='flex-[4] w-full justify-center items-start md:items-center flex'>
                            <img src={IMAGES.Workout} alt='Workout' className=' md:w-3/5 md:h-3/5 object-contain' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-6 bg-white'>
                <div>
                    {/* Header */}
                    <div className='px-4 py-2'>
                        <h1 className='text-lg font-bold'>DETALLES</h1>
                    </div>

                    {/* Content */}
                    <div className='p-4 flex flex-col sm:flex-row sm:gap-10 gap-5'>

                        <div className='mb-4 md:w-[30%] '>
                            <div className='border-2 border-black px-3 py-3 rounded-md'>
                                <label htmlFor='category' className='block text-sm font-medium text-gray-700'>Categoría</label>
                                <select id='category' name='category' className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                                    <option>RX Individual Masculino</option>

                                </select>
                            </div>
                        </div>


                        <div className='md:space-y-3 space-y-2 md:w-[70%]'>
                            <p><strong>All for time:</strong></p>
                            <p className='font-semibold'>3 rondas de:</p>
                            <ul >
                                <li>2 x 25-ft dumbbell walking lunge (hang position)</li>
                                <li>20 toes-to-bars</li>
                            </ul>
                            <p><strong>Seguido a continuación de:</strong></p>
                            <ul>
                                <li className='font-semibold'>2 rounds of:</li>
                                <li>2 x 25-ft dumbbell walking lunge (rack position)</li>
                                <li>15 chest-to-bar pull-ups</li>
                            </ul>

                            <p><strong>Seguido a continuación de:</strong></p>
                            <ul>
                                <li>2 x 25-ft dumbbell walking lunge (overhead position) 10 bar muscle-ups</li>
                                <li>♀ 2 x 35-lb dumbbells</li>
                                <li>♂ 2 x 50-lb dumbbells</li>

                            </ul>

                            <p><strong>Teenagers 16-17, Masters 35-54</strong></p>
                            <ul>
                                <li>♀ 2 x 35-lb dumbbells</li>
                                <li>♂ 2 x 50-lb dumbbells</li>

                            </ul>
                            <p><strong>Teenagers 14-15, Masters 55+</strong></p>
                            <ul>
                                <li>♀ 2 x 20-lb dumbbells</li>
                                <li>♂ 2 x 35-lb dumbbells</li>

                            </ul>
                            <p className='font-semibold'>Time cap: 20 minutes</p>

                        </div>
                    </div>
                    <div className='mt-10'>
                        <div className='px-4 py-2 flex flex-col gap-6'>
                            <h1 className='text-lg font-bold'>NOTAS</h1>
                            <p className='md:w-[70%] text-justify'>
                                Prior to starting, set up the floor plan as shown. Then create a walking-lunge distance measuring 25 feet. As long as the lunge start line is 5 feet from the pull-up bar, any configuration may be used. This test begins with the athlete standing on the far side of the 25-foot distance, away from their dumbbells. After “3, 2, 1 … go,” move to the dumbbells and complete a 25-foot walking lunge with the dumbbells in the hang position, then another 25-foot walking lunge to return the dumbbells across the line closest to the pull-up bar. Once the first lunge is complete, move to the pull-up bar and perform 20 toes-to-bars. Complete two more rounds of walking lunges, with the dumbbells in the hang position, and toes-to-bars. After completing the third round, immediately move back to the dumbbells and perform a 25-foot walking lunge with the dumbbells in the front-rack position, then another 25-foot front-rack walking lunge back, and 15 chest-to-bar pull-ups. Complete a second round of walking lunges, with dumbbells in the front-rack position, and 15 chest-to-bar pull-ups. Then, complete one final round of a 25-foot walking lunge with the dumbbells in the overhead position, then a 25-ft overhead walking lunge back and 10 bar muscle-ups. Time will stop after the lockout of the 10th bar muscle-up.
                                Your score will be the total time taken to complete the test. In the event of a time cap, your score will be the total number of repetitions completed before the cap.
                            </p>
                            <h1 className='text-lg font-bold'>DESEMPATE</h1>
                            <p className='md:w-[70%] text-justify'>
                                Record the time after the final 25-foot walking lunge, the final 25-foot front-rack walking lunge, and the 25-foot overhead walking lunge. In the event of a tie, the athlete with the faster tiebreak will win.
                            </p>
                            <h1 className='text-lg font-bold'>EQUIPAMIENTO</h1>
                            <ul className='list-disc pl-5'>
                                <li>
                                    Tape to mark the floor.
                                </li>
                                <li>
                                    Dumbbells of appropriate weight for the athlete’s division.*
                                </li>
                                <li>
                                    Pull-up bar
                                </li>
                            </ul>
                            <p className='md:w-[70%] text-justify'>The official weight is in pounds. For your convenience, the minimum acceptable weights in kilograms for the dumbbells are 10    kg (20 lb), 15 kg (35 lb), and 22.5 kg (50 lb).
                                Be sure the athlete has adequate space to safely complete all the movements. Clear the area of all extra equipment, people, or other obstructions.
                                Any athlete who in any way alters the equipment or movements described in this document or shown in the test standards video may be disqualified from the competition. Unless otherwise stated, athletes may not receive assistance with their equipment during the test.
                            </p>
                            <h1 className='text-lg font-bold'>NORMAS PARA QUE LOS VÍDEOS SEAN VÁLIDOS</h1>
                            <ul className={`custom-bullets pl-5`}>
                                <li className='text-justify'>Film ALL competition area measurements so the distances and weights can be seen clearly.</li>
                                <li className='text-justify'>Use the camera placement provided in the floor plan. The camera should capture a ¾ view of the athlete during all movements.</li>
                                <li className='text-justify'>A full view of the athlete must be maintained for the entire test.</li>
                                <li className='text-justify'>Avoid placing the camera low to the ground. We recommend placing the camera at least 3 feet off the ground.</li>
                                <li className='text-justify'>Videos must be uncut and unedited to accurately display the performance.</li>
                                <li className='text-justify'>A clock or timer must be visible throughout the test.</li>
                                <li className='text-justify'>Videos shot with a fisheye lens or similar lens may be rejected.</li>
                                <li className='text-justify'>Make sure lighting does not obstruct the view of the athlete, equipment, or workout area. Glare from the background or dark spaces makes it hard to review videos.-</li>
                                <li className='text-justify'>Do NOT use a countdown timer.</li>
                                <li className='text-justify'>Ensure the judge does not obstruct the view of the athlete.</li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Workout