const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            debugger
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }

};

export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: {id, email,login}});
export default authReducer;
