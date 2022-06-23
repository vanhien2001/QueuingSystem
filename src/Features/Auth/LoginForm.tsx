import { Button, Form, Input } from "antd";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Form.module.scss";

interface formValue {
    username: string;
    password: string;
}

const LoginForm = () => {
    const navigate = useNavigate();

    const onFinish = ( value : formValue) => {
        console.log(value);
        navigate("/home");
    };

    return (
        <Form name="login" layout="vertical" onFinish={onFinish}>
            <Form.Item
                label="Tên đăng nhập"
                name="username"
                rules={[
                    {
                        required: true,
                        message: "Không được bỏ trống",
                    },
                ]}
            >
                <Input size="large" style={{borderRadius: "8px"}}/>
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    { required: true, message: "Không được bỏ trống" },
                ]}
            >
                <Input.Password size="large" style={{borderRadius: "8px"}}/>
            </Form.Item>
            <Form.Item>
                <div className={clsx(styles.buttonContainer)}>
                    <Button className={clsx(styles.btn)} type="primary" htmlType="submit">
                        Đăng nhập
                    </Button>
                    <Link className={clsx(styles.link)} to="/auth/forgot-password">Quên mật khẩu ?</Link>
                </div>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
