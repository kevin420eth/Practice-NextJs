import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo_black.png'

const Header = () => {
    return (
        <header>
            <Image src={logo} width={50} height={50} alt='xxx'/>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/event">Event</Link>
                <Link href="/about">About Us</Link>
            </nav>
            <h1>This tutorial sucks</h1>
        </header>
    )
}

export default Header