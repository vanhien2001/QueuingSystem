import { Route, Routes } from "react-router-dom";
import ProviderTable from "./ProviderTable";


const index = () => {
    return (
        <Routes>
            <Route path="/" element={<ProviderTable />} />
        </Routes>
    );
};

export default index;