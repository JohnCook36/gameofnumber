const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 13},
        {id: 2, message: 'Hi', likesCount: 4},
        {id: 3, message: 'Yo', likesCount: 26},
        {id: 4, message: 'It is cool', likesCount: 1},
        {id: 5, message: 'Good day', likesCount: 7},
    ],
    newPostText: "",
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile}
        }

        default:
            return state;
    }

};

export const addPost = () => ({ type: ADD_POST});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;
