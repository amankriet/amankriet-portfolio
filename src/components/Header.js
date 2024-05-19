import {ReactComponent as Logo} from '../assets/svg/logo.svg'
import {ReactComponent as Menu} from '../assets/svg/menu-right.svg'

function Header() {
    return (
        <header className={'fixed bg-secondary-100 drop-shadow-2xl w-full rounded-b-lg top-0'}>
            {/*Navigation Bar*/}
            <nav className={'h-auto relative md:container md:mx-auto flex items-center justify-end gap-4 p-3 md:p-6 md:text-xl flex-wrap px-4 text-primary'}>
                {/*Logo*/}
                <a href={'#home'} id="logo">
                    <Logo className={'absolute h-12 md:h-14 top-2 left-2 cursor-pointer hover:fill-primary-600 fill-primary'}/>
                </a>

                {/*Menu Icon*/}
                <a href="#menu" id="menu">
                    <Menu className="h-10 w-auto md:hidden fill-primary hover:fill-primary-600" />
                </a>
                <ul className={'w-[30%] md:w-auto bg-secondary-100 mr-[-16px] md:mr-0 px-6 pb-4  md:p-0 absolute top-16 md:top-0 md:bg-inherit invisible md:visible md:relative text-right md:text-center flex flex-col md:flex-row items-center gap-4 rounded-b-lg justify-between *:w-full *:cursor-pointer'}>
                    <li><a className={'hover:text-primary-600'} href={'#skills'}>Skills</a></li>
                    <li><a className={'hover:text-primary-600'} href={'#projects'}>Projects</a></li>
                    <li><a className={'hover:text-primary-600'} href={'#contact'}>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header