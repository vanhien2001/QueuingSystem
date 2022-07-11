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
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../../store";
import {
    providerNumberSelector,
    getAll,
} from "../../../../store/reducers/providerNumberSlice";
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

const ProviderTable = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { loading, providerNumbers } = useAppSelector(providerNumberSelector);

    useEffect(() => {
        dispatch(getAll());
    }, []);

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
                        loading={loading}
                        dataSource={providerNumbers.map((providerNumber) => {
                            return {
                                key: providerNumber.id,
                                stt: providerNumber.number,
                                name: providerNumber.user,
                                nameService: providerNumber.service,
                                time: moment(providerNumber.timeGet.toDate()).format("HH:mm - DD/MM/YYYY"),
                                timeExp: moment(providerNumber.timeExp.toDate()).format("HH:mm - DD/MM/YYYY"),
                                status: (
                                    <Status
                                        type={
                                            providerNumber.status == 'skip'
                                                ? "error"
                                                : providerNumber.status
                                        }
                                        text={
                                            providerNumber.status == 'waiting'
                                                ? "Đang chờ"
                                                : providerNumber.status == 'used' ? "Đã sử dụng" : "Bỏ qua"
                                        }
                                    />
                                ),
                                src: providerNumber.src,
                                detail: (
                                    <Link to={`./detail/${providerNumber.id}`} className={styles.link}>
                                        Chi tiết
                                    </Link>
                                ),
                            };
                        })}
                        bordered
                        size="middle"
                        pagination={{ defaultPageSize: 8, position: ["bottomRight"] }}
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
