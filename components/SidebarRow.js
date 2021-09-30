import Image from 'next/image'

function SidebarRow({Icon, src, title}) {
    return (
        <div className='flex items-center p-2 space-x-2 cursor-pointer hover:bg-gray-100' >
            {src && (
                <Image 
                    src={src}
                    width={40}
                    height={40}
                    layout='fixed'
                    className='rounded-full'
                />
            ) }
            {Icon && <Icon className='h-8 w-8 text-blue-500' />}
            <p className='hidden sm:inline-flex' >{title}</p>
        </div>
    )
}

export default SidebarRow
