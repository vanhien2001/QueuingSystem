import { EditOutlined } from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
// import ActionButton from "../../../../components/ActionButton";
import ActionButton from "../../../../components/ActionButton";
import styles from "../Devices.module.scss";

const DetailDevice = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.section}>
            <Typography.Title className={styles.title}>
                Quản lý thiết bị
            </Typography.Title>
            <Row>
                <Col flex="auto">
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
                                <Row className={styles.itemContainer}>
                                    <Col span={6}>
                                        <Typography.Text className={styles.label}>
                                            Mã thiết bị:
                                        </Typography.Text>
                                    </Col>
                                    <Col span={18}>
                                        <Typography.Text className={styles.text}>
                                            KIO_01
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row className={styles.itemContainer}>
                                    <Col span={6}>
                                        <Typography.Text className={styles.label}>
                                            Loại thiết bị:
                                        </Typography.Text>
                                    </Col>
                                    <Col span={18}>
                                        <Typography.Text className={styles.text}>
                                            Kisok
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row className={styles.itemContainer}>
                                    <Col span={6}>
                                        <Typography.Text className={styles.label}>
                                            Tên thiết bị:
                                        </Typography.Text>
                                    </Col>
                                    <Col span={18}>
                                        <Typography.Text className={styles.text}>
                                            Kisok
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row className={styles.itemContainer}>
                                    <Col span={6}>
                                        <Typography.Text className={styles.label}>
                                            Tên đăng nhập:
                                        </Typography.Text>
                                    </Col>
                                    <Col span={18}>
                                        <Typography.Text className={styles.text}>
                                            Linkyo011
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row className={styles.itemContainer}>
                                    <Col span={6}>
                                        <Typography.Text className={styles.label}>
                                            Địa chỉ IP:
                                        </Typography.Text>
                                    </Col>
                                    <Col span={18}>
                                        <Typography.Text className={styles.text}>
                                            KIO_01
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row className={styles.itemContainer}>
                                    <Col span={6}>
                                        <Typography.Text className={styles.label}>
                                            Mật khẩu:
                                        </Typography.Text>
                                    </Col>
                                    <Col span={18}>
                                        <Typography.Text className={styles.text}>
                                            KIO_01
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={24}>
                                <Row className={styles.itemContainer}>
                                    <Col span={24}>
                                        <Typography.Text className={styles.label}>
                                            Dịch vụ sử dụng:
                                        </Typography.Text>
                                    </Col>
                                    <Col span={24}>
                                        <Typography.Text className={styles.text}>
                                            KIO_01
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col flex="100px">
                    <ActionButton
                        text="Cập nhật thiết bị"
                        icon={<EditOutlined />}
                        onClick={() => navigate("../edit")}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default DetailDevice;
