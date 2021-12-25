import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Row from "./Components/Row";
import {useEffect, useState} from "react";

function App() {

    const [profile, setProfile] = useState([])
    const [posts, setPosts] = useState([])
    const [username, setUsername] = useState("")
    useEffect(() => {
        const getPosts = async () => {
            const incomingPosts = await getPostsFromServer()
            // console.log(incomingPosts)
            setPosts(incomingPosts.posts)
            setProfile(incomingPosts.profile)
            setUsername(incomingPosts.profile.username)
        }
        getPosts()
    }, [])

    //Deploying a post to the KV

    const deployPost = async (uploadPost) => {
        // const url = "https://social-media-worker.shreyansjain.workers.dev"
        const url = "http://127.0.0.1:8787"
        const id = Math.floor(Math.random() * 10000) + 1
        const newPost = {id, ...uploadPost}
        setPosts([newPost, ...posts])
        const payload = {"profile": profile, "posts": [newPost, ...posts]}
        await fetch(url, {
            method: "PUT",
            body: JSON.stringify({ payload }),
            headers: {'Content-type': 'text/plain'}
        })
        const incomingPosts = await getPostsFromServer()
        setPosts(incomingPosts.posts)
        console.log(payload)
    }

    const getPostsFromServer = async () => {
        const url = "https://social-media-worker.shreyansjain.workers.dev"
        const resp = await fetch(url, {
            method: "POST",
            body: "",
            headers: { 'Content-type': 'application/json'}
        })
        return resp.json()
    }

    return (
        <div className="container">
            <Navbar />
            <Row
                incomingPosts={posts}
                profile={profile}
                username={username}
                onToggle={deployPost}
            />
        </div>
    );
}

export default App;
