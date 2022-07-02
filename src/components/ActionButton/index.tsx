import React from "react";
import { Button, Typography } from "antd";
import styles from "./ActionButton.module.scss";

interface propType {
    text: string;
    icon: React.ReactNode;
    onClick ?: () => void;
}
const ActionButton = ({text, icon, onClick}: propType) => {
    return (
        <div className={styles.container} onClick={onClick}>
            <Button
                type="primary"
                className={styles.iconNotify}
                icon={icon}
            />
            <Typography.Title className={styles.text}>
                {text}
            </Typography.Title>
        </div>
    );
};

export default ActionButton;
