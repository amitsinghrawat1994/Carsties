
import { userParamStore } from '../hooks/userParamsStore'
import LoginButton from './LoginButton'
import Logo from './Logo'
import Search from './Search'

export default function Navbar() {

    return (
        <header className='sticky top-0 z-50 flex justify-between bg-white p-5 items-center text-gray-800 shadow-md'>
            <Logo />
            <Search />
            <LoginButton />
        </header>
    )
}
