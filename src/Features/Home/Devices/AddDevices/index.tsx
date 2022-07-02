import { CaretDownOutlined } from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, Select, Typography } from "antd";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "../Devices.module.scss";

const { Option } = Select;


const AddDevices = () => {
    return (
        <Form layout="vertical" className={clsx(styles.section ,styles.section2)}>
            <Typography.Title className={styles.title}>
                Quản lý thiết bị
            </Typography.Title>
            <Card>
                <Row>
                    <Col>
                        <Typography.Title className={clsx(styles.title, styles.title2)}>
                            Thông tin thiết bị
                        </Typography.Title>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item
                            label={
                                <Typography.Text className={styles.label}>
                                    Mã thiết bị:
                                </Typography.Text>
                            }
                        >
                            <Input
                                size="large"
                                placeholder="Nhập mã thiết bị"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={
                                <Typography.Text className={styles.label}>
                                    Loại thiết bị:
                                </Typography.Text>
                            }
                        >
                            <Select
                                size="large"
                                placeholder="Chọn loại thiết bị"
                                suffixIcon={
                                    <CaretDownOutlined
                                        style={{
                                            fontSize: "20px",
                                            color: "#FF7506",
                                        }}
                                    />
                                }
                            >
                                <Option key={1} value={"kisok"}>
                                    {"Kisok"}
                                </Option>
                                <Option key={2} value={"Hệ thống"}>
                                    {"Hệ thống"}
                                </Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={
                                <Typography.Text className={styles.label}>
                                    Tên thiết bị:
                                </Typography.Text>
                            }
                        >
                            <Input
                                size="large"
                                placeholder="Nhập tên thiết bị"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={
                                <Typography.Text className={styles.label}>
                                    Tên đăng nhập:
                                </Typography.Text>
                            }
                        >
                            <Input size="large" placeholder="Nhập tài khoản" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={
                                <Typography.Text className={styles.label}>
                                    Địa chỉ IP:
                                </Typography.Text>
                            }
                        >
                            <Input size="large" placeholder="Nhập địa chỉ IP" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={
                                <Typography.Text className={styles.label}>
                                    Mật khẩu:
                                </Typography.Text>
                            }
                        >
                            <Input size="large" placeholder="Nhập mật khẩu" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label={
                                <Typography.Text className={styles.label}>
                                    Dịch vụ sử dụng:
                                </Typography.Text>
                            }
                        >
                            <Select
                                mode="multiple"
                                allowClear
                                size="large"
                                placeholder="Nhập dịch vụ sử dụng"
                            >
                                <Option key={1} value={"Khám tim mạch"}>
                                    Khám tim mạch
                                </Option>
                                <Option key={2} value={"Khám sản phụ khoa"}>
                                    Khám sản phụ khoa
                                </Option>
                                <Option key={3} value={"Khám răng hàm mặt "}>
                                    Khám răng hàm mặt
                                </Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </Card>
            <Row
                gutter={32}
                justify="center"
                className={styles.buttonContainer}
            >
                <Col>
                    <Button
                        type="primary"
                        ghost
                        size="large"
                        className={styles.button}
                    >  
                        <Link to="../">Hủy bỏ</Link>
                    </Button>
                </Col>
                <Col>
                    <Button
                        size="large"
                        type="primary"
                        className={styles.button}
                    >
                        Thêm thiết bị
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default AddDevices;
