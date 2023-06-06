import React from 'react';
import './App.css';
import { Sidebar } from "./components/Sidebar/Sidebar";
import {Header} from "./components/Header/Header";
import {Home} from "./screens/Home/Home";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {Tickets} from "./screens/Tickets/Tickets";

export const App = () => {
    return (
        <React.StrictMode>
        <div className={"App"}>
            <BrowserRouter>
            <div className="flex">
                <Sidebar/>
                <div className="column">
                    <Header/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/tickets" element={<Tickets/>}/>
                        </Routes>
                </div>
            </div>
            </BrowserRouter>
        </div>
        </React.StrictMode>
    );
};
