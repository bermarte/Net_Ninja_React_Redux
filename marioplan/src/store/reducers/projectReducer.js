const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'bla bla bla'},
        {id: '2', title: 'collect all stars', content: 'bla bla bla'},
        {id: '3', title: 'egg hunt with yoshi', content: 'bla bla bla'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer;