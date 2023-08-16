import { useState } from 'react';
import { Link } from 'react-router-dom'
import { BiLogInCircle } from 'react-icons/bi'
import { FiUserPlus, FiSearch } from 'react-icons/fi'
import { HeaderMenu } from '../../services/header.services';
import { useLocation } from 'react-router-dom';
import SearchMenu from '../Search';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShowSearch, setIsShowSearch] = useState(false);

    const closeSearch = () => {
        setIsShowSearch(false);
    }

    const menu: HeaderMenu[] = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Movies',
            path: '/movies'
        },
        {
            name: 'TV Shows',
            path: '/tv'
        }
    ]

    const location = useLocation();
    const path = location.pathname;

    const renderHeader = () => {
        return menu.map((item, index) => {
            return (
                <li key={index}>
                    <Link to={item.path} className={`block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 font-bold ${item.path === path ? 'text-red-500' : 'text-white'}`} aria-current="page">{item.name}</Link>
                </li>
            )
        })
    }

    return (
        <>
            <header className='z-50 fixed top-0 left-0 w-full'>
                <nav className="px-4 lg:px-6 py-2.5 bg-gray-900 lg:bg-opacity-70">
                    <div className="flex flex-wrap lg:gap-10 items-center">
                        <Link to="/" className="flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/1456/1456703.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Movie<span className='text-red-500'>Star</span></span>
                        </Link>
                        <div className="lg:flex items-center lg:order-2 ml-auto">
                            <div className='hidden lg:flex gap-2 font-bold'>
                                <button onClick={() => setIsShowSearch(true)} className='text-white p-2 rounded-lg flex items-center gap-2'><FiSearch /></button>
                                <Link to="/login" className='text-white p-2 rounded-lg flex items-center gap-2'><BiLogInCircle /> Login</Link>
                                <Link to="/register" className='text-white p-2 rounded-lg flex items-center gap-2'><FiUserPlus /> Register</Link>
                            </div>
                            <button onClick={() => setIsShowSearch(true)} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                <FiSearch size={20} />
                            </button>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className={`${!isMenuOpen && 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                {renderHeader()}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            {isShowSearch && <SearchMenu onClose={closeSearch} />}
        </>
    )
}