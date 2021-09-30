import Image from 'next/image'
import { 
    ChatAltIcon, ShareIcon, ThumbUpIcon 
 } from '@heroicons/react/outline'

function Post({name, message, image, email, timestamp, postImage}) {
    return (
        <div className='flex flex-col my-2 py-2 px-4 bg-white shadow-sm' >
            <div className='flex items-center space-x-2' >
                <div className='relative h-10 w-10 ' >
                    <Image 
                        className='rounded-full'
                        src={image}
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
                <div className='block' >
                    <p className='font-medium' >{name}</p>
                    <p className='text-sm text-gray-500' >{new Date(timestamp?.toDate()).toLocaleString()}</p>
                </div>
            </div>
            <div className='py-3' >
                <p>{message}</p>
             </div>
             {postImage && (
                 <div className='relative h-56 md:h-96' >
                     <Image 
                        src={postImage}
                        layout='fill'
                        objectFit='cover'
                    />
                 </div>
             )}
             <div className='flex justify-between items-center rounded-b-lg shadow-md text-gray-500' >
                <div className='inputIcon rounded-none rounded-bl-lg' >
                    <ThumbUpIcon className='h-4' />
                    <p className='text-xs sm:text-base' >Like</p>
                </div>
                <div className='inputIcon rounded-none rounded-b-lg' >
                    <ChatAltIcon className='h-4' />
                    <p className='text-xs sm:text-base' >Comment</p>
                </div>                
                <div className='inputIcon rounded-none rounded-br-lg' >
                    <ShareIcon className='h-4' />
                    <p className='text-xs sm:text-base' >Share</p>  
                </div>
             </div>
        </div>
    )
}

export default Post
