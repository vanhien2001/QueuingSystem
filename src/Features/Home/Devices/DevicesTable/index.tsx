import { CaretDownOutlined } from "@ant-design/icons";
import { Col, Form, Row, Select, Space, Table, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ActionButton from "../../../../components/ActionButton";
import SearchInput from "../../../../components/SearchInput";
import styles from "../Devices.module.scss";
import { Link, useNavigate } from "react-router-dom";

const { Option } = Select;

const columns = [
    {
        title: "Mã thiết bị",
        key: "id",
        dataIndex: "id",
    },

    {
        title: "Tên thiết bị",
        key: "name",
        dataIndex: "name",
    },

    {
        title: "Địa chỉ IP",
        key: "IPAddess",
        dataIndex: "IPAddess",
    },

    {
        title: "Trạng thái hoạt động",
        key: "active",
        dataIndex: "active",
    },

    {
        title: "Trạng thái kết nối",
        key: "connect",
        dataIndex: "connect",
    },

    {
        title: "Dịch vụ sửa dụng",
        key: "service",
        dataIndex: "service",
    },
    {
        title: "",
        key: "detail",
        dataIndex: "detail",
    },
    {
        title: "",
        key: "update",
        dataIndex: "update",
    },
];

const data = [
    {
        key: "1",
        id: "KIO_01",
        name: "Kisok",
        IPAddess: "111.111.111",
        active: "Ngưng hoạt động",
        connect: "Mất kết nối",
        service: ["test", "test", "test"],
        detail: (
            <Link to="./detail" className={styles.link}>
                Chi tiết
            </Link>
        ),
        update: (
            <Link to="./edit" className={styles.link}>
                Cập nhật
            </Link>
        ),
    },
    {
        key: "2",
        id: "KIO_01",
        name: "Kisok",
        IPAddess: "111.111.111",
        active: "Hoạt động",
        connect: "Kết nối",
        service: ["test", "test", "test"],
    },
    {
        key: "3",
        id: "KIO_01",
        name: "Kisok",
        IPAddess: "111.111.111",
        active: "Ngưng hoạt động",
        connect: "Mất kết nối",
        service: ["test", "test", "test"],
    },
    {
        key: "4",
        id: "KIO_01",
        name: "Kisok",
        IPAddess: "111.111.111",
        active: "Hoạt động",
        connect: "Kết nối",
        service: ["test", "test", "test"],
    },
];

const DevicesTable = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.section}>
            <Typography.Title className={styles.title}>
                Danh sách thiết bị
            </Typography.Title>
            <Form layout="vertical">
                <Row justify="space-between" className={styles.inputContainer}>
                    <Col>
                        <Space size={24}>
                            <Form.Item
                                label={
                                    <Typography.Text className={styles.label}>
                                        Trạng thái hoạt động
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
                                    <Option value={true}>Hoạt động</Option>
                                    <Option value={false}>
                                        Ngưng hoạt động
                                    </Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label={
                                    <Typography.Text className={styles.label}>
                                        Trạng thái kết nối
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
                                    <Option value={true}>Kết nối</Option>
                                    <Option value={false}>Mất kết nối</Option>
                                </Select>
                            </Form.Item>
                        </Space>
                    </Col>
                    <Col flex="300px">
                        <Form.Item
                            label={
                                <Typography.Text className={styles.label}>
                                    Từ khóa
                                </Typography.Text>
                            }
                        >
                            <SearchInput placeholder="Nhập từ khóa" />
                        </Form.Item>
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
                        text="Thêm thiết bị"
                        icon={<PlusOutlined />}
                        onClick={() => navigate("./add")}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default DevicesTable;
