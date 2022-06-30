import {
    AppstoreOutlined,
    WechatOutlined,
    DesktopOutlined,
    CodepenOutlined,
    FileTextOutlined,
    ExportOutlined,
    SettingOutlined,
    MoreOutlined,
} from "@ant-design/icons";
import { Button, MenuProps } from "antd";
import { Menu } from "antd";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../Asset/Img/LogoAlta.svg";
import styles from "./SideBar.module.scss";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    key: React.Key,
    label: React.ReactNode,
    icon?: React.ReactNode,
    expandIcon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        expandIcon
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem("/dashboard", <Link to="/dashboard" >DashBoard</Link> , <AppstoreOutlined />),
    getItem("/devices", <Link to="/devices" >Thiết bị</Link> , <DesktopOutlined />),
    getItem("/services", <Link to="/services" >Dịch vụ</Link>, <WechatOutlined />),
    getItem("/provider", <Link to="/provider" >Cấp số</Link>, <CodepenOutlined />),
    getItem("/report", <Link to="/report" >Báo cáo</Link>, <FileTextOutlined />),
    getItem("setting", "Cài đặt hệ thống", <SettingOutlined />, <MoreOutlined className={styles.expandIcon}/>, [
        getItem("/setting/manage-roles", <Link to="/setting/manage-roles" >Quản lý vai trò</Link>),
        getItem("/setting/manage-accounts", <Link to="/setting/manage-accounts" >Quản lý tài khoản</Link>),
        getItem("/setting/user-history", <Link to="/setting/user-history" >Nhật ký người dùng</Link>),
    ]),
];

const SideBar = () => {
    const location = useLocation();
    return (
        <div className={clsx(styles.sideBar)}>
            <div>
                <div className={clsx(styles.logo)}>
                    <img src={Logo} alt="Alta" />
                </div>
                <div className="menu">
                    <Menu selectedKeys={[location.pathname]} items={items} />
                </div>
            </div>
            <div className={clsx(styles.buttonContainer)}>
                <Button
                    className={clsx(styles.btn)}
                    type="primary"
                    ghost
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
