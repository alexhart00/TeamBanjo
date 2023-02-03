export default function NavBar(){
    return(
       <div>
            <nav class="bg-gray-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <div class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9"/>
                        <span class="self-center text-xl font-semibold whitespace-nowrap">Rigout Pickout</span>
                    </div>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 flex-row space-x-8 md:flex-row md:space-x-8 md:mt-0 md:bg-gray-100">
                    <li>
                        <a href="/home" 
                        class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0">
                        Home
                        </a>
                    </li>
                    <li>
                        <a href="/curated"
                        class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Curated
                        </a>
                    </li>
                    <li>
                        <a href="/manual"
                        class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Manual
                        </a>
                    </li>
                    <li>
                        <a href="/random"
                        class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Random
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
       </div>
    );
}