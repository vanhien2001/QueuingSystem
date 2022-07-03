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
import styles from "../Services.module.scss";

const { Option } = Select;

const columns = [
    {
        title: "Mã dịch vụ",
        key: "id",
        dataIndex: "id",
    },

    {
        title: "Tên dịch vụ",
        key: "name",
        dataIndex: "name",
    },

    {
        title: "Mô tả",
        key: "description",
        dataIndex: "description",
    },

    {
        title: "Trạng thái hoạt động",
        key: "active",
        dataIndex: "active",
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
        description: "Mô tả dịch vụ 1",
        active: <Status type="success" text="Hoạt động"/>,
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
        description: "Mô tả dịch vụ 2",
        active: <Status type="error" text="Ngưng hoạt động"/>,
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
        key: "3",
        id: "KIO_01",
        name: "Kisok",
        description: "Mô tả dịch vụ 3",
        active: <Status type="success" text="Hoạt động"/>,
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
];

const ServicesTable = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.section}>
            <Typography.Title className={styles.title}>
                Quản lý dịch vụ
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
                        data={[
                            {
                                text: "Thêm dịch vụ",
                                icon: <PlusOutlined />,
                                onClick: () => navigate("../add"),
                            },
                        ]}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default ServicesTable;