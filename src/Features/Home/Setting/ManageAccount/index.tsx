import React from "react";
import { Route, Routes } from "react-router-dom";
import ManageAccountTable from "./ManageAccountTable";


const index = () => {
    return (
        <Routes>
            <Route path="/" element={<ManageAccountTable />} />
        </Routes>
    );
};

export default index;