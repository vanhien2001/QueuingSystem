import React from "react";
import { Route, Routes } from "react-router-dom";
import ManageRoleTable from "./ManageRoleTable";


const index = () => {
    return (
        <Routes>
            <Route path="/" element={<ManageRoleTable />} />
        </Routes>
    );
};

export default index;
