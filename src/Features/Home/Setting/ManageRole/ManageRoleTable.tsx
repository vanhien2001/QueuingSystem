import { Col, Form, Row, Table, Typography } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import ActionButton from "../../../../components/ActionButton";
import SearchInput from "../../../../components/SearchInput";
import styles from "./ManageRole.module.scss";


const columns= [
    {
      title: "Tên vai trò",
      key: "name",
      dataIndex: "name",
    },
  
    {
      title: "Số người dùng",
      key: "amountOfUser",
      dataIndex: "amountOfUser",
    },
  
    {
      title: "Mô tả",
      key: "description",
      dataIndex: "description",
    },
    {

    }
];
const data = [
    {
        key: "1",
        name: "Kế toán",
        amountOfUser: 6,
        description: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu'
    },
    {
        key: "2",
        name: "Bác sĩ",
        amountOfUser: 6,
        description: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu'
    },
    {
        key: "3",
        name: "Lễ tân",
        amountOfUser: 6,
        description: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu'
    },
    {
        key: "4",
        name: "Quản lý",
        amountOfUser: 6,
        description: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu'
    },
    {
        key: "5",
        name: "Admin",
        amountOfUser: 6,
        description: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu'
    },
    {
        key: "6",
        name: "Superadmin",
        amountOfUser: 6,
        description: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu'
    },
];
const ManageRoleTable = () => {
    return (
        <div className={styles.section}>
            <Form layout="vertical">
                <Row justify="space-between" className={styles.inputContainer}>
                    <Col>
                        <Typography.Title level={2} className={styles.title}>
                            Danh sách vai trò
                        </Typography.Title>
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
                        <ActionButton text="Thêm vai trò" icon={<PlusOutlined />}/>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default ManageRoleTable;
