import { Space, Typography } from "antd";
import clsx from "clsx";
import styles from "./Login.module.scss";

interface propType {
    imgSrc: string;
    text ?: string;
    subtext ?: string;
}

const Image = ({ imgSrc, text, subtext } : propType) => {
    return (
        <div className={clsx(styles.image, {[styles.widthText]: text || subtext})}>
            <img src={imgSrc} alt="" />
            {
                ( text || subtext ) &&
                <Space
                    align="start"
                    direction="vertical"
                    className={clsx(styles.text)}
                >
                    <Typography.Text>{subtext}</Typography.Text>
                    <Typography.Text className={clsx(styles.text1)}>
                        {text}
                    </Typography.Text>
                </Space>
            }
        </div>
    );
};

export default Image;
