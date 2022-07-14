import { useEffect } from "react";
import {
    Calendar,
    Card,
    Col,
    Form,
    Layout,
    Progress,
    Row,
    Select,
    Space,
    Tag,
    Typography,
} from "antd";
import {
    DesktopOutlined,
    CalendarOutlined,
    CaretDownOutlined,
} from "@ant-design/icons";
import { Line } from "@ant-design/plots";
import { useAppSelector, useAppDispatch } from "../../../store";
import {
    providerNumberSelector,
    getAll,
} from "../../../store/reducers/providerNumberSlice";
import {
    deviceSelector,
    getAll as getAllDevice,
} from "../../../store/reducers/deviceSlice";
import {
    serviceSelector,
    getAll as getAllService,
} from "../../../store/reducers/serviceSlice";
import CardContent from "./CardContainer/CardContent";
import CardSideBar from "./CardContainer/CardSideBar";
import styles from "./Dasboard.module.scss";

const { Sider, Content } = Layout;
const { Option } = Select;

const data = [
    {
        date: "01",
        value: 3050,
    },
    {
        date: "02",
        value: 3250,
    },
    {
        date: "03",
        value: 3000,
    },
    {
        date: "04",
        value: 3900,
    },
    {
        date: "05",
        value: 4221,
    },
    {
        date: "06",
        value: 3000,
    },
    {
        date: "07",
        value: 3900,
    },
    {
        date: "08",
        value: 4221,
    },
];
const iconCardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "48px",
    width: "48px",
    fontSize: "24px",
    borderRadius: "50%",
};

