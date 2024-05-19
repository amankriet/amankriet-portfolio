import {ReactComponent as Logo} from '../assets/svg/logo.svg'
import {ReactComponent as Menu} from '../assets/svg/menu-right.svg'
import {useState} from "react";

function Header() {
    const [, setMenuVisible] = useState(false)

    function toggleMenu() {
        const menuList = document.querySelector('nav ul')
        if (menuList) {
            menuList.classList.toggle('-translate-y-96')
            menuList.classList.toggle('translate-y-0')
        }
        setMenuVisible(prevState => !prevState)
    }

    return (
        <header className={'fixed bg-secondary-100 drop-shadow-2xl w-full md:rounded-b-lg top-0'}>
            {/*Navigation Bar*/}
            <nav className={'h-auto relative md:container md:mx-auto flex items-center justify-end gap-4 p-3 md:p-6 text-xl flex-wrap px-4 text-primary z-20'}>
                {/*Logo*/}
                <a href={'#home'} id="logo">
                    <Logo className={'absolute h-12 md:h-14 top-2 left-2 cursor-pointer sm:hover:fill-primary-600 active:fill-primary-600 fill-primary animate-pulse'}/>
                </a>

                {/*Menu Icon*/}
                <a href="#menu" id="menu">
                    <Menu className="h-10 w-auto md:hidden fill-primary sm:hover:fill-primary-600 active:fill-primary-600" onClick={toggleMenu} />
                </a>
                <ul className={'w-[30%] md:w-auto bg-secondary-100 mr-[-16px] md:mr-0 px-6 pb-4  md:p-0 absolute top-16 md:top-0 md:bg-inherit -translate-y-96 -z-30 md:z-50 md:translate-y-0 transition-all transform-gpu duration-500 md:animate-none md:visible md:relative text-right md:text-center flex flex-col md:flex-row items-center gap-4 rounded-b-lg justify-between *:w-full *:cursor-pointer'}>
                    <li><a className={'active:fill-primary-600 sm:hover:text-primary-600'} href={'#skills'} onClick={toggleMenu}>Skills</a></li>
                    <li><a className={'active:fill-primary-600 sm:hover:text-primary-600'} href={'#projects'} onClick={toggleMenu}>Projects</a></li>
                    <li><a className={'active:fill-primary-600 sm:hover:text-primary-600'} href={'#contact'} onClick={toggleMenu}>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header