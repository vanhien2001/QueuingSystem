import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ManageRole from './ManageRole';
import ManageAccount from './ManageAccount';
import HistoryUser from './HistoryUser';

const index = () => {
    return (
        <Routes>
            <Route path="/roles/*" element={<ManageRole />} />
            <Route path="/accounts/*" element={<ManageAccount />} />
            <Route path="/history" element={<HistoryUser />} />
        </Routes>
    );
};

export default index;
