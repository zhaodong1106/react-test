import React, {useEffect, useMemo, useState} from "react";
import styles from './Home.module.scss';

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
        <div className={styles.wrapper}>this is Home page,<span className={styles.wrapperTitle}>json is {namePlus}</span></div>
    )
}
export default Home;