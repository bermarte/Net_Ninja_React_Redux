const initState = {
    posts:[
        {id: 1, title: 'Squirtle laid an egg', body: 'Proin suscipit sit amet mi vel aliquet. Proin ut eros vehicula, viverra neque eget, cursus libero. Morbi tempus molestie enim, ac ultricies mi sollicitudin at. Quisque convallis, lorem vel rhoncus facilisis, ante purus placerat mauris, id imperdiet dui metus eget nulla. Donec nulla turpis, elementum sit amet placerat id, mollis at enim. Sed velit diam, tristique et rhoncus rhoncus, cursus ac odio.'},
        {id: 2, title: 'The story of the two sisters', body: 'Donec fermentum sem at venenatis eleifend. Suspendisse commodo varius maximus. In hac habitasse platea dictumst. Cras rhoncus nisl ut mauris auctor cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam bibendum quis magna eget suscipit. Curabitur congue ornare ante ornare pretium. Sed tincidunt nulla nisl, at molestie dui tincidunt in.'},
        {id: 3, title: 'How to become millionaire', body: 'Integer luctus lorem id lectus interdum, ornare aliquam nunc pellentesque. Aliquam vitae tempus arcu. Sed elementum ornare laoreet. Curabitur dictum nulla non risus pharetra, nec laoreet velit pulvinar. Vivamus vitae massa pellentesque, ultricies libero ac, iaculis leo. Nam a enim sit amet magna rutrum dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.'},
    ]
}
const rootReducer = (state=initState, action) => {
    console.log('action', action)
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })

        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;
