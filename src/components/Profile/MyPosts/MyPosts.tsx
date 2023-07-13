import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message ={'Hi, How are u?'} likesCount ='23'></Post>
                <Post message ={'It`s my first post'} likesCount ='0'></Post>
            </div>
        </div>
    );
};

export default MyPosts;