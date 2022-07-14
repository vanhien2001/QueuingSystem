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
import Status from "../../../components/Status";
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

const Dashboard = () => {
    const dispatch = useAppDispatch();
    const { loading, providerNumbers } = useAppSelector(providerNumberSelector);
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
                            <Card
                                className={styles.cardContainer}
                                bodyStyle={{ padding: "12px" }}
                            >
                                <Space size={12}>
                                    <CalendarOutlined
                                        className={styles.icon}
                                        style={{
                                            backgroundColor:
                                                "rgba(100, 147, 249, 0.2)",
                                            color: "#6493F9",
                                        }}
                                    />
                                    <Typography.Text className={styles.text}>
                                        Số thứ tự đã cấp
                                    </Typography.Text>
                                </Space>
                                <Space
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginTop: "12px",
                                    }}
                                >
                                    <Typography.Text className={styles.number}>
                                        {providerNumbers.length}
                                    </Typography.Text>
                                    <Tag
                                        className={styles.tag}
                                        style={{
                                            backgroundColor:
                                                "rgba(255, 149, 1, 0.15)",
                                            color: "#FF9138",
                                        }}
                                    >
                                        32,41%
                                    </Tag>
                                </Space>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card
                                className={styles.cardContainer}
                                bodyStyle={{ padding: "12px" }}
                            >
                                <Space size={12}>
                                    <CalendarOutlined
                                        className={styles.icon}
                                        style={{
                                            backgroundColor:
                                                "rgb(53, 199, 90, 0.2)",
                                            color: "#35C75A",
                                        }}
                                    />
                                    <Typography.Text className={styles.text}>
                                        Số thứ tự đã sử dụng
                                    </Typography.Text>
                                </Space>
                                <Space
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginTop: "12px",
                                    }}
                                >
                                    <Typography.Text className={styles.number}>
                                        {
                                            providerNumbers.filter(
                                                (value) =>
                                                    value.status == "used"
                                            ).length
                                        }
                                    </Typography.Text>
                                    <Tag
                                        className={styles.tag}
                                        style={{
                                            backgroundColor:
                                                "rgba(231, 63, 63, 0.15)",
                                            color: "#E73F3F",
                                        }}
                                    >
                                        32,41%
                                    </Tag>
                                </Space>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card
                                className={styles.cardContainer}
                                bodyStyle={{ padding: "12px" }}
                            >
                                <Space size={12}>
                                    <CalendarOutlined
                                        className={styles.icon}
                                        style={{
                                            backgroundColor:
                                                "rgba(255, 172, 106, 0.2)",
                                            color: "#FFAC6A",
                                        }}
                                    />
                                    <Typography.Text className={styles.text}>
                                        Số thứ tự đang chờ
                                    </Typography.Text>
                                </Space>
                                <Space
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginTop: "12px",
                                    }}
                                >
                                    <Typography.Text className={styles.number}>
                                        {
                                            providerNumbers.filter(
                                                (value) =>
                                                    value.status == "waiting"
                                            ).length
                                        }
                                    </Typography.Text>
                                    <Tag
                                        className={styles.tag}
                                        style={{
                                            backgroundColor:
                                                "rgba(255, 149, 1, 0.15)",
                                            color: "#FF9138",
                                        }}
                                    >
                                        32,41%
                                    </Tag>
                                </Space>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card
                                className={styles.cardContainer}
                                bodyStyle={{ padding: "12px" }}
                            >
                                <Space size={12}>
                                    <CalendarOutlined
                                        className={styles.icon}
                                        style={{
                                            backgroundColor:
                                                "rgba(248, 109, 109, 0.2)",
                                            color: "#F86D6D",
                                        }}
                                    />
                                    <Typography.Text className={styles.text}>
                                        Số thứ tự đã bỏ qua
                                    </Typography.Text>
                                </Space>
                                <Space
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginTop: "12px",
                                    }}
                                >
                                    <Typography.Text className={styles.number}>
                                        {
                                            providerNumbers.filter(
                                                (value) =>
                                                    value.status == "skip"
                                            ).length
                                        }
                                    </Typography.Text>
                                    <Tag
                                        className={styles.tag}
                                        style={{
                                            backgroundColor:
                                                "rgba(231, 63, 63, 0.15)",
                                            color: "#E73F3F",
                                        }}
                                    >
                                        32,41%
                                    </Tag>
                                </Space>
                            </Card>
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
                    <Card
                        bodyStyle={{ padding: "0" }}
                        style={{
                            marginBottom: "12px",
                            boxShadow: "2px 2px 15px 0 rgba(70, 64, 67, 0.1)",
                        }}
                    >
                        <Row gutter={0}>
                            <Col span={12}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "12px 0 12px 16px",
                                    }}
                                >
                                    <Progress
                                        type="circle"
                                        percent={90}
                                        className={styles.chartCircle}
                                        strokeColor={"#FF7506"}
                                    />
                                    <Space direction="vertical" size={0}>
                                        <Typography.Title
                                            className={styles.number}
                                        >
                                            {devices.length}
                                        </Typography.Title>
                                        <Space size={4}>
                                            <DesktopOutlined
                                                style={{ color: "#FF7506" }}
                                            />
                                            <span
                                                style={{
                                                    color: "#FF7506",
                                                    fontSize: "14px",
                                                    fontWeight: "600",
                                                }}
                                            >
                                                Thiết bị
                                            </span>
                                        </Space>
                                    </Space>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div
                                    style={{
                                        padding: "12px 0",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        height: "100%",
                                    }}
                                >
                                    <Row>
                                        <Col span={18}>
                                            <Status
                                                type="success"
                                                text="Đang hoạt động"
                                            />
                                        </Col>
                                        <Col span={6}>
                                            <span
                                                style={{
                                                    color: "#FF7506",
                                                    fontSize: "14px",
                                                    fontWeight: "700",
                                                }}
                                            >
                                                {devices.filter(device => device.isActive == true).length}
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={18}>
                                            <Status
                                                type="used"
                                                text="Ngưng hoạt động"
                                            />
                                        </Col>
                                        <Col span={6}>
                                            <span
                                                style={{
                                                    color: "#FF7506",
                                                    fontSize: "14px",
                                                    fontWeight: "700",
                                                }}
                                            >
                                                {devices.filter(device => device.isActive == false).length}
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                    <Card
                        bodyStyle={{ padding: "0" }}
                        style={{
                            marginBottom: "12px",
                            boxShadow: "2px 2px 15px 0 rgba(70, 64, 67, 0.1)",
                        }}
                    >
                        <Row gutter={0}>
                            <Col span={12}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "12px 0 12px 16px",
                                    }}
                                >
                                    <Progress
                                        type="circle"
                                        percent={76}
                                        className={styles.chartCircle}
                                        strokeColor={"#4277FF"}
                                    />
                                    <Space direction="vertical" size={0}>
                                        <Typography.Title
                                            className={styles.number}
                                        >
                                            {services.length}
                                        </Typography.Title>
                                        <Space size={4}>
                                            <DesktopOutlined
                                                style={{ color: "#4277FF" }}
                                            />
                                            <span
                                                style={{
                                                    color: "#4277FF",
                                                    fontSize: "14px",
                                                    fontWeight: "600",
                                                }}
                                            >
                                                Dịch vụ
                                            </span>
                                        </Space>
                                    </Space>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div
                                    style={{
                                        padding: "12px 0",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        height: "100%",
                                    }}
                                >
                                    <Row>
                                        <Col span={18}>
                                            <Status
                                                type="success"
                                                text="Đang hoạt động"
                                            />
                                        </Col>
                                        <Col span={6}>
                                            <span
                                                style={{
                                                    color: "#4277FF",
                                                    fontSize: "14px",
                                                    fontWeight: "700",
                                                }}
                                            >
                                                {services.filter(service => service.isActive == true).length}
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={18}>
                                            <Status
                                                type="used"
                                                text="Ngưng hoạt động"
                                            />
                                        </Col>
                                        <Col span={6}>
                                            <span
                                                style={{
                                                    color: "#4277FF",
                                                    fontSize: "14px",
                                                    fontWeight: "700",
                                                }}
                                            >
                                                {services.filter(service => service.isActive == false).length}
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                    <Card
                        bodyStyle={{ padding: "0" }}
                        style={{
                            marginBottom: "12px",
                            boxShadow: "2px 2px 15px 0 rgba(70, 64, 67, 0.1)",
                        }}
                    >
                        <Row gutter={0}>
                            <Col span={12}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "12px 0 12px 16px",
                                    }}
                                >
                                    <Progress
                                        type="circle"
                                        percent={86}
                                        className={styles.chartCircle}
                                        strokeColor={"#35C75A"}
                                    />
                                    <Space direction="vertical" size={0}>
                                        <Typography.Title
                                            className={styles.number}
                                        >
                                            {providerNumbers.length}
                                        </Typography.Title>
                                        <Space size={4}>
                                            <DesktopOutlined
                                                style={{ color: "#35C75A" }}
                                            />
                                            <span
                                                style={{
                                                    color: "#35C75A",
                                                    fontSize: "14px",
                                                    fontWeight: "600",
                                                }}
                                            >
                                                Cấp số
                                            </span>
                                        </Space>
                                    </Space>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div
                                    style={{
                                        padding: "12px 0",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        height: "100%",
                                    }}
                                >
                                    <Row>
                                        <Col span={18}>
                                            <Status
                                                type="success"
                                                text="Đã sử dụng"
                                            />
                                        </Col>
                                        <Col span={6}>
                                            <span
                                                style={{
                                                    color: "#35C75A",
                                                    fontSize: "14px",
                                                    fontWeight: "700",
                                                }}
                                            >
                                                {
                                                    providerNumbers.filter(
                                                        (value) =>
                                                            value.status ==
                                                            "used"
                                                    ).length
                                                }
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={18}>
                                            <Status
                                                type="used"
                                                text="Đang chờ"
                                            />
                                        </Col>
                                        <Col span={6}>
                                            <span
                                                style={{
                                                    color: "#35C75A",
                                                    fontSize: "14px",
                                                    fontWeight: "700",
                                                }}
                                            >
                                                {
                                                    providerNumbers.filter(
                                                        (value) =>
                                                            value.status ==
                                                            "waiting"
                                                    ).length
                                                }
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={18}>
                                            <Status
                                                type="error"
                                                text="Bỏ qua"
                                            />
                                        </Col>
                                        <Col span={6}>
                                            <span
                                                style={{
                                                    color: "#35C75A",
                                                    fontSize: "14px",
                                                    fontWeight: "700",
                                                }}
                                            >
                                                {
                                                    providerNumbers.filter(
                                                        (value) =>
                                                            value.status ==
                                                            "skip"
                                                    ).length
                                                }
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Card>
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
