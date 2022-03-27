import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

function Profile(props) {
    const {profileId}=useParams()
    const navigate=useNavigate();
    return (
        <div>profileId IS {profileId}<button onClick={()=>navigate("/about")}>change to about</button></div>

    );
}

export default Profile;