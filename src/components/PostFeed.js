import React, {useState} from "react";
import PostForm from "./PostForm";
import Post from "./Post";
import {state} from "../state/State";
import {BlockButton} from "./BlockButton";


function PostFeed() {
    const [posts, setPosts] = useState([])

    const addPost = post => {
        const allPosts = [post, ...posts]
        setPosts(allPosts);
    }

    const editPost = (postId, newValue) => {
        setPosts(prev => prev.map(item => (item.id === postId ? newValue : item)))
    }

    const removePost = (id) => {
        const newPosts = [...posts].filter(post => post.id !== id)
        setPosts(newPosts)
    }

    const sortUp = (fieldName) => {
        const sortPost = [...posts].sort(function (a, b) {
            return a[fieldName] < b[fieldName] ? -1 : a[fieldName] > b[fieldName] ? 1 : 0
        })
        setPosts(sortPost)
    }

    const sortDown = (fieldName) => {
        const sortPost = [...posts].sort(function (a, b) {
            return a[fieldName] > b[fieldName] ? -1 : a[fieldName] < b[fieldName] ? 1 : 0
        })
        setPosts(sortPost)
    }

    return (
        <div className="mainDiv">
            <div className="blockH1">
                <h1>Если есть чем поделиться - обязательно напишите!)</h1>
            </div>
            <div className="actionBlock">
                <div>
                    <PostForm onSubmit={addPost}
                              state={state}/>
                    <BlockButton
                        sortUp={sortUp}
                        sortDown={sortDown}
                    />
                </div>
                <div className="blockPosts">

                    <Post posts={posts}
                          removePost={removePost}
                          editPost={editPost}
                          state={state}
                    />
                </div>
            </div>
        </div>
    )
}

export default PostFeed