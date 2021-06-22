import {CREATE_POST} from '../constants/constants';
const initialState = {
    posts: [],
    fetchedPosts: {
        status: '',
        message: {
            tasks: [{
                username: 'mike',
                status: '',
                text: 'nothing',
                id: ''
            }]
        }
    }
}

const init = {
    posts: [],
}
export const postReducer = (state = init, action) => {
    switch (action.type) {
        case CREATE_POST:
            // return {...state, posts: state.posts.concat(action.payload)}
            return { ...state, posts: [...state.posts, action.payload] }
        // case FETCH_POST:
        //     return {...state, fetchedPosts: action.payload}
        // case FETCH_POST_PAGINATION:
        //     return {...state, fetchedPosts: action.payload}
        default:
            return state
    }
}