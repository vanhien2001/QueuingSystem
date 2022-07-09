import React, { useState } from "react";
import { Avatar, Breadcrumb, Button, List, Space, Typography } from "antd";
import { BellFilled } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/index";
import { userSelector } from "../../store/reducers/userSlice";
import avatarImage from "../../Asset/Img/avatar.png";
import styles from "./Header.module.scss";
import clsx from "clsx";

const { Title, Text } = Typography;

interface Route {
    path: string;
    breadcrumbName: string;
    children?: Array<{
        path: string;
        breadcrumbName: string;
    }>;
}

const data = [
    {
        name: "Nguyễn Thị Thuỳ Dung",
        time: "12h20 ngày 30/11/2021",
    },
    {
        name: "Nguyễn Thị Thuỳ Dung",
        time: "12h20 ngày 30/11/2021",
    },
    {
        name: "Nguyễn Thị Thuỳ Dung",
        time: "12h20 ngày 30/11/2021",
    },
    {
        name: "Nguyễn Thị Thuỳ Dung",
        time: "12h20 ngày 30/11/2021",
    },
    {
        name: "Nguyễn Thị Thuỳ Dung",
        time: "12h20 ngày 30/11/2021",
    },
    {
        name: "Nguyễn Thị Thuỳ Dung",
        time: "12h20 ngày 30/11/2021",
    },
    {
        name: "Nguyễn Thị Thuỳ Dung",
        time: "12h20 ngày 30/11/2021",
    },
    {
        name: "Nguyễn Thị Thuỳ Dung",
        time: "12h20 ngày 30/11/2021",
    },
];

const getName = (name: string): string => {
    switch (name) {
        case 'devices': return 'thiết bị';
        case 'services': return 'dịch vụ';
        case 'provider': return 'cấp số';
        case 'report': return 'báo cáo';
        default: return name;
    }
}

function itemRender(route: Route, params: any, routes: Route[], paths: any) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
        <span>{route.breadcrumbName}</span>
    ) : (
        <Link to={paths.join("/")}>{route.breadcrumbName}</Link>
    );
}

const Header = () => {
    const location = useLocation();
    let keys = location.pathname.split('/').slice(1)
    const routes: Route[] = keys.map(key => {
        return {
            path: "/" + key,
            breadcrumbName: key,
        }
    })
    const { userLogin } = useAppSelector(userSelector);
    const [showNotify, setShowNotify] = useState<boolean>(false);

    return (
        <div className={styles.header}>
            <Breadcrumb itemRender={itemRender} routes={routes} />;
            <div
                className={clsx(styles.headerRight, {
                    [styles.withoutLogin]: !userLogin,
                })}
            >
                <div className={styles.notifyContainer}>
                    <Button
                        type="primary"
                        className={styles.iconNotify}
                        shape="circle"
                        icon={<BellFilled />}
                        onClick={() => setShowNotify(!showNotify)}
                    />
                    <List
                        className={styles.notifyPopup}
                        style={{ display: showNotify ? "block" : "none" }}
                        header={
                            <Typography.Title className={styles.title}>
                                Thông báo
                            </Typography.Title>
                        }
                        bordered
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item className={styles.item}>
                                <List.Item.Meta
                                    title={
                                        <Typography.Text
                                            style={{
                                                fontSize: "16px",
                                                color: "#BF5805",
                                            }}
                                        >
                                            Người dùng: {item.name}
                                        </Typography.Text>
                                    }
                                    description={
                                        <Typography.Text
                                            style={{
                                                fontSize: "16px",
                                                color: "#535261",
                                                fontWeight: 400,
                                            }}
                                        >
                                            Thời gian nhận số: {item.time}
                                        </Typography.Text>
                                    }
                                />
                            </List.Item>
                        )}
                    />
                </div>
                <Link to="/infor" className={styles.inforContainer}>
                    <Avatar src={avatarImage} className={styles.avatar} />
                    <Space
                        size={0}
                        direction="vertical"
                        style={{ lineHeight: "18px" }}
                    >
                        <Text className={styles.text}>Xin chào</Text>
                        <Text className={styles.nameUser}>
                            {userLogin?.name}
                        </Text>
                    </Space>
                </Link>
            </div>
        </div>
    );
};

export default Header;
