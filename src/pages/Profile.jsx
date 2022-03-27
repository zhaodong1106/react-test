import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "antd";

function Profile(props) {
    const {profileId}=useParams()
    const navigate=useNavigate();
    return (
        <div>profileId IS {profileId}<Button onClick={()=>navigate("/about")}>change to about</Button></div>

    );
}

export default Profile;