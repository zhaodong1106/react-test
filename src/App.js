import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import { ConfigProvider, DatePicker, message,Button,Space} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import Anjian from "./pages/anjian/Anjian";
import Counter from "./pages/Counter";


function App() {
  return (
      <ConfigProvider locale={zhCN}>
        <BrowserRouter>
            <nav>
                <Space>
                    <Link  to={"/"}>Home</Link>
                    <Link  to={"/about"}>About</Link>
                    <Link  to={"/profile/3333"}>profile</Link>
                    <Link  to={"/anjian"}>anjian</Link>
                    <Link  to={"/counter"}>counter</Link>
                    <Button type={'primary'}>2222</Button>
                </Space>
            </nav>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/anjian"} element={<Anjian/>}/>
                <Route path={"/profile/:profileId"} element={<Profile/>}/>
                <Route path={"/counter"} element={<Counter/>}/>
            </Routes>
        </BrowserRouter>
      </ConfigProvider>
  );
}

export default App;