const Dashboard = () => {
    const dispatch = useAppDispatch();
    const { providerNumbers } = useAppSelector(providerNumberSelector);
    const { devices } = useAppSelector(deviceSelector);
    const { services } = useAppSelector(serviceSelector);

    const config = {
        data,
        xField: "date",
        yField: "value",
        smooth: true,
    };

    useEffect(() => {
        dispatch(getAll());
        dispatch(getAllService());
        dispatch(getAllDevice());
    }, []);

    return (
        <Layout>
            <Content style={{ marginRight: 410 }}>
                <div className={styles.contentContainer}>
                    <Typography.Title className={styles.title}>
                        Biểu đồ cấp số
                    </Typography.Title>
                    <Row gutter={12}>
                        <Col span={6}>
                            <CardContent
                                icon={
                                    <CalendarOutlined
                                        style={{
                                            ...iconCardStyle,
                                            backgroundColor:
                                                "rgba(100, 147, 249, 0.2)",
                                            color: "#6493F9",
                                        }}
                                    />
                                }
                                title={"Số thứ tự đã cấp"}
                                number={providerNumbers.length}
                                tag={{
                                    color: "#FF9138",
                                    number: 32.41,
                                }}
                            />
                        </Col>
                        <Col span={6}>
                            <CardContent
                                icon={
                                    <CalendarOutlined
                                        style={{
                                            ...iconCardStyle,
                                            backgroundColor:
                                                "rgb(53, 199, 90, 0.2)",
                                            color: "#35C75A",
                                        }}
                                    />
                                }
                                title={"Số thứ tự đã sử dụng"}
                                number={
                                    providerNumbers.filter(
                                        (value) => value.status === "used"
                                    ).length
                                }
                                tag={{
                                    color: "#E73F3F",
                                    number: 32.41,
                                }}
                            />
                        </Col>
                        <Col span={6}>
                            <CardContent
                                icon={
                                    <CalendarOutlined
                                        style={{
                                            ...iconCardStyle,
                                            backgroundColor:
                                                "rgba(255, 172, 106, 0.2)",
                                            color: "#FFAC6A",
                                        }}
                                    />
                                }
                                title={"Số thứ tự đang chờ"}
                                number={
                                    providerNumbers.filter(
                                        (value) => value.status === "waiting"
                                    ).length
                                }
                                tag={{
                                    color: "#FF9138",
                                    number: 32.41,
                                }}
                            />
                        </Col>
                        <Col span={6}>
                            <CardContent
                                icon={
                                    <CalendarOutlined
                                        style={{
                                            ...iconCardStyle,
                                            backgroundColor:
                                                "rgba(248, 109, 109, 0.2)",
                                            color: "#F86D6D",
                                        }}
                                    />
                                }
                                title={"Số thứ tự đã bỏ qua"}
                                number={
                                    providerNumbers.filter(
                                        (value) => value.status === "skip"
                                    ).length
                                }
                                tag={{
                                    color: "#E73F3F",
                                    number: 32.41,
                                }}
                            />
                        </Col>
                    </Row>
                    <Card className={styles.chartContainer}>
                        <Space
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "20px",
                            }}
                        >
                            <Space direction="vertical">
                                <Typography.Title className={styles.title}>
                                    Bảng thống kê theo ngày
                                </Typography.Title>
                                <Typography.Text className={styles.text}>
                                    Tháng 7/2022
                                </Typography.Text>
                            </Space>
                            <Space
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Typography.Text className={styles.label}>
                                    Xem theo
                                </Typography.Text>
                                <Form.Item className={styles.selectContianer}>
                                    <Select
                                        size="large"
                                        defaultValue={"date"}
                                        suffixIcon={
                                            <CaretDownOutlined
                                                style={{
                                                    fontSize: "20px",
                                                    color: "#FF7506",
                                                }}
                                            />
                                        }
                                    >
                                        <Option value="date">Ngày</Option>
                                        <Option value="week">Tuần</Option>
                                        <Option value="month">Tháng</Option>
                                    </Select>
                                </Form.Item>
                            </Space>
                        </Space>
                        <Line {...config} style={{ height: "300px" }} />
                    </Card>
                </div>
            </Content>
            <Sider
                width={410}
                style={{
                    position: "fixed",
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <div className={styles.sidebarContainer}>
                    <Typography.Title className={styles.title}>
                        Tổng quan
                    </Typography.Title>
                    <CardSideBar
                        icon={<DesktopOutlined style={{ color: "#FF7506" }} />}
                        percent={90}
                        color={"#FF7506"}
                        title={"Thiết bị"}
                        quantity={devices.length}
                        data={[
                            {
                                type: "success",
                                text: "Đang hoạt động",
                                number: devices.filter(
                                    (device) => device.isActive === true
                                ).length,
                            },
                            {
                                type: "used",
                                text: "Ngưng hoạt động",
                                number: devices.filter(
                                    (device) => device.isActive === false
                                ).length,
                            },
                        ]}
                    />
                    <CardSideBar
                        icon={<DesktopOutlined style={{ color: "#4277FF" }} />}
                        percent={76}
                        color={"#4277FF"}
                        title={"Dịch vụ"}
                        quantity={services.length}
                        data={[
                            {
                                type: "success",
                                text: "Đang hoạt động",
                                number: services.filter(
                                    (service) => service.isActive === true
                                ).length,
                            },
                            {
                                type: "used",
                                text: "Ngưng hoạt động",
                                number: services.filter(
                                    (service) => service.isActive === false
                                ).length,
                            },
                        ]}
                    />
                    <CardSideBar
                        icon={<DesktopOutlined style={{ color: "#35C75A" }} />}
                        percent={86}
                        color={"#35C75A"}
                        title={"Cấp số"}
                        quantity={providerNumbers.length}
                        data={[
                            {
                                type: "success",
                                text: "Đã sử dụng",
                                number: providerNumbers.filter(
                                    (providerNumber) =>
                                        providerNumber.status === "used"
                                ).length,
                            },
                            {
                                type: "used",
                                text: "Đang chờ",
                                number: providerNumbers.filter(
                                    (providerNumber) =>
                                        providerNumber.status === "waiting"
                                ).length,
                            },
                            {
                                type: "error",
                                text: "Bỏ qua",
                                number: providerNumbers.filter(
                                    (providerNumber) =>
                                        providerNumber.status === "skip"
                                ).length,
                            },
                        ]}
                    />
                    <div className={styles.calendar}>
                        <Calendar
                            style={{ width: "80%" }}
                            fullscreen={false}
                            // onPanelChange={onPanelChange}
                        />
                    </div>
                </div>
            </Sider>
        </Layout>
    );
};

export default Dashboard;
