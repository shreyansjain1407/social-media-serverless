import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Row from "./Components/Row";
import {useEffect, useState} from "react";

function App() {

    const [profile, setProfile] = useState([])
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const getPosts = async () => {
            const incomingPosts = await getPostsFromServer()
            console.log(incomingPosts)
            setPosts(incomingPosts.posts)
            setProfile(incomingPosts.profile)
        }
        getPosts()
    }, [])

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
        <Row incomingPosts={posts} profile={profile}/>
      </div>
  );
}

export default App;
