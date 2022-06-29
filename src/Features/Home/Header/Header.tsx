import React from "react";
import { Avatar, Button, Space, Typography } from "antd";
import { BellFilled } from "@ant-design/icons";
import clsx from "clsx";
import avatarImage from "../../../Asset/Img/avatar.png";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const Header = () => {
    return (
        <div className={styles.header}>
            <Title className={styles.title}>Thông tin cá nhân</Title>
            <div className={styles.headerRight}>
                <Button
                    type="primary"
                    className={styles.iconNotify}
                    shape="circle"
                    icon={<BellFilled/>}
                />
                <Link to='/infor' className={styles.inforContainer}>
                    <Avatar src={avatarImage} className={styles.avatar} />
                    <Space
                        size={0}
                        direction="vertical"
                        style={{ lineHeight: "18px" }}
                    >
                        <Text className={styles.text}>Xin chào</Text>
                        <Text className={styles.nameUser}>Nguyễn Văn Hiền</Text>
                    </Space>
                </Link>
            </div>
        </div>
    );
};

export default Header;
