import Profile from "./Profile";
import Posts from './Posts'
import Button from "./Button";
import AddPost from "./AddPost";
import {useState} from "react";

const Row = ({ incomingPosts, profile }) => {
    const [addPost, setAddPost] = useState(false)
    // console.log(incomingPosts)
    return (
        <div className='row bg-light'>
            <Profile profile={profile}/>
            <div className='col-8'>
                <div className='row' style={{padding: '0px'}}>
                    <div className='col'>
                        <h2>TimeLine</h2>
                    </div>
                    <div className='col'>
                        <Button value='Add Post' onClick={() => setAddPost(!addPost)}/>
                    </div>
                </div>

                {addPost && (<AddPost />)}
                {incomingPosts.length ? (<Posts incomingPosts={incomingPosts}/>):
                    (<h4>There are no posts available</h4>)}
            </div>
        </div>
    )
}

export default Row