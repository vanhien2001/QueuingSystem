import React, { useEffect, useState } from "react";
import { Avatar, Breadcrumb, Button, List, Space, Typography } from "antd";
import { BellFilled } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store";
import {
    providerNumberSelector,
    getAll,
} from "../../store/reducers/providerNumberSlice";
import { userSelector } from "../../store/reducers/userSlice";
import avatarImage from "../../Asset/Img/avatar.png";
import styles from "./Header.module.scss";
import clsx from "clsx";
import moment from "moment";

const { Title, Text } = Typography;

interface Route {
    path: string;
    breadcrumbName: string;
    children?: Array<{
        path: string;
        breadcrumbName: string;
    }>;
}

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
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { loading, providerNumbers } = useAppSelector(providerNumberSelector);

    let keys = location.pathname.split('/').slice(1)
    const routes: Route[] = keys.map(key => {
        return {
            path: "/" + key,
            breadcrumbName: key,
        }
    })
    const { userLogin } = useAppSelector(userSelector);
    const [showNotify, setShowNotify] = useState<boolean>(false);

    useEffect(() => {
        dispatch(getAll());
    }, []);

    return (
        <div className={styles.header}>
            <Breadcrumb itemRender={itemRender} routes={routes} />
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
                        dataSource={providerNumbers}
                        renderItem={(item) => (
                            <List.Item className={styles.item} onClick={() => {navigate(`../provider/detail/${item.id}`); setShowNotify(false);}}>
                                <List.Item.Meta
                                    title={
                                        <Typography.Text
                                            style={{
                                                fontSize: "16px",
                                                color: "#BF5805",
                                            }}
                                        >
                                            Người dùng: {item.user}
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
                                            Thời gian nhận số: {moment(item.timeGet.toDate()).format("HH:mm") + " ngày " + moment(item.timeGet.toDate()).format("DD/MM/YYYY")}
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
