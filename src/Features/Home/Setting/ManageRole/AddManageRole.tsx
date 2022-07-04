import {
    Button,
    Card,
    Checkbox,
    Col,
    Form,
    Input,
    Row,
    Typography,
    message as notice,
} from "antd";
import clsx from "clsx";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../../store";
import {
    roleSelector,
    addRole,
    get,
    update,
} from "../../../../store/reducers/roleSlice";
import styles from "./ManageRole.module.scss";

const { Text, Title } = Typography;

interface formValue {
    name: string;
    description: string;
    authorityA: string[] | undefined;
    authorityB: string[] | undefined;
    authorityC: string[] | undefined;
}

const AddManageRole = () => {
    const [form] = Form.useForm();
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { loading, message, role } = useAppSelector(roleSelector);

    const onFinish = (value: formValue) => {
        if(id){
            dispatch(update({id, ...value}))
            .then(
                (data) => {
                    console.log(data.meta.requestStatus == 'fulfilled');
                    if (data.meta.requestStatus == 'fulfilled') {
                        notice.success('Cập nhật thành công', 3);
                        dispatch(get(id));
                    } else {
                        notice.error('Đã xảy ra lỗi', 3);
                    }
                }
            );
        }else{
            dispatch(addRole(value))
            .then(
                (data) => {
                    console.log(data.meta.requestStatus == 'fulfilled');
                    if (data.meta.requestStatus == 'fulfilled') {
                        notice.success('Thêm thành công', 3);
                        navigate("../");
                    } else {
                        notice.error('Đã xảy ra lỗi', 3);
                    }
                }
            );
        }
    };

    form.setFieldsValue(role);
    useEffect(() => {
        if (id) {
            dispatch(get(id));
        }
    }, []);
    return (
        <Form
            layout="vertical"
            name="role-add"
            form={id ? form : undefined}
            className={clsx(styles.section, styles.section2)}
            onFinish={onFinish}
        >
            <Title className={styles.title}>Quản lý tài khoản</Title>

            <Row>
                <Col flex="auto">
                    <Card bordered={false}>
                        <Row gutter={24}>
                            <Col span={24} style={{ marginBottom: "20px" }}>
                                <Title
                                    className={clsx(
                                        styles.title,
                                        styles.title2
                                    )}
                                >
                                    Thông tin vai trò
                                </Title>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="name"
                                    label={
                                        <Text className={styles.label}>
                                            Tên vai trò
                                        </Text>
                                    }
                                    required={false}
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Vui lòng điền tên vai trò",
                                        },
                                    ]}
                                >
                                    <Input
                                        size="large"
                                        placeholder="Nhập tên vai trò"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="description"
                                    label={
                                        <Text className={styles.label}>
                                            Mô tả
                                        </Text>
                                    }
                                    required={false}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập mô tả",
                                        },
                                    ]}
                                >
                                    <Input.TextArea
                                        size="large"
                                        placeholder="Nhập mô tả"
                                        style={{ height: "160px" }}
                                    />
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item
                                    name="permission"
                                    label={
                                        <Text className={styles.label}>
                                            Phân quyền chức năng
                                        </Text>
                                    }
                                >
                                    <Card
                                        className={styles.cardCheckBox}
                                        bordered={false}
                                    >
                                        <div>
                                            <Title
                                                className={clsx(
                                                    styles.title,
                                                    styles.title2
                                                )}
                                            >
                                                Nhóm chức năng A
                                            </Title>
                                            <Checkbox
                                                className={styles.checkbox}
                                            >
                                                <Text className={styles.label}>
                                                    Tất cả
                                                </Text>
                                            </Checkbox>
                                            <br />
                                            <Form.Item name="authorityA">
                                                <Checkbox.Group>
                                                    <Checkbox
                                                        value="ax"
                                                        className={
                                                            styles.checkbox
                                                        }
                                                    >
                                                        <Text
                                                            className={
                                                                styles.label
                                                            }
                                                        >
                                                            Chức năng x
                                                        </Text>
                                                    </Checkbox>
                                                    <br />
                                                    <Checkbox
                                                        value="ay"
                                                        className={
                                                            styles.checkbox
                                                        }
                                                    >
                                                        <Text
                                                            className={
                                                                styles.label
                                                            }
                                                        >
                                                            Chức năng y
                                                        </Text>
                                                    </Checkbox>
                                                    <br />
                                                    <Checkbox
                                                        value="az"
                                                        className={
                                                            styles.checkbox
                                                        }
                                                    >
                                                        <Text
                                                            className={
                                                                styles.label
                                                            }
                                                        >
                                                            Chức năng z
                                                        </Text>
                                                    </Checkbox>
                                                </Checkbox.Group>
                                            </Form.Item>
                                        </div>

                                        <div>
                                            <Title
                                                className={clsx(
                                                    styles.title,
                                                    styles.title2
                                                )}
                                            >
                                                Nhóm chức năng B
                                            </Title>
                                            <Checkbox
                                                className={styles.checkbox}
                                            >
                                                <Text className={styles.label}>
                                                    Tất cả
                                                </Text>
                                            </Checkbox>
                                            <br />
                                            <Form.Item name="authorityB">
                                                <Checkbox.Group>
                                                    <Checkbox
                                                        value="bx"
                                                        className={
                                                            styles.checkbox
                                                        }
                                                    >
                                                        <Text
                                                            className={
                                                                styles.label
                                                            }
                                                        >
                                                            Chức năng x
                                                        </Text>
                                                    </Checkbox>
                                                    <br />
                                                    <Checkbox
                                                        value="by"
                                                        className={
                                                            styles.checkbox
                                                        }
                                                    >
                                                        <Text
                                                            className={
                                                                styles.label
                                                            }
                                                        >
                                                            Chức năng y
                                                        </Text>
                                                    </Checkbox>
                                                    <br />
                                                    <Checkbox
                                                        value="bz"
                                                        className={
                                                            styles.checkbox
                                                        }
                                                    >
                                                        <Text
                                                            className={
                                                                styles.label
                                                            }
                                                        >
                                                            Chức năng z
                                                        </Text>
                                                    </Checkbox>
                                                </Checkbox.Group>
                                            </Form.Item>
                                        </div>

                                        <div>
                                            <Title
                                                className={clsx(
                                                    styles.title,
                                                    styles.title2
                                                )}
                                            >
                                                Nhóm chức năng C
                                            </Title>
                                            <Checkbox
                                                className={styles.checkbox}
                                            >
                                                <Text className={styles.label}>
                                                    Tất cả
                                                </Text>
                                            </Checkbox>
                                            <br />
                                            <Form.Item name="authorityC">
                                                <Checkbox.Group>
                                                    <Checkbox
                                                        value="cx"
                                                        className={
                                                            styles.checkbox
                                                        }
                                                    >
                                                        <Text
                                                            className={
                                                                styles.label
                                                            }
                                                        >
                                                            Chức năng x
                                                        </Text>
                                                    </Checkbox>
                                                    <br />
                                                    <Checkbox
                                                        value="cy"
                                                        className={
                                                            styles.checkbox
                                                        }
                                                    >
                                                        <Text
                                                            className={
                                                                styles.label
                                                            }
                                                        >
                                                            Chức năng y
                                                        </Text>
                                                    </Checkbox>
                                                    <br />
                                                    <Checkbox value="cz">
                                                        <Text
                                                            className={
                                                                styles.label
                                                            }
                                                        >
                                                            Chức năng z
                                                        </Text>
                                                    </Checkbox>
                                                </Checkbox.Group>
                                            </Form.Item>
                                        </div>
                                    </Card>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

            <Row
                gutter={32}
                justify="center"
                className={styles.buttonContainer}
            >
                <Col>
                    <Button
                        size="large"
                        type="primary"
                        ghost
                        className={styles.button}
                    >
                        <Link to="../">Hủy bỏ</Link>
                    </Button>
                </Col>
                <Col>
                    <Button
                        size="large"
                        type="primary"
                        className={styles.button}
                        htmlType="submit"
                        loading={loading}
                    >
                        {loading ? "" : id ? "Cập nhật" : "Thêm"}
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default AddManageRole;
