import React, {useEffect, useMemo, useState} from "react";
import styles from './Home.module.scss';
import api from '../../services'
import {batch} from "react-redux";

function Home(props) {
    const [name,setName]=useState(0);
    const [age,setAge]=useState(11);
    const [json,setJson]=useState();
    const [namePlus,setNamePlus]=useState();
    useEffect(()=>{
        // fetch('/api/testRestTemplate')
        //     .then(response => response.json())
        //     .then(data => setJson(data.o[0].name));
        api.get("/testRestTemplate").then(rsp=>{
            setJson(rsp.data.o[0].name)
        })
    },[])
    useEffect(()=>{
        console.log("name:"+name+", age="+age)
    },[name,age])
    const fn=()=>{
        setTimeout(()=>{
            batch(()=> {
                setName(name + 1);
                setAge(age + 1)
            })
        },3000)
    }
    useMemo(()=>{
        setNamePlus(json+1)
    },[json])

    return(
        <div>
            <div className={styles.wrapper}>this is  Home page,<span className={styles.wrapperTitle}>json is {namePlus}</span></div>
            <div >name  is {name},age is {age} <button onClick={fn}>test batch</button></div>
        </div>
    )
}
export default Home;