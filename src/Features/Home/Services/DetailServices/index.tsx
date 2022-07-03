import { EditOutlined, RollbackOutlined } from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import ActionButton from "../../../../components/ActionButton";
import styles from "../Services.module.scss";

const DetailService = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.section}>
            <Typography.Title className={styles.title}>
                Quản lý thiết bị
            </Typography.Title>
            <Row>
                <Col span={22}>
                    <Card className={styles.card}>
                        
                    </Card>
                </Col>
                <Col span={2}>
                    <ActionButton
                        data={[
                            {
                                text: "Cập nhật danh sách",
                                icon: <EditOutlined />,
                                onClick: () => navigate("../edit")
                            },
                            {
                                text: "Quay lại",
                                icon: <RollbackOutlined />,
                                onClick: () => navigate("../")
                            }
                        ]}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default DetailService;
