import React, {useState} from "react";
import PostForm from "./PostForm";
import {NavLink} from "react-router-dom";

function Post({posts, removePost, editPost, state}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const editSave = (value) => {
        editPost(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }
    if (edit.id) {
        return (
            <div id="positionForm">
                <PostForm edit={edit} state={state} onSubmit={editSave}/>
            </div>
        )
    }

    return (
        posts.map((post, index) => (
            <div key={index} className="postCard">
                <div className="headerPost">
                    <NavLink to={'/authors/' + post.author} key={post.id}
                             className="contentAuthor">{post.author}&#10148;&#10148;</NavLink>
                    <div key={post.id + "c"} className="contentDate">{post.postDate}</div>
                </div>
                <div key={post.id + "a"} className="contentHeading">
                    <h2>{post.heading}</h2>
                </div>
                <div key={post.id + "b"} className="contentTextPost">{post.text}</div>
                <div className="blockPostButton">
                    <button type="button" className="buttonEdit" onClick={() =>
                        setEdit({
                            id: post.id,
                            value_author: post.author,
                            value_heading: post.heading,
                            value_text: post.text,
                        })}>Исправить
                    </button>
                    <button type="button" className="buttonDelete" onClick={() => removePost(post.id)}>Удалить</button>
                </div>
            </div>
        ))
    )
}

export default Post