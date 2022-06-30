import { Route, Routes } from "react-router-dom";
import ServicesTable from "./ServicesTable";


const index = () => {
    return (
        <Routes>
            <Route path="/" element={<ServicesTable />} />
        </Routes>
    );
};

export default index;