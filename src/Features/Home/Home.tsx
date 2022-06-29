import { Layout } from "antd";
import clsx from "clsx";
import styles from "./Home.module.scss";
import SideBar from "./SideBar/SideBar";
import HeaderContent from "./Header/Header";

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
                    <Content>Content</Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default Home;
