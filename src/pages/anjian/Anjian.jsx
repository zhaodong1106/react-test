import React from 'react';
import {useSelector} from "react-redux";

function Anjian(props) {
    const count=useSelector(state => state.counter.value)
    return (
        <div>
            <div>dsad</div>
            <div>{count}</div>
        </div>
    );
}

export default Anjian;