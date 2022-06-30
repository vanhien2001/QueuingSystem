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
import { PlusOutlined } from '@ant-design/icons';
import ActionButton from "../../../components/ActionButton";
import SearchInput from "../../../components/SearchInput";
import styles from "./Services.module.scss";

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
    {},
    {},
];

const data = [
    {
        key: "1",
        id: "KIO_01",
        name: "Kisok",
        description: "Mô tả dịch vụ 1",
        active: "Hoạt động",
    },
    {
        key: "2",
        id: "KIO_01",
        name: "Kisok",
        description: "Mô tả dịch vụ 2",
        active: "Ngừng hoạt động",
    },
    {
        key: "3",
        id: "KIO_01",
        name: "Kisok",
        description: "Mô tả dịch vụ 3",
        active: "Hoạt động",
    },
];

const ServicesTable = () => {
    return (
        <div className={styles.section}>
            <Row>
                <Col>
                    <Typography.Title className={styles.title} level={2}>
                        Quản lý dịch vụ
                    </Typography.Title>
                </Col>
            </Row>
            <Form layout="vertical">
                <Row justify="space-between" className={styles.inputContainer}>
                    <Col>
                        <Space size={24}>
                            <Form.Item
                                label={
                                    <Typography.Text strong>
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
                                    <Typography.Text strong>
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
                                <Typography.Text strong>
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
                    <ActionButton text="Thêm dịch vụ" icon={<PlusOutlined />}/>
                </Col>
            </Row>
        </div>
    );
};

export default ServicesTable;
