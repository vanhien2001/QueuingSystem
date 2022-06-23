import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Features/Auth";
import Home from "./Features/Home/Home";
import 'antd/dist/antd.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/auth/*" element={<Auth />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to="/auth/login" replace />} />
            </Routes>
        </div>
    );
};

export default App;
