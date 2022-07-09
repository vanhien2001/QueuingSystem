import { useEffect } from "react";
import { Col, DatePicker, Form, Row, Table, Typography } from "antd";
import moment from "moment";
import { Timestamp } from "firebase/firestore";
import { useAppSelector, useAppDispatch } from "../../../../store";
import { diarySelector, getAll, add } from "../../../../store/reducers/diarySlice";
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

const HistoryUserTable = () => {
    const dispatch = useAppDispatch();
    const { loading, diaries } = useAppSelector(diarySelector);

    useEffect(() => {
        dispatch(getAll());
    }, []);

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
                            loading={loading}
                            dataSource={diaries.map((diary) => (
                            {
                                key: diary.id,
                                username: diary.username,
                                time: moment(diary.time.toDate()).format("HH:mm - DD/MM/YYYY"),
                                ip: diary.ip,
                                actionImplemented: diary.action,
                            }))}
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
