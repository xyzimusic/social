import React from 'react';
import s from './Post.module.css'

export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://mtdata.ru/u2/photoD82D/20011252804-0/original.jpg" alt="avatar"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
};

export default Post;