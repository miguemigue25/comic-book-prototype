import Image from 'next/image'
import Link from 'next/link'


const navIcon = [
    { src: '/assets/icons/stack.svg', alt: 'stack' },
    { src: '/assets/icons/search.svg', alt: 'search' },
]

const Navbar = () => {
    return (
        <header className='w-full'>
            <nav className='nav'>
                <Link href="/" className='flex items-center gap-1'>
                    <Image
                        src="/assets/icons/book.svg"
                        width={27}
                        height={27}
                        alt="book"
                    />
                    <p className="nav-logo text-primary">
                        Comic<span className="text-primary-green"> Collection</span>

                    </p>
                </Link>
                <Link href="/collection/marvel" className='flex justify-center gap-5'>
                    <Image
                        src="/assets/icons/marvel-logo.svg"
                        width={70}
                        height={45}
                        alt="marvel"
                    />
                </Link>
                <div className="flex items-center gap-5">
                    {navIcon.map((icon) => (
                        <Image
                            key={icon.alt}
                            src={icon.src}
                            alt={icon.alt}
                            width={28}
                            height={28}
                            className='object-contain'
                        />
                    ))}
                </div>
            </nav>
        </header>
    )
}


export default Navbar