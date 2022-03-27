import {useEffect, useMemo, useState} from "react";

function Home(props) {
    const [json,setJson]=useState();
    const [namePlus,setNamePlus]=useState();
    useEffect(()=>{
        fetch('/api/testRestTemplate')
            .then(response => response.json())
            .then(data => setJson(data.o[0].name));
    },[])
    useMemo(()=>{
        setNamePlus(json+1)
    },[json])

    return(
        <div>this is Home page,json is {namePlus}</div>
    )
}
export default Home;