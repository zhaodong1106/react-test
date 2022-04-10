import { configureStore } from '@reduxjs/toolkit'
import CountReducer from "./CountReducer";
import TokenReducer from "./TokenReducer";

const reHydrateStore = () => {
    if (localStorage.getItem('counter') !== null) {
        return JSON.parse(localStorage.getItem('counter')); // re-hydrate the store
    }
};

const reTokenStore = () => {
    if (localStorage.getItem('token') !== null) {
        return JSON.parse(localStorage.getItem('token')); // re-hydrate the store
    }
};

const authMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    console.log("middleware:"+action.type)
    if ( action.type?.startsWith("counter/") ) {
        const authState = store.getState().counter;
        localStorage.setItem('counter', JSON.stringify(authState))
    }
    return result;
};

const tokenMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    console.log("token middleware:"+action.type)
    if ( action.type?.startsWith("token/") ) {
        const token = store.getState().token;
        localStorage.setItem('token', JSON.stringify(token))
    }
    return result;
};

export default configureStore({
    reducer: {
        counter: CountReducer,
        token: TokenReducer
    },
    preloadedState: {
            counter:reHydrateStore(),
            token: reTokenStore()
    },
    middleware: [authMiddleware,tokenMiddleware]
})