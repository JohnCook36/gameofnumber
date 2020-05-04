import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
    debugger;
    let postsElements =
        props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount} key={p.id}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        //  props.addPost();
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text);
        // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>
                </div>

                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

};

export default MyPosts;


// let addPost= () => {
//     let text = newPostElement.current.value;
//     props.addPost(text);
//     newPostElement.current.value = '';
// };
//
// let onPostChange = () => {
//     let text = newPostElement.current.value;
//     props.updateNewPostText(text);
// };
//
// return (
//     <div className={s.postsBlock}>
//         <h3>My Post</h3>
//         <div>
//             <div>
//                     <textarea onPostChange={onPostChange} ref={newPostElement}
//                               value={props.newPostText}/>
//             </div>
//
//             <div>
//                 <button onClick={ addPost }>Add post</button>
//             </div>