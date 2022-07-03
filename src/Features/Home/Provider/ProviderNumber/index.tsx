import {
    Button,
    Card,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    Typography,
} from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Provider.module.scss";

const { Text, Title } = Typography;
const { Option } = Select;

const ProviderNumber = () => {
    const [prefix, setPrefix] = useState(false);
    const [surfix, setSurfix] = useState(false);
    const [increase, setIncrease] = useState(false);

    return (
        <div className={clsx(styles.section, styles.section2)}>
            <Form name="provider-new" layout="vertical">
                <Title className={styles.title}>Quản lý cấp số</Title>
                <Card bordered>
                    <Row gutter={24}>
                        <Col span={8} offset={8}>
                            <Title
                                className={clsx(styles.title, styles.title2)}
                            >
                                Cấp số mới
                            </Title>
                            <Text className={styles.label1}>
                                Dịch vụ khách hàng lựa chọn
                            </Text>
                            <Form.Item
                                name="id"
                                required={false}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select
                                    size="large"
                                    placeholder="Chọn dịch vụ"
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
                    </Row>
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
                                In số
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </Form>
        </div>
    );
};

export default ProviderNumber;
