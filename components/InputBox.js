import { useSession } from 'next-auth/client'
import Image from 'next/image'
import { EmojiHappyIcon } from "@heroicons/react/outline"
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid"
import { useRef, useState } from 'react'
import { db, storage } from '../firebase'
import { ref, uploadString, uploadBytesResumable, getDownloadURL, uploadBytes  } from "firebase/storage";
import { collection, addDoc, setDoc, doc, addDocs } from "firebase/firestore"; 
import { serverTimestamp } from "firebase/firestore";

function InputBox() {
    const [ session ] = useSession()
    const inputRef= useRef(null)
    const fileRef = useRef(null)
    const [imgPost, setImgPost] = useState(null)
    const sendPost = async (e) => {
        e.preventDefault()
        if(!inputRef.current.value) return;
        
        const posts = await addDoc(collection(db, "posts"),{
            name: session.user.name,
            message: inputRef.current.value,
            email:session.user.email,
            image: session.user.image,
            timestamp: serverTimestamp()
        }).then((snap) => {
            if(imgPost){
                const storageRef = ref(storage, `posts/${snap.id}`)
                uploadString(storageRef, imgPost, 'data_url')
               
                const uploadTask = uploadBytesResumable(storageRef, File)
                uploadTask.on('state_changed', null, error => console.error(error), () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) =>{
                        setDoc(doc(db, 'posts', snap.id), {
                            postImage: url,
                        }, { merge: true })
                    })
               })
               setImgPost(null)
            }
        })
        inputRef.current.value = ''
        return posts
    }

    const addImagePost = (e) =>{
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (event) => {
            setImgPost(event.target.result)
        }
    }

    return (
        <div className="bg-white p2 rounded-2xl shadow-md" >
            <div className="flex space-x-4 p-4 items-center" >
                <Image 
                    src={session.user.image}
                    className='rounded-full'
                    width={40}
                    height={40} 
                    layout='fixed'
                />
                <form className='flex flex-1' >
                    <input 
                        type="text" 
                        ref={inputRef}
                        className='rounded-full h-12 bg-gray-100 flex-grow px-5 outline-none' 
                        placeholder={`What's on your mind, ${session.user.name} ?`} 
                    />
                    <button hidden onClick={sendPost} >Submit</button>
                </form>
                {imgPost && (
                        <div onClick={() => setImgPost(null)} className="relative flex flex-col filter hover:brightness-90 cursor-pointer hover:scale-105 " >
                            <img className="object-contain h-10" src={imgPost} alt="" />
                            <p className='font-medium text-red-500' >Remove</p>
                        </div>
                    )}
            </div>
            <div className="flex justify-evenly mx-6 py-2 border-t" >
                <div className='inputIcon' >
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-xs sm:text-sm xl:text-base" >Live Video</p>
                </div>
                <div onClick={() => fileRef.current.click() } className='inputIcon'>
                    <CameraIcon className="h-7 text-green-500" />
                    <p className="text-xs sm:text-sm xl:text-base" >Photo/Edit</p>
                    <input ref={fileRef} onChange={addImagePost} type="file" hidden />
                </div>
                <div className='inputIcon'>
                    <EmojiHappyIcon className="h-7 text-yellow-300" />
                    <p className="text-xs sm:text-sm xl:text-base" >Felling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox
