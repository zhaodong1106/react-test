import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../store/CountReducer";
import {addToken, delToken} from "../store/TokenReducer";

function Counter(props) {
    const  count=useSelector(state => state.counter.value);
    const  dispatch=useDispatch();
    return (
        <div>
            <div>
                <div>
                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                    <span>{count}</span>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                    <button
                        aria-label="addToken"
                        onClick={() => dispatch(addToken(111))}
                    >
                        addToken
                    </button>
                    <button
                        aria-label="addToken"
                        onClick={() => dispatch(delToken())}
                    >
                        delToken
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;