import { CaretDownOutlined } from "@ant-design/icons";
import {
    Col,
    DatePicker,
    Form,
    Row,
    Select,
    Space,
    Table,
    Typography,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import Status from "../../../../components/Status";
import ActionButton from "../../../../components/ActionButton";
import SearchInput from "../../../../components/SearchInput";
import styles from "../Provider.module.scss";

const { Option } = Select;

const columns = [
    {
        title: "STT",
        key: "stt",
        dataIndex: "stt",
    },
    {
        title: "Tên khách hàng",
        key: "name",
        dataIndex: "name",
    },
    {
        title: "Tên dịch vụ",
        key: "nameService",
        dataIndex: "nameService",
    },
    {
        title: "Thời gian cấp",
        key: "time",
        dataIndex: "time",
    },
    {
        title: "Hạn sử dụng",
        key: "timeExp",
        dataIndex: "timeExp",
    },
    {
        title: "Trạng thái",
        key: "status",
        dataIndex: "status",
    },
    {
        title: "Nguồn cấp",
        key: "src",
        dataIndex: "src",
    },
    {
        title: "",
        key: "detail",
        dataIndex: "detail",
    },
];

const data = [
    {
        key: "1",
        stt: "201001",
        name: "Nguyễn Văn Hiền",
        nameService: "Khám tổng quát",
        time: new Date().toUTCString(),
        timeExp: new Date().toUTCString(),
        status: <Status type="waiting" text="Đang chờ"/>,
        src: "Kiosk",
        detail: (
            <Link to="./detail" className={styles.link}>
                Cập nhật
            </Link>
        ),
    },
    {
        key: "2",
        stt: "201002",
        name: "Nguyễn Văn Hiền",
        nameService: "Khám tai mũi họng",
        time: new Date().toUTCString(),
        timeExp: new Date().toUTCString(),
        status: <Status type="waiting" text="Đang chờ"/>,
        src: "Hệ thống",
        detail: (
            <Link to="./detail" className={styles.link}>
                Cập nhật
            </Link>
        ),
    },
    {
        key: "3",
        stt: "201003",
        name: "Nguyễn Văn Hiền",
        nameService: "Khám tổng quát",
        time: new Date().toUTCString(),
        timeExp: new Date().toUTCString(),
        status: <Status type="used" text="Đã sử dụng"/>,
        src: "Kiosk",
        detail: (
            <Link to="./detail" className={styles.link}>
                Cập nhật
            </Link>
        ),
    },
    {
        key: "4",
        stt: "201004",
        name: "Nguyễn Văn Hiền",
        nameService: "Khám tổng quát",
        time: new Date().toUTCString(),
        timeExp: new Date().toUTCString(),
        status: <Status type="error" text="Bỏ qua"/>,
        src: "Kiosk",
        detail: (
            <Link to="./detail" className={styles.link}>
                Cập nhật
            </Link>
        ),
    },
];

const ProviderTable = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.section}>
            <Typography.Title className={styles.title} level={2}>
                Quản lý cấp số
            </Typography.Title>
            <Form layout="vertical">
                <Row justify="space-between" className={styles.inputContainer}>
                    <Col span={24}>
                        <Space
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Form.Item
                                label={
                                    <Typography.Text className={styles.label}>
                                        Tên dịch vụ
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
                                    <Option value={null}>Tất cả</Option>
                                    <Option value="spk">
                                        Khám sản - Phụ khoa
                                    </Option>
                                    <Option value="rhm">
                                        Khám răng hàm mặt
                                    </Option>
                                    <Option value="tmh">
                                        Khám tai mũi họng
                                    </Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label={
                                    <Typography.Text className={styles.label}>
                                        Tình trạng
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
                                    <Option value={null}>Tất cả</Option>
                                    <Option value="waiting">Đang chờ</Option>
                                    <Option value="used">Đã sử dụng</Option>
                                    <Option value="skip">Bỏ qua</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label={
                                    <Typography.Text className={styles.label}>
                                        Nguồn cấp
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
                                    <Option value={null}>Tất cả</Option>
                                    <Option value="kisok">Kisok</Option>
                                    <Option value="system">Hệ thống</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label={
                                    <Typography.Text className={styles.label}>
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
                                    <Typography.Text className={styles.label}>
                                        Từ khóa
                                    </Typography.Text>
                                }
                            >
                                <SearchInput placeholder="Nhập từ khóa" />
                            </Form.Item>
                        </Space>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Col flex="auto">
                    <Table
                        columns={columns}
                        dataSource={data}
                        bordered
                        size="middle"
                        pagination={{ position: ["bottomRight"] }}
                    />
                </Col>
                <Col flex="100px">
                    <ActionButton
                        data={[
                            {
                                text: "Cấp số mới",
                                icon: <PlusOutlined />,
                                onClick: () => navigate("../new"),
                            },
                        ]}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default ProviderTable;