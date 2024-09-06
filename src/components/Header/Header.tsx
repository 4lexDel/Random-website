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
        <header>
            <nav className="bg-background border-b">
                <div className="flex justify-between items-center">
                    <a href="" className="flex items-center m-3">
                        <img src="https://pagepro.co/blog/wp-content/uploads/2020/04/react-1024x912.png" width="40px" className="m-3" alt="Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Random</span>
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
                    <div className="flex items-center gap-3 mr-3">
                        <button className="text-text font-bold p-2 rounded-full border border-text" onClick={toggleDarkMode}>
                            {darkMode ? 
                                <svg id="theme-toggle-dark-icon" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path>
                                </svg>
                                : 
                                <svg id="theme-toggle-light-icon" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
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
            </nav>
        </header>
    );
}

export default Header;