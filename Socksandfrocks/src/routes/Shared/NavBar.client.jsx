
import { useState } from 'react';
import Robot from '../../assets/pictures/S&F.jpg';


import CuratedPage from '../Curated/CuratedPage';
import ManualPage from '../Manual/ManualPage';
import RandomPage from '../Random/RandomPage';

export default function NavBar({clothesData}){

    const [isRandomVisible, setIsRandomVisible] = useState(false);

    const [isCuratedVisible, setIsCuratedVisible] = useState(false);

    const [isManualVisible, setIsManualVisible ] = useState(false);

    return(
       <div>
        <div>
            <nav class="bg-gray-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <div class="flex items-center">
                        <img src={Robot} alt="Robot" class="h-6 mr-3 sm:h-9"/>
                        <span class="self-center text-xl font-semibold whitespace-nowrap">Rigout Pickout</span>
                    </div>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 flex-row space-x-8 md:flex-row md:space-x-8 md:mt-0 md:bg-gray-100">
                    <li>
                        <button onClick={() => {
                             setIsRandomVisible(false)
                             setIsCuratedVisible(false)
                             setIsManualVisible(false)
                        }}
                        class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0">
                        Home
                        </button>
                    </li>
                    <li>
                        <button onClick={() => {
                            setIsRandomVisible(false)
                            setIsCuratedVisible(true)
                            setIsManualVisible(false)
                        }}
                        class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Curated
                        </button>
                    </li>
                    <li>
                        <button onClick={() => {
                            setIsRandomVisible(false)
                            setIsCuratedVisible(false)
                            setIsManualVisible(true)
                        }}
                        class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Manual
                        </button>
                    </li>
                    <li>
                        <button onClick={() => {
                            setIsRandomVisible(true)
                            setIsCuratedVisible(false)
                            setIsManualVisible(false)
                        }}
                        class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Random
                        </button>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </div>

        <CuratedPage
         clothingData={clothesData}
         showComponent={isCuratedVisible}
         />

        <ManualPage
         clothingData={clothesData}
         showComponent={isManualVisible}
         />

        <RandomPage 
            clothingData={clothesData}
            showComponent={isRandomVisible}
        />

       </div>
    );
}





