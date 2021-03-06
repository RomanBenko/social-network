const ADD_POST = 'ADD_POST'
const ON_POST_CHANGE = 'ON-POST-CHANGE'

let initialState =   {
    postsData: [
        {
            id: 1,
            message: "Hello React!",
            likesCount: 3221
        },
        {
            id: 2,
            message: "I'm your fan!",
            likesCount: 1289
        },
        {
            id: 3,
            message: "Keep going ON!!!",
            likesCount: 4221
        }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }

        case ON_POST_CHANGE:
            return {
                ...state,
                newPostText: action.newText
            }

        default:
            return state
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const onPostChangeActionCreator = (text) => ({
    type: ON_POST_CHANGE,
    newText: text
})

export default profileReducer
