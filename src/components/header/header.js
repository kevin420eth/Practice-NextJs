import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/event">Event</Link>
                <Link href="/about">About Us</Link>
            </nav>
        </header>
    )
}

export default Header