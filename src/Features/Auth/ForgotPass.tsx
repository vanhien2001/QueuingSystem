import { Button, Form, Input, Typography } from "antd";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Form.module.scss";

interface formValue {
    email: string;
}

const ForgotPass = () => {
    const navigate = useNavigate();

    const onFinish = (value: formValue) => {
        console.log(value);
        navigate("/auth/change-password");
    };
    return (
        <Form name="login" layout="vertical" className={clsx(styles.form)} onFinish={onFinish}>
            <Typography.Title className={clsx(styles.title)}>
                Đặt lại mật khẩu
            </Typography.Title>
            <Form.Item
                label="Vui lòng nhập email để đặt lại mật khẩu của bạn"
                name="email"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập email",
                    },
                    {
                        type: "email",
                        message: "Email không hợp lệ",
                    },
                ]}
            >
                <Input size="large" style={{ borderRadius: "8px" }} />
            </Form.Item>
            <Form.Item>
                <div
                    className={clsx(styles.buttonContainer)}
                    style={{ flexDirection: "row" }}
                >
                    <Button
                        className={clsx(styles.btn)}
                        type="primary"
                        htmlType="submit"
                        // ghost
                    >
                        <Link to="/auth/login">Huỷ</Link>
                    </Button>
                    <Button
                        className={clsx(styles.btn)}
                        type="primary"
                        htmlType="submit"
                    >
                        Tiếp tục
                    </Button>
                </div>
            </Form.Item>
        </Form>
    );
};

export default ForgotPass;
