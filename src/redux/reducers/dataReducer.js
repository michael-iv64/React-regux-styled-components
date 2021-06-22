const initialState = {
    cities: [
        {
            "id": "MOW",
            "name": "Москва"
          },
          {
            "id": "SPB",
            "name": "Санкт-Петербург"
          },
          {
            "id": "KZN",
            "name": "Казань"
          },
          {
            "id": "KDA",
            "name": "Краснодар"
          }
    ],
    sourses: [
        "Инстаграм",
        "От друзей",
        "Реклама",
        "Поисковые системы",
        "Другое"
    ]
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        // case CREATE_POST:
        //     // return {...state, posts: state.posts.concat(action.payload)}
        //     return { ...state, posts: [...state.posts, action.payload] }
        // case FETCH_POST:
        //     return {...state, fetchedPosts: action.payload}
        // case FETCH_POST_PAGINATION:
        //     return {...state, fetchedPosts: action.payload}
        default:
            return state
    }
}