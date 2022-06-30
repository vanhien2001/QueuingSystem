import { Layout } from "antd";
import clsx from "clsx";
import styles from "./Home.module.scss";
import SideBar from "./SideBar/SideBar";
import HeaderContent from "./Header/Header";
import { Route, Routes } from "react-router-dom";
import Devices from "./Devices"
import Services from "./Services";
import Provider from "./Provider";
import Report from "./Report";
import Setting from "./Setting";
import Infor from "./Infor";

const { Sider, Content, Header } = Layout;

const Home = () => {
    return (
        <div className={clsx(styles.homeContainer)}>
            <Layout style={{ height: "100%" }}>
                <Sider width={205}>
                    <SideBar />
                </Sider>
                <Layout>
                    <Header style={{ height: "88px", padding: "0", backgroundColor: "transparent"}}>
                        <HeaderContent/>
                    </Header>
                    <Content>
                        <Routes>
                            <Route path="/devices/*" element={<Devices />} />
                            <Route path="/Services/*" element={<Services />} />
                            <Route path="/Provider/*" element={<Provider />} />
                            <Route path="/report/*" element={<Report />} />
                            <Route path="/setting/*" element={<Setting />} />
                            <Route path="/infor" element={<Infor />} />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default Home;
