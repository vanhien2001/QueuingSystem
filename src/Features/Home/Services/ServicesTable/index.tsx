import { useEffect } from "react";
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
import { useAppSelector, useAppDispatch } from "../../../../store";
import {
    serviceSelector,
    getAll,
} from "../../../../store/reducers/serviceSlice";
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

const ServicesTable = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { loading, services } = useAppSelector(serviceSelector);

    useEffect(() => {
        dispatch(getAll());
    }, []);

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
                        loading={loading}
                        dataSource={services.map((service) => {
                            return {
                                key: service.id,
                                id: service.code,
                                name: service.name,
                                description: service.description,
                                active: (
                                    <Status
                                        type={
                                            service.isActive
                                                ? "success"
                                                : "error"
                                        }
                                        text={
                                            service.isActive
                                                ? "Hoạt động"
                                                : "Ngưng hoạt động"
                                        }
                                    />
                                ),
                                detail: (
                                    <Link to={`./detail/${service.id}`} className={styles.link}>
                                        Chi tiết
                                    </Link>
                                ),
                                update: (
                                    <Link to={`./edit/${service.id}`} className={styles.link}>
                                        Cập nhật
                                    </Link>
                                ),
                            };
                        })}
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
