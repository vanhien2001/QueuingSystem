import {
    Button,
    Card,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Typography,
} from "antd";
import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Services.module.scss";

const { Text, Title } = Typography;

const AddService = () => {
    const [prefix, setPrefix] = useState(false);
    const [surfix, setSurfix] = useState(false);
    const [increase, setIncrease] = useState(false);

    return (
        <div className={clsx(styles.section, styles.section2)}>
            <Form name="service-add" layout="vertical">
                <Title level={2} className={styles.title}>
                    Quản lý dịch vụ
                </Title>
                <Card bordered>
                    <Row gutter={24}>
                        <Col span={24}>
                            <Title
                                className={clsx(styles.title, styles.title2)}
                            >
                                Thông tin dịch vụ
                            </Title>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="id"
                                label={
                                    <Text className={styles.label}>
                                        Mã dịch vụ:
                                    </Text>
                                }
                                required={false}
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập mã dịch vụ",
                                    },
                                ]}
                            >
                                <Input size="large" />
                            </Form.Item>

                            <Form.Item
                                name="name"
                                label={
                                    <Text className={styles.label}>
                                        Tên dịch vụ:
                                    </Text>
                                }
                                required={false}
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập mã dịch vụ",
                                    },
                                ]}
                            >
                                <Input size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="description"
                                label={
                                    <Text className={styles.label}>Mô tả:</Text>
                                }
                            >
                                <Input.TextArea
                                    size="large"
                                    placeholder="Mô tả dịch vụ"
                                    style={{ height: "150px" }}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Title
                                className={clsx(styles.title, styles.title2)}
                            >
                                Quy tắc cấp số
                            </Title>
                        </Col>

                        <Col span={12}>
                            <div className={styles.itemWrapper}>
                                <Row className={styles.itemContainer}>
                                    <Col span={7}>
                                        <Checkbox
                                            checked={increase}
                                            onChange={(e) =>
                                                setIncrease(!increase)
                                            }
                                        >
                                            <Text className={styles.label}>
                                                Tăng tự động từ:
                                            </Text>
                                        </Checkbox>
                                    </Col>
                                    <Col span={17}>
                                        <Form.Item noStyle name={""}>
                                            <InputNumber
                                                min={0}
                                                max={9999}
                                                size="large"
                                                className={styles.providerInput}
                                                controls={false}
                                            />
                                        </Form.Item>
                                        <Typography.Text
                                            className={styles.text}
                                            style={{ margin: "0 8px" }}
                                        >
                                            đến
                                        </Typography.Text>
                                        <Form.Item noStyle name={""}>
                                            <InputNumber
                                                min={0}
                                                max={9999}
                                                size="large"
                                                className={styles.providerInput}
                                                controls={false}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row className={styles.itemContainer}>
                                    <Col span={7}>
                                        <Checkbox
                                            checked={increase}
                                            onChange={(e) =>
                                                setIncrease(!increase)
                                            }
                                        >
                                            <Text className={styles.label}>
                                                Prefix:
                                            </Text>
                                        </Checkbox>
                                    </Col>
                                    <Col span={17}>
                                        <Form.Item noStyle name={""}>
                                            <InputNumber
                                                min={0}
                                                max={9999}
                                                size="large"
                                                className={styles.providerInput}
                                                controls={false}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row className={styles.itemContainer}>
                                    <Col span={7}>
                                        <Checkbox
                                            checked={increase}
                                            onChange={(e) =>
                                                setIncrease(!increase)
                                            }
                                        >
                                            <Text className={styles.label}>
                                                Surfix:
                                            </Text>
                                        </Checkbox>
                                    </Col>
                                    <Col span={17}>
                                        <Form.Item noStyle name={""}>
                                            <InputNumber
                                                min={0}
                                                max={9999}
                                                size="large"
                                                className={styles.providerInput}
                                                controls={false}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row className={styles.itemContainer}>
                                    <Col span={24}>
                                        <Checkbox
                                            checked={increase}
                                            onChange={(e) =>
                                                setIncrease(!increase)
                                            }
                                        >
                                            <Text className={styles.label}>
                                                Reset mỗi ngày
                                            </Text>
                                        </Checkbox>
                                    </Col>
                                </Row>
                            </div>
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
                            size="large"
                            type="primary"
                            ghost
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
                            htmlType="submit"
                        >
                            Thêm dịch vụ
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default AddService;
