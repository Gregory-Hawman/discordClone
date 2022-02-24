import React from 'react';
import { FaSearch, FaHashtag, FaRegBell, FaUserCircle } from 'react-icons/fa';
// import { FaMoon, FaSun} from 'react-icons/fa';
// import useDarkMode from '../hooks/useDarkMode';

export default function TopNav() {
  return (
    <div className="top-navigation">
        <HashtagIcon />
        <Title />
        {/* <ThemeIcon /> */}
        <Search />
        <BellIcon />
        <UserCircle />
    </div>
  );
};

// const ThemeIcon = () => {
//     const [darkTheme, setDarkTheme] = useDarkMode();
//     const handleMode = () => setDarkTheme(!darkTheme);
//     return (
//         <span onClick={handleMode}>
//             {darkTheme ? (
//                 <FaSun size='24' className='top-navigation-icon' />
//             ) : (
//                 <FaMoon size='24' className='top-navigation-icon' />
//             )}
//         </span>
//     )
// }

const Search = () => {
    return (
        <div className='search'>
            <input className='search-input' type='text' placeholder='Search...' />
            <FaSearch size='18' className='text-secondary my-auto' />
        </div>
    )
}

const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />
const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon' />
const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag' />
const Title = () => <h5 className='title-text'>tailwind-css</h5>
