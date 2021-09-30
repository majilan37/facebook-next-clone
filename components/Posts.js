import { collection, query, orderBy, getDocs } from '@firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import Post from './Post'

function Posts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchData =  async () => {
            const getPosts = [];
            const docsData = collection(db, "posts")
            
            await getDocs(query(docsData, orderBy('timestamp', 'desc')))
                    .then((doc) => doc.docs.map((item) => getPosts.push({...item.data()})))
            setPosts(getPosts)
        }
        fetchData();
    }, [])
    return (
        <div>
            {posts?.map((post, index) => (
               <Post 
                    key={index} 
                    name={post.name}
                    message={post.message} 
                    timestamp={post.timestamp}
                    email={post.email}
                    image={post.image}
                    postImage={post.postImage}
                />
            ))}
        </div>
    )
}

export default Posts
