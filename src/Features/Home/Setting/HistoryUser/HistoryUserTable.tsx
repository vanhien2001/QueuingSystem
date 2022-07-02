import { Col, DatePicker, Form, Row, Table, Typography } from "antd";
import SearchInput from "../../../../components/SearchInput";
import styles from "./HistoryUser.module.scss";

const columns = [
    {
        title: "Tên đăng nhập",
        key: "username",
        dataIndex: "username",
    },

    {
        title: "Thời gian tác động",
        key: "time",
        dataIndex: "time",
    },

    {
        title: "IP thực hiện",
        key: "ip",
        dataIndex: "ip",
    },

    {
        title: "Thao tác thực hiện",
        key: "active",
        dataIndex: "actionImplemented",
    },
];

const data = [
    {
        key: "1",
        username: "vanhien2001",
        time: (new Date()).toString(),
        ip: "111.111.111.111",
        actionImplemented: "Cập nhật thông tin dịch vụ",
    },

    {
        key: "2",
        username: "vanhien2001",
        time: (new Date()).toString(),
        ip: "111.111.111.111",
        actionImplemented: "Cập nhật thông tin dịch vụ",
    },

    {
        key: "3",
        username: "vanhien2001",
        time: (new Date()).toString(),
        ip: "111.111.111.111",
        actionImplemented: "Cập nhật thông tin dịch vụ",
    },
];

const HistoryUserTable = () => {
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
                    <Col flex="100px"></Col>
                </Row>
            </Form>
        </div>
    );
};

export default HistoryUserTable;
