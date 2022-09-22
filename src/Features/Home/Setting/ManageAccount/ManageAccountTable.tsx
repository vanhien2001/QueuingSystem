import { CaretDownOutlined } from '@ant-design/icons';
import { Col, Form, Row, Select, Table, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../store';
import { userSelector, getAll } from '../../../../store/reducers/userSlice';
import Status from '../../../../components/Status';
import ActionButton from '../../../../components/ActionButton';
import SearchInput from '../../../../components/SearchInput';
import styles from './ManageAccount.module.scss';
import { useEffect, useState } from 'react';

const { Option } = Select;

const columns = [
    {
        title: 'Tên đăng nhập',
        key: 'username',
        dataIndex: 'username',
    },

    {
        title: 'Họ tên',
        key: 'name',
        dataIndex: 'name',
    },

    {
        title: 'Số điện thoại',
        key: 'phoneNumber',
        dataIndex: 'phoneNumber',
    },

    {
        title: 'Email',
        key: 'email',
        dataIndex: 'email',
    },
    {
        title: 'Vai trò',
        key: 'role',
        dataIndex: 'role',
    },
    {
        title: 'Trạng thái hoạt động',
        key: 'status',
        dataIndex: 'status',
    },
    {
        title: '',
        key: 'update',
        dataIndex: 'update',
    },
];

const ManageAccountTable = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { authLoading, users } = useAppSelector(userSelector);
    const [active, setActive] = useState<boolean | null>(null);
    const [keywords, setKeywords] = useState<string>('');

    useEffect(() => {
        dispatch(getAll({ active, keywords }));
    }, [active, keywords]);

    return (
        <div className={styles.section}>
            <Typography.Title level={2} className={styles.title}>
                Danh sách tài khoản
            </Typography.Title>
            <Form layout="vertical">
                <Row justify="space-between" className={styles.inputContainer}>
                    <Col flex="300px">
                        <Form.Item
                            label={
                                <Typography.Text className={styles.label}>
                                    Tên vai trò
                                </Typography.Text>
                            }
                        >
                            <Select
                                size="large"
                                defaultValue={null}
                                value={active}
                                onChange={(value) => setActive(value)}
                                suffixIcon={
                                    <CaretDownOutlined
                                        style={{
                                            fontSize: '20px',
                                            color: '#FF7506',
                                        }}
                                    />
                                }
                            >
                                <Option value={null}>Tất cả</Option>
                                <Option value={true}>Hoạt động</Option>
                                <Option value={false}>Ngưng hoạt động </Option>
                            </Select>
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
                            <SearchInput
                                placeholder="Nhập từ khóa"
                                onSearch={setKeywords}
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Col flex="auto">
                    <Table
                        columns={columns}
                        loading={authLoading}
                        dataSource={users.map((user) => ({
                            key: user.id,
                            ...user,
                            status: (
                                <Status
                                    type={user.isActive ? 'success' : 'error'}
                                    text={
                                        user.isActive
                                            ? 'Hoạt động'
                                            : 'Ngưng hoạt động'
                                    }
                                />
                            ),
                            update: (
                                <Link
                                    to={`./edit/${user.id}`}
                                    className={styles.link}
                                >
                                    Cập nhật
                                </Link>
                            ),
                        }))}
                        bordered
                        size="middle"
                        pagination={{
                            defaultPageSize: 8,
                            position: ['bottomRight'],
                            showLessItems: true,
                            showSizeChanger: false,
                        }}
                    />
                </Col>
                <Col flex="100px">
                    <ActionButton
                        data={[
                            {
                                text: 'Thêm tài khoản',
                                icon: <PlusOutlined />,
                                onClick: () => navigate('../add'),
                            },
                        ]}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default ManageAccountTable;
