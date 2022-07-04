import {
    EditOutlined,
    RollbackOutlined,
    CaretDownOutlined,
} from "@ant-design/icons";
import {
    Card,
    Col,
    DatePicker,
    Form,
    InputNumber,
    Row,
    Select,
    Space,
    Table,
    Typography,
} from "antd";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import Status from "../../../../components/Status";
import ActionButton from "../../../../components/ActionButton";
import SearchInput from "../../../../components/SearchInput";
import styles from "../Services.module.scss";

const { Text, Title } = Typography;
const { Option } = Select;

const columns = [
    {
        title: "STT",
        key: "stt",
        dataIndex: "stt",
    },
    {
        title: "Trạng thái",
        key: "status",
        dataIndex: "status",
    },
];

const data = [
    {
        key: "1",
        stt: "201001",
        status: <Status type="success" text="Đang hoàn thành" />,
    },
    {
        key: "2",
        stt: "201002",
        status: <Status type="waiting" text="Đang thực hiện" />,
    },
    {
        key: "3",
        stt: "201003",
        status: <Status type="used" text="Vắng" />,
    },
    {
        key: "4",
        stt: "201004",
        status: <Status type="success" text="Đang hoàn thành" />,
    },
    {
        key: "3",
        stt: "201003",
        status: <Status type="used" text="Vắng" />,
    },
    {
        key: "4",
        stt: "201004",
        status: <Status type="success" text="Đang hoàn thành" />,
    },
];

const DetailService = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.section}>
            <Typography.Title className={styles.title}>
                Quản lý thiết bị
            </Typography.Title>
            <Row>
                <Col span={8}>
                    <Card
                        className={styles.card}
                        style={{ marginRight: "24px" }}
                    >
                        <Title className={clsx(styles.title, styles.title2)}>
                            Thông tin dịch vụ
                        </Title>
                        <div className={styles.itemWrapper}>
                            <Row className={styles.itemContainer}>
                                <Col span={7}>
                                    <Typography.Text className={styles.label}>
                                        Mã dịch vụ:
                                    </Typography.Text>
                                </Col>
                                <Col span={17}>
                                    <Typography.Text className={styles.text}>
                                        201
                                    </Typography.Text>
                                </Col>
                            </Row>
                            <Row className={styles.itemContainer}>
                                <Col span={7}>
                                    <Typography.Text className={styles.label}>
                                        Tên dịch vụ:
                                    </Typography.Text>
                                </Col>
                                <Col span={17}>
                                    <Typography.Text className={styles.text}>
                                        Khám tim mạch
                                    </Typography.Text>
                                </Col>
                            </Row>
                            <Row className={styles.itemContainer}>
                                <Col span={7}>
                                    <Typography.Text className={styles.label}>
                                        Mô tả:
                                    </Typography.Text>
                                </Col>
                                <Col span={17}>
                                    <Typography.Text className={styles.text}>
                                        Chuyên các bệnh lý về tim
                                    </Typography.Text>
                                </Col>
                            </Row>
                        </div>
                        <Title className={clsx(styles.title, styles.title2)}>
                            Quy tắc cấp số
                        </Title>
                        <div className={styles.itemWrapper}>
                            <Row className={styles.itemContainer}>
                                <Col span={7}>
                                    <Typography.Text className={styles.label}>
                                        Tăng tự động:
                                    </Typography.Text>
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
                                    <Typography.Text className={styles.label}>
                                        Prefix:
                                    </Typography.Text>
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
                                    <Typography.Text className={styles.label}>
                                        Reset mỗi ngày
                                    </Typography.Text>
                                </Col>
                                <Col span={24}>
                                    <Typography.Text className={styles.text}>
                                        Ví dụ: 201 - 2001
                                    </Typography.Text>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
                <Col span={14}>
                    <Card className={styles.card}>
                        <Form layout="vertical">
                            <Row
                                justify="space-between"
                                className={styles.inputContainer2}
                            >
                                <Col span={24}>
                                    <Space
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Form.Item
                                            label={
                                                <Typography.Text
                                                    className={styles.label}
                                                >
                                                    Trạng thái
                                                </Typography.Text>
                                            }
                                            className={styles.selectContianer}
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
                                                <Option value={null}>
                                                    Tất cả
                                                </Option>
                                                <Option value="spk">
                                                    Đã hoàn thành
                                                </Option>
                                                <Option value="rhm">
                                                    Đã thực hiện
                                                </Option>
                                                <Option value="tmh">
                                                    Vắng
                                                </Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            label={
                                                <Typography.Text
                                                    className={styles.label}
                                                >
                                                    Chọn thời gian{" "}
                                                </Typography.Text>
                                            }
                                        >
                                            <Form.Item noStyle>
                                                <DatePicker size="large" />
                                            </Form.Item>
                                            <Form.Item noStyle>
                                                <DatePicker size="large" />
                                            </Form.Item>
                                        </Form.Item>
                                        <Form.Item
                                            label={
                                                <Typography.Text
                                                    className={styles.label}
                                                >
                                                    Từ khóa
                                                </Typography.Text>
                                            }
                                        >
                                            <SearchInput placeholder="Nhập từ khóa" />
                                        </Form.Item>
                                    </Space>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Table
                                        columns={columns}
                                        dataSource={data}
                                        bordered
                                        size="middle"
                                        pagination={{
                                            position: ["bottomRight"],
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
                <Col span={2}>
                    <ActionButton
                        data={[
                            {
                                text: "Cập nhật danh sách",
                                icon: <EditOutlined />,
                                onClick: () => navigate("../edit"),
                            },
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

export default DetailService;
