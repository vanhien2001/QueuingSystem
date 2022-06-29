import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import Auth from "./Features/Auth";
import Home from "./Features/Home/Home";
import store from "./store";
import "./App.less";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/auth/*" element={<Auth />} />
                <Route path="/*" element={<Home />} />
                {/* <Route
                    path="/"
                    element={<Navigate to="/auth/login" replace />}
                /> */}
            </Routes>
        </Provider>
    );
};

export default App;
