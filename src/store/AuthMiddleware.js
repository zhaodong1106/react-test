const AuthMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    console.log("middleware:"+action.type)
    if ( action.type?.startsWith("counter/") ) {
        const authState = store.getState().counter;
        localStorage.setItem('counter', JSON.stringify(authState))
    }
    return result;
};
export default AuthMiddleware;