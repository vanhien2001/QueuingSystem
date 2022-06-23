import {
    AppstoreOutlined,
    WechatOutlined,
    DesktopOutlined,
    CodepenOutlined,
    FileTextOutlined,
    ExportOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Button, MenuProps } from "antd";
import { Menu } from "antd";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Logo from "../../../Asset/Img/LogoAlta.svg";
import styles from "./SideBar.module.scss";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    key: React.Key,
    label: React.ReactNode,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem("1", "Dasboard", <AppstoreOutlined />),
    getItem("2", "Thiết bị", <DesktopOutlined />),
    getItem("3", "Dịch vụ", <WechatOutlined />),
    getItem("4", "Cấp số", <CodepenOutlined />),
    getItem("5", "Báo cáo", <FileTextOutlined />),
    getItem("6", "Cài đặt hệ thống", <SettingOutlined />, [
        getItem("7", "Quản lý vai trò"),
        getItem("8", "Quản lý tài khoản"),
        getItem("9", "Quản lý người dùng"),
    ]),
];

const SideBar = () => {
    return (
        <div className={clsx(styles.sideBar)}>
            <div>
                <div className={clsx(styles.logo)}>
                    <img src={Logo} alt="Alta" />
                </div>
                <div className="menu">
                    <Menu defaultSelectedKeys={["1"]} items={items} />
                </div>
            </div>
            <div className={clsx(styles.buttonContainer)}>
                <Button
                    className={clsx(styles.btn)}
                    type="primary"
                    htmlType="submit"
                    icon={<ExportOutlined />}
                >
                    <Link to="/auth/login">Đăng xuất</Link>
                </Button>
            </div>
        </div>
    );
};

export default SideBar;
