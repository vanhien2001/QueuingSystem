import { Route, Routes } from "react-router-dom";
import DevicesTable from "./DevicesTable";


const index = () => {
    return (
        <Routes>
            <Route path="/" element={<DevicesTable />} />
        </Routes>
    );
};

export default index;
