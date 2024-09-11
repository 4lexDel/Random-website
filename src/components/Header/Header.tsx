import { useEffect, useState } from "react";

function Header() {
    // State to manage dark mode
    const [darkMode, setDarkMode] = useState(false);

    // Check local storage for saved theme on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme === 'true') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    };

    return (
        <>


            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="" className="flex items-center">
                        <img src="https://pagepro.co/blog/wp-content/uploads/2020/04/react-1024x912.png" width="40px" className="m-3" alt="Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap">Random</span>
                    </a>
                    <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto inline-flex">
                        <ul className="text-xl font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 px-3 text-text rounded md:bg-transparent underline md:p-0 md-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-text rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-text rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-text rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-text rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li>
                        </ul>
                        <div className="flex items-center gap-3 mr-3">
                            <button className="text-text font-bold p-2 rounded-full border border-text" onClick={toggleDarkMode}>
                                {darkMode ?
                                    <svg id="theme-toggle-dark-icon" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path>
                                    </svg>
                                    :
                                    <svg id="theme-toggle-light-icon" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
                                    </svg>
                                }
                            </button>
                            <button className="bg-secondary text-text font-bold py-3 px-8 rounded">
                                Documentation
                            </button>
                            <button className="bg-primary text-text font-bold py-3 px-8 rounded">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* 
        <header>
            <nav className="bg-background border-b">
                <div className="flex justify-between items-center">
                    <a href="" className="flex items-center m-3">
                        <img src="https://pagepro.co/blog/wp-content/uploads/2020/04/react-1024x912.png" width="40px" className="m-3" alt="Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap">Random</span>
                    </a>
                    <div className="flex justify-between items-center">
                        <ul className="flex flex-row text-xl">
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 rounded underline text-text" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 rounded text-text">Company</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 rounded text-text">Marketplace</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 rounded text-text">Features</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 rounded text-text">Team</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 rounded text-text">Contact</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </header> */}
        </>
    );
}

export default Header;