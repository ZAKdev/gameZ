export default (state = {
    content: 'Loading...'
}, action) => {
    switch (action.type) {
        case 'APP_LOADED':
            return Object.assign({}, state, {
                content: action.content,
            });
        default:
            return state;
        }
};
