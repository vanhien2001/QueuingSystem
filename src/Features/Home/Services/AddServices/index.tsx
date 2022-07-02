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
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Services.module.scss";

const { Text, Title } = Typography;

const AddService = () => {
    const [prefix, setPrefix] = useState(false);
    const [surfix, setSurfix] = useState(false);
    const [increase, setIncrease] = useState(false);

    return (
        <div className={styles.section2}>
            <Form name="service-add" layout="vertical">
                <Title level={2} className={styles.title}>
                    Quản lý dịch vụ
                </Title>
                <Card bordered>
                    <Row gutter={24}>
                        <Col span={24}>
                            <Title level={4} className={styles.title}>
                                Thông tin dịch vụ
                            </Title>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="id"
                                label={<Text className={styles.label}>Mã dịch vụ:</Text>}
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
                                label={<Text className={styles.label}>Tên dịch vụ:</Text>}
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
                                label={<Text className={styles.label}>Mô tả:</Text>}
                            >
                                <Input.TextArea
                                    size="large"
                                    placeholder="Mô tả dịch vụ"
                                    style={{ height: "150px" }}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Title level={4} className={styles.title}>
                                Quy tắc cấp số
                            </Title>
                        </Col>

                        <Col span={12}>
                            <div className={styles.providerContainer}>
                                <Checkbox
                                    checked={increase}
                                    onChange={(e) => setIncrease(!increase)}
                                >
                                    <Text className={styles.label}>
                                        Tăng tự động từ:
                                    </Text>
                                </Checkbox>
                                <Form.Item
                                    noStyle
                                    name={increase ? "increaseFrom" : undefined}
                                >
                                    <InputNumber
                                        min={0}
                                        disabled={!increase}
                                        size="large"
                                        className={styles.providerInput}
                                        controls={false}
                                    />
                                </Form.Item>
                                <Text className={styles.label}>đến</Text>
                                <Form.Item
                                    noStyle
                                    name={increase ? "increaseTo" : undefined}
                                >
                                    <InputNumber
                                        min={0}
                                        disabled={!increase}
                                        size="large"
                                        className={styles.providerInput}
                                        controls={false}
                                    />
                                </Form.Item>
                            </div>

                            <div className={styles.providerContainer}>
                                <Checkbox
                                    checked={prefix}
                                    onChange={(e) => setPrefix(!prefix)}
                                >
                                    <Text className={styles.label}>
                                        Prefix:
                                    </Text>
                                </Checkbox>
                                <Form.Item
                                    noStyle
                                    name={prefix ? "prefix" : undefined}
                                >
                                    <InputNumber
                                        min={0}
                                        disabled={!prefix}
                                        size="large"
                                        className={styles.providerInput}
                                        controls={false}
                                    />
                                </Form.Item>
                            </div>

                            <div className={styles.providerContainer}>
                                <Checkbox
                                    checked={surfix}
                                    onChange={(e) => setSurfix(!surfix)}
                                >
                                    <Text className={styles.label}>
                                        Surfix:
                                    </Text>
                                </Checkbox>
                                <Form.Item
                                    noStyle
                                    name={surfix ? "surfix" : undefined}
                                >
                                    <InputNumber
                                        min={0}
                                        disabled={!surfix}
                                        size="large"
                                        className={styles.providerInput}
                                        controls={false}
                                    />
                                </Form.Item>
                            </div>

                            <Form.Item
                                name="isReset"
                                valuePropName="checked"
                                initialValue={false}
                            >
                                <Checkbox>
                                    <Text className={styles.label}>
                                        Reset mỗi ngày
                                    </Text>
                                </Checkbox>
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
