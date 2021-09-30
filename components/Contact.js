import Image from 'next/image'

function Contact({name, src}) {
    return (
        <div className="flex items-center space-x-3 mb-2  relative hover:bg-gray-200">
            <Image 
                className='rounded-full border border-blue-500'
                src={src} 
                layout='fixed'
                objectFit='cover'
                width='50'
                height='50'
            />
            <p>{name}</p>
            <div className="absolute bottom-0 -left-2 bg-green-500 w-3 h-3 rounded-full" />
        </div>
    )
}

export default Contact
