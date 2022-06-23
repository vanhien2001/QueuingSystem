import { Layout } from "antd";
import clsx from "clsx";
import styles from "./Home.module.scss";
import SideBar from "./SideBar/SideBar";

const { Sider, Content } = Layout;

const Home = () => {
    return (
        <div className={clsx(styles.homeContainer)}>
            <Layout style={{ height: "100%"}}>
                <Sider width={200}>
                    <SideBar/>
                </Sider>
                <Content>Content</Content>
            </Layout>
        </div>
    );
};

export default Home;
