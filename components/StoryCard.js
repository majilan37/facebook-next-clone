import Image from 'next/image'

const StoryCard = ({name, src, profile}) => {
    return (
        <div className="relative h-14 w-14 md:w-20 md:h-20 lg:h-56 lg:w-32 hover:scale-105 transition duration-200 my-4">
            <div className="absolute top-2 left-2" >
                <Image
                    className='opacity-0 lg:opacity-100 m-4 z-20 rounded-full'
                    src={profile}
                    width='40'
                    height='40'
                    objectFit='cover'
                    layout='fixed'
                />
            </div>
                <Image 
                    className='filter flex-grow brightness-75 rounded-full lg:rounded-xl'
                    src={src}
                    objectFit='cover'
                    layout='fill'
                />
            <p className='absolute bottom-1 left-2 text-white hidden lg:inline-flex font-medium z-30' >{name}</p> 
        </div>
    )
}

export default StoryCard
