import Post from "./Post";
import Button from "./Button";
import AddPost from "./AddPost";
import {useState} from "react";

const Posts = ({ incomingPosts }) => {

    return (
        incomingPosts.map((post) => (
            <div className='' style={{padding: '10px', width: '36rem'}}>
                <Post
                    id = {post.id}
                    title = {post.title}
                    username = {post.username}
                    content = {post.content}
                />
            </div>
        ))
    )
}

export default Posts