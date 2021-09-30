import Image from 'next/image'
import HeaderIcon from './HeaderIcon'
import { signOut, useSession } from 'next-auth/client'
import {
    BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon,
} from '@heroicons/react/solid'

import { 
    FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon
 } from '@heroicons/react/outline'


function Header() {
    const [ session ] = useSession()
    return (
        <header className='sticky top-0 z-50 bg-white shadow-md flex p-2 lg:px-5 items-center' >
            <div className="flex items-center" >
                <Image src='https://links.papareact.com/5me' width='40' height='40' layout='fixed' />
                <div className="flex items-center rounded-full ml-2 p-2 bg-gray-50" >
                    <SearchIcon className='h-6 md:ml-2 text-gray-600' />
                    <input type="text" className="hidden md:inline-flex outline-none ml-2 flex-shrink bg-transparent" placeholder="Search Facebook" />
                </div>
            </div>
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-4 md:space-x-2">
                    <HeaderIcon Icon={HomeIcon} active />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            <div className="flex items-center sm:space-x-2 justify-end">
                <Image 
                    onClick={signOut}
                    src={session.user.image} 
                    className="rounded-full cursor-pointer"
                    width='40'
                    height='40'
                    layout='fixed'
                />
                <p className='whitespace-nowrap font-semibold pr-3' >{session.user.name}</p>
                <ViewGridIcon className='icon' />
                <ChatIcon className='icon' />
                <BellIcon className='icon' />
                <ChevronDownIcon className='icon' />
            </div>
        </header>
    )
}

export default Header
