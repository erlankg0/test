import spaceX from './../assets/logo.png';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={'container mx-auto py-4 fixed top-0 left-0 right-0 z-20'}>
            <div className={'flex flex-row justify-between gap-x-40'}>
                <img src={spaceX} alt={'space X logo'} className="w-[30rem]" />
                <nav className={'flex items-center w-full'}>
                    <ul className={'flex flex-row justify-between w-full p-[1.5rem]'}>
                        <li className={'text-2xl text-white hover:text-gray-500'}>
                            <NavLink
                                to={'/'}
                                className={({ isActive }) => (isActive ? 'text-gray-500' : 'text-white')}
                            >
                                Главная
                            </NavLink>
                        </li>
                        <li className={'text-2xl text-white hover:text-gray-500'}>
                            <NavLink
                                to={'/technologies'}
                                className={({ isActive }) => (isActive ? 'text-gray-500' : 'text-white')}
                            >
                                Технология
                            </NavLink>
                        </li>
                        <li className={'text-2xl text-white hover:text-gray-500'}>
                            <NavLink
                                to={'/flights'}
                                className={({ isActive }) => (isActive ? 'text-gray-500' : 'text-white')}
                            >
                                График полетов
                            </NavLink>
                        </li>
                        <li className={'text-2xl text-white hover:text-gray-500'}>
                            <NavLink
                                to={'/guaranties'}
                                className={({ isActive }) => (isActive ? 'text-gray-500' : 'text-white')}
                            >
                                Гарантии
                            </NavLink>
                        </li>
                        <li className={'text-2xl text-white hover:text-gray-500'}>
                            <NavLink
                                to={'/about'}
                                className={({ isActive }) => (isActive ? 'text-gray-500' : 'text-white')}
                            >
                                О компании
                            </NavLink>
                        </li>
                        <li className={'text-2xl text-white hover:text-gray-500'}>
                            <NavLink
                                to={'/contacts'}
                                className={({ isActive }) => (isActive ? 'text-gray-500' : 'text-white')}
                            >
                                Контакты
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
