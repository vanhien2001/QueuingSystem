import { Col, DatePicker, Form, Row, Table, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import Status from "../../../../components/Status";
import ActionButton from "../../../../components/ActionButton";
import styles from "../Report.module.scss";

const columns = [
    {
        title: "Số thứ tự",
        key: "stt",
        dataIndex: "stt",
    },
    {
        title: "Tên dịch vụ",
        key: "name",
        dataIndex: "name",
    },
    {
        title: "Thời gian cấp",
        key: "time",
        dataIndex: "time",
    },
    {
        title: "Tình trạng",
        key: "status",
        dataIndex: "status",
    },
    {
        title: "Nguồn cấp",
        key: "src",
        dataIndex: "src",
    },
];

const data = [
    {
        key: "1",
        stt: "201001",
        name: "Khám tim mạch",
        time: new Date().toString(),
        status: <Status type="used" text="Đã sử dụng"/>,
        src: "Kisok",
    },
    {
        key: "2",
        stt: "201002",
        name: "Răng hàm mặt",
        time: new Date().toString(),
        status: <Status type="waiting" text="Đang chờ"/>,
        src: "Hệ thống",
    },
    {
        key: "3",
        stt: "201003",
        name: "Khám sản phụ khoa",
        time: new Date().toString(),
        status: <Status type="used" text="Đã sử dụng"/>,
        src: "Kisok",
    },
    {
        key: "4",
        stt: "201004",
        name: "Tai mũi họng",
        time: new Date().toString(),
        status: <Status type="error" text="Bỏ qua"/>,
        src: "Kisok",
    },
    {
        key: "5",
        stt: "201005",
        name: "Khám tổng quát",
        time: new Date().toString(),
        status: <Status type="waiting" text="Đang chờ"/>,
        src: "Hệ thống",
    },
];

const ReportTable = () => {
    return (
        <div className={styles.section}>
            <Form layout="vertical">
                <Row justify="space-between" className={styles.inputContainer}>
                    <Col>
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
                    </Col>
                </Row>
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
                                    text: "Tải về",
                                    icon: <DownloadOutlined />,
                                },
                            ]}
                        />
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default ReportTable;
