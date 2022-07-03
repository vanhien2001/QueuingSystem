import { CaretDownOutlined } from "@ant-design/icons";
import { Col, Form, Row, Select, Table, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import Status from "../../../../components/Status";
import ActionButton from "../../../../components/ActionButton";
import SearchInput from "../../../../components/SearchInput";
import styles from "./ManageAccount.module.scss";

const { Option } = Select;

const columns = [
    {
        title: "Tên đăng nhập",
        key: "username",
        dataIndex: "username",
    },

    {
        title: "Họ tên",
        key: "name",
        dataIndex: "name",
    },

    {
        title: "Số điện thoại",
        key: "phoneNumber",
        dataIndex: "phoneNumber",
    },

    {
        title: "Email",
        key: "email",
        dataIndex: "email",
    },
    {
        title: "Vai trò",
        key: "role",
        dataIndex: "role",
    },
    {
        title: "Trạng thái hoạt động",
        key: "status",
        dataIndex: "status",
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
        username: "vanhien2001",
        name: "Nguyễn Văn Hiền",
        phoneNumber: "0969696969",
        email: "vanhien2001@gmail.com",
        role: "Lập trình viên",
        status: <Status type="success" text="Hoạt động" />,
        update: (
            <Link to="./edit" className={styles.link}>
                Cập nhật
            </Link>
        ),
    },
    {
        key: "2",
        username: "vanhien2001",
        name: "Nguyễn Văn Hiền",
        phoneNumber: "0969696969",
        email: "vanhien2001@gmail.com",
        role: "Lập trình viên",
        status: <Status type="error" text="Ngưng hoạt động" />,
        update: (
            <Link to="./edit" className={styles.link}>
                Cập nhật
            </Link>
        ),
    },
    {
        key: "3",
        username: "vanhien2001",
        name: "Nguyễn Văn Hiền",
        phoneNumber: "0969696969",
        email: "vanhien2001@gmail.com",
        role: "Lập trình viên",
        status: <Status type="success" text="Hoạt động" />,
        update: (
            <Link to="./edit" className={styles.link}>
                Cập nhật
            </Link>
        ),
    },
    {
        key: "4",
        username: "vanhien2001",
        name: "Nguyễn Văn Hiền",
        phoneNumber: "0969696969",
        email: "vanhien2001@gmail.com",
        role: "Lập trình viên",
        status: <Status type="error" text="Ngưng hoạt động" />,
        update: (
            <Link to="./edit" className={styles.link}>
                Cập nhật
            </Link>
        ),
    },
    {
        key: "5",
        username: "vanhien2001",
        name: "Nguyễn Văn Hiền",
        phoneNumber: "0969696969",
        email: "vanhien2001@gmail.com",
        role: "Lập trình viên",
        status: <Status type="success" text="Hoạt động" />,
        update: (
            <Link to="./edit" className={styles.link}>
                Cập nhật
            </Link>
        ),
    },
    {
        key: "6",
        username: "vanhien2001",
        name: "Nguyễn Văn Hiền",
        phoneNumber: "0969696969",
        email: "vanhien2001@gmail.com",
        role: "Lập trình viên",
        status: <Status type="error" text="Ngưng hoạt động" />,
        update: (
            <Link to="./edit" className={styles.link}>
                Cập nhật
            </Link>
        ),
    },
];

const ManageAccountTable = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.section}>
            <Typography.Title level={2} className={styles.title}>
                Danh sách tài khoản
            </Typography.Title>
            <Form layout="vertical">
                <Row justify="space-between" className={styles.inputContainer}>
                    <Col flex="300px">
                        <Form.Item
                            label={
                                <Typography.Text className={styles.label}>
                                    Tên vai trò
                                </Typography.Text>
                            }
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
                                <Option value={false}>Ngưng hoạt động </Option>
                            </Select>
                        </Form.Item>
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
                                text: "Thêm tài khoản",
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

export default ManageAccountTable;
