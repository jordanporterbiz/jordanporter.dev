import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
        <div className='flex items-center space-x-2'>
            <Link href='/'>
                <Image 
                src='/logo.png' 
                width={50} 
                height={50} 
                alt='Logo' 
                className='rounded-full' />
            </Link>
            <h1>JordanPorter.DEV</h1>
        </div>

        <div>
            <Link className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#] flex items-center rounded-full text-center' href='/'> Sign up for updates on new content! </Link>
        </div>
    </header>
  )
}

export default Header