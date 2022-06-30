import clsx from "clsx";
import { Col, Row } from "antd";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import ChangePass from "./ChangePass";
import ForgotPass from "./ForgotPass";
import loginImage from "../../Asset/Img/login.svg";
import loginImage2 from "../../Asset/Img/login2.svg";
import Logo from "../../Asset/Img/LogoAlta.svg";
import styles from "./Login.module.scss";
import Image from "./Image";

const Login = () => {
    return (
        <>
            <Row style={{ height: "100vh" }}>
                <Col span={10} style={{ background: "#F6F6F6" }}>
                    <div className={clsx(styles.logo)}>
                        <img src={Logo} alt="Alta" />
                    </div>
                    <div className={clsx(styles.formContainer)}>
                        <Routes>
                            <Route path="/login" element={<LoginForm />} />
                            <Route
                                path="/change-password"
                                element={<ChangePass />}
                            />
                            <Route
                                path="/forgot-password"
                                element={<ForgotPass />}
                            />
                        </Routes>
                    </div>
                </Col>
                <Col span={14}>
                    <Routes>
                        <Route
                            path="/login"
                            element={<Image imgSrc={loginImage} />}
                        />
                        <Route
                            path="/change-password"
                            element={<Image imgSrc={loginImage2} />}
                        />
                        <Route
                            path="/forgot-password"
                            element={<Image imgSrc={loginImage2} />}
                        />
                    </Routes>
                </Col>
            </Row>
        </>
    );
};

export default Login;
