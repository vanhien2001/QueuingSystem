import { useEffect } from "react";
import moment from "moment";
import { Col, DatePicker, Form, Row, Table, Typography } from "antd";
import { DownloadOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Excel } from "antd-table-saveas-excel";
import { useAppSelector, useAppDispatch } from "../../../../store";
import {
    providerNumberSelector,
    getAll,
} from "../../../../store/reducers/providerNumberSlice";
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

const ReportTable = () => {
    const dispatch = useAppDispatch();
    const { loading, providerNumbers } = useAppSelector(providerNumberSelector);

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
                            <CaretRightOutlined style={{margin: "0 4px", fontSize: "10px"}}/>
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
                            loading={loading}
                            dataSource={providerNumbers.map(
                                (providerNumber) => {
                                    return {
                                        key: providerNumber.id,
                                        stt: providerNumber.number,
                                        name: providerNumber.service,
                                        time: moment(
                                            providerNumber.timeGet.toDate()
                                        ).format("HH:mm - DD/MM/YYYY"),
                                        status: (
                                            <Status
                                                type={
                                                    providerNumber.status ==
                                                    "skip"
                                                        ? "error"
                                                        : providerNumber.status
                                                }
                                                text={
                                                    providerNumber.status ==
                                                    "waiting"
                                                        ? "Đang chờ"
                                                        : providerNumber.status ==
                                                          "used"
                                                        ? "Đã sử dụng"
                                                        : "Bỏ qua"
                                                }
                                            />
                                        ),
                                        src: providerNumber.src,
                                    };
                                }
                            )}
                            bordered
                            size="middle"
                            pagination={{
                                defaultPageSize: 8,
                                position: ["bottomRight"],
                            }}
                        />
                    </Col>
                    <Col flex="100px">
                        <ActionButton
                            data={[
                                {
                                    text: "Tải về",
                                    icon: <DownloadOutlined />,
                                    onClick: () => {
                                        const excel = new Excel();
                                        excel
                                            .addSheet("Report")
                                            .addColumns(columns)
                                            .addDataSource(
                                                providerNumbers.map(
                                                    (providerNumber) => {
                                                        return {
                                                            key: providerNumber.id,
                                                            stt: providerNumber.number,
                                                            name: providerNumber.service,
                                                            time: moment(
                                                                providerNumber.timeGet.toDate()
                                                            ).format(
                                                                "HH:mm - DD/MM/YYYY"
                                                            ),
                                                            status:
                                                                providerNumber.status ==
                                                                "waiting"
                                                                    ? "Đang chờ"
                                                                    : providerNumber.status ==
                                                                      "used"
                                                                    ? "Đã sử dụng"
                                                                    : "Bỏ qua",
                                                            src: providerNumber.src,
                                                        };
                                                    }
                                                ),
                                                {
                                                    str2Percent: true,
                                                }
                                            )
                                            .saveAs("Report.xlsx");
                                    },
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
