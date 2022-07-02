import { CaretDownOutlined } from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, Select, Typography } from "antd";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./ManageAccount.module.scss";

const { Option } = Select;


const AddManageAccount = () => {
    return (
        <Form layout="vertical" className={clsx(styles.section, styles.section2)}>
            <Typography.Title className={styles.title}>
                Quản lý tài khoản
            </Typography.Title>
            <Card>
                <Row>
                    <Col>
                        <Typography.Title className={clsx(styles.title, styles.title2)}>
                            Thông tin tài khoản
                        </Typography.Title>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item
                            label={
                                <Typography.Text className={styles.label}>
                                    Họ tên
                                </Typography.Text>
                            }
                        >
                            <Input
                                size="large"
                                placeholder="Nhập họ tên"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={
                                <Typography.Text className={styles.label}>
                                   Tên đăng nhập
                                </Typography.Text>
                            }
                        >
                            <Input
                                size="large"
                                placeholder="Nhập tên đăng nhập"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={
                                <Typography.Text className={styles.label}>
                                    Số điện thoại
                                </Typography.Text>
                            }
                        >
                            <Input
                                size="large"
                                placeholder="Nhập số điện thoại"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={
                                <Typography.Text className={styles.label}>
                                    Mật khẩu
                                </Typography.Text>
                            }
                        >
                            <Input.Password size="large" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={
                                <Typography.Text className={styles.label}>
                                    Email
                                </Typography.Text>
                            }
                        >
                            <Input size="large" placeholder="Nhập email" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={
                                <Typography.Text className={styles.label}>
                                    Nhập lại mật khẩu:
                                </Typography.Text>
                            }
                        >
                            <Input.Password size="large" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={
                                <Typography.Text className={styles.label}>
                                    Vai trò
                                </Typography.Text>
                            }
                        >
                            <Select
                                size="large"
                                defaultValue={null}
                                suffixIcon={
                                    <CaretDownOutlined
                                        style={{
                                            fontSize: "20px",
                                            color: "#FF7506",
                                        }}
                                    />
                                }
                            >
                                <Option key={1} value={null}>
                                    Chọn vai trò
                                </Option>
                                <Option key={2} value={1}>
                                    Khám sản phụ khoa
                                </Option>
                                <Option key={3} value={2}>
                                    Khám răng hàm mặt
                                </Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={
                                <Typography.Text className={styles.label}>
                                    Tình trạng
                                </Typography.Text>
                            }
                        >
                            <Select
                                size="large"
                                defaultValue={"Hoạt động"}
                                suffixIcon={
                                    <CaretDownOutlined
                                        style={{
                                            fontSize: "20px",
                                            color: "#FF7506",
                                        }}
                                    />
                                }
                            >
                                <Option key={1} value={"Hoạt động"}>
                                    Hoạt động
                                </Option>
                                <Option key={2} value={"Ngưng hoạt động"}>
                                    Ngưng hoạt động
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
                        Thêm
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default AddManageAccount;
