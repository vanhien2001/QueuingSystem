import { RollbackOutlined } from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import ActionButton from "../../../../components/ActionButton";
import styles from "../Provider.module.scss";

const DetailDevice = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.section}>
            <Typography.Title className={styles.title}>
                Quản lý cấp số
            </Typography.Title>
            <Row>
                <Col span={22}>
                    <Card className={styles.card}>
                        <Typography.Title
                            className={clsx(styles.title, styles.title3)}
                        >
                            Thông tin cấp số
                        </Typography.Title>

                        <Row gutter={24}>
                            <Col span={12}>
                                <Row className={styles.itemContainer}>
                                    <Col span={6}>
                                        <Typography.Text
                                            className={styles.label}
                                        >
                                            Họ tên:
                                        </Typography.Text>
                                    </Col>
                                    <Col span={18}>
                                        <Typography.Text
                                            className={styles.text}
                                        >
                                            Nguyễn Văn Hiền
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row className={styles.itemContainer}>
                                    <Col span={6}>
                                        <Typography.Text
                                            className={styles.label}
                                        >
                                            Nguồn cấp:
                                        </Typography.Text>
                                    </Col>
                                    <Col span={18}>
                                        <Typography.Text
                                            className={styles.text}
                                        >
                                            Kisok
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row className={styles.itemContainer}>
                                    <Col span={6}>
                                        <Typography.Text
                                            className={styles.label}
                                        >
                                            Tên dịch vụ:
                                        </Typography.Text>
                                    </Col>
                                    <Col span={18}>
                                        <Typography.Text
                                            className={styles.text}
                                        >
                                            Khám tim mạch
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row className={styles.itemContainer}>
                                    <Col span={6}>
                                        <Typography.Text
                                            className={styles.label}
                                        >
                                            Trạng thái:
                                        </Typography.Text>
                                    </Col>
                                    <Col span={18}>
                                        <Typography.Text
                                            className={styles.text}
                                        >
                                            Đang chờ
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row className={styles.itemContainer}>
                                    <Col span={6}>
                                        <Typography.Text
                                            className={styles.label}
                                        >
                                            Số thứ tự:
                                        </Typography.Text>
                                    </Col>
                                    <Col span={18}>
                                        <Typography.Text
                                            className={styles.text}
                                        >
                                            20011201
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row className={styles.itemContainer}>
                                    <Col span={6}>
                                        <Typography.Text
                                            className={styles.label}
                                        >
                                            Số điện thoại:
                                        </Typography.Text>
                                    </Col>
                                    <Col span={18}>
                                        <Typography.Text
                                            className={styles.text}
                                        >
                                            0969696969
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row className={styles.itemContainer}>
                                    <Col span={6}>
                                        <Typography.Text
                                            className={styles.label}
                                        >
                                            Số điện thoại:
                                        </Typography.Text>
                                    </Col>
                                    <Col span={18}>
                                        <Typography.Text
                                            className={styles.text}
                                        >
                                            0969696969
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row className={styles.itemContainer}>
                                    <Col span={6}>
                                        <Typography.Text
                                            className={styles.label}
                                        >
                                            Thời gian cấp:
                                        </Typography.Text>
                                    </Col>
                                    <Col span={18}>
                                        <Typography.Text
                                            className={styles.text}
                                        >
                                            {new Date().toDateString()}
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row className={styles.itemContainer}>
                                    <Col span={6}>
                                        <Typography.Text
                                            className={styles.label}
                                        >
                                            Địa chỉ Email:
                                        </Typography.Text>
                                    </Col>
                                    <Col span={18}>
                                        <Typography.Text
                                            className={styles.text}
                                        >
                                            a@gmail.com
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row className={styles.itemContainer}>
                                    <Col span={6}>
                                        <Typography.Text
                                            className={styles.label}
                                        >
                                            Hạn sử dụng:
                                        </Typography.Text>
                                    </Col>
                                    <Col span={18}>
                                        <Typography.Text
                                            className={styles.text}
                                        >
                                            {new Date().toUTCString()}
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col span={2}>
                    <ActionButton
                        data={[
                            {
                                text: "Quay lại",
                                icon: <RollbackOutlined />,
                                onClick: () => navigate("../"),
                            },
                        ]}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default DetailDevice;
