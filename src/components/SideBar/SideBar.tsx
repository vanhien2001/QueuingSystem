import {
    AppstoreOutlined,
    WechatOutlined,
    DesktopOutlined,
    CodepenOutlined,
    FileTextOutlined,
    ExportOutlined,
    SettingOutlined,
    MoreOutlined,
} from '@ant-design/icons';
import { Button, MenuProps } from 'antd';
import { Menu } from 'antd';
import clsx from 'clsx';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store/index';
import { userSelector, logout } from '../../store/reducers/userSlice';
import Logo from '../../Asset/Img/LogoAlta.svg';
import styles from './SideBar.module.scss';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    key: React.Key,
    label: React.ReactNode,
    icon?: React.ReactNode,
    expandIcon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        expandIcon,
    } as MenuItem;
}

const SideBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { userLogin } = useAppSelector(userSelector);

    let keys = location.pathname.split('/');
    let key;
    if (keys[1] == 'setting') {
        key = keys.slice(0, 3).join('/');
    } else {
        key = keys.slice(0, 2).join('/');
    }
    const items: MenuItem[] = userLogin
        ? [
              getItem(
                  '/dashboard',
                  <Link to="/dashboard">DashBoard</Link>,
                  <AppstoreOutlined />,
              ),
              getItem(
                  '/devices',
                  <Link to="/devices">Thiết bị</Link>,
                  <DesktopOutlined />,
              ),
              getItem(
                  '/services',
                  <Link to="/services">Dịch vụ</Link>,
                  <WechatOutlined />,
              ),
              getItem(
                  '/provider',
                  <Link to="/provider">Cấp số</Link>,
                  <CodepenOutlined />,
              ),
              getItem(
                  '/report',
                  <Link to="/report">Báo cáo</Link>,
                  <FileTextOutlined />,
              ),
              getItem(
                  'setting',
                  'Cài đặt hệ thống',
                  <SettingOutlined />,
                  <MoreOutlined className={styles.expandIcon} />,
                  [
                      getItem(
                          '/setting/roles',
                          <Link to="/setting/roles">Quản lý vai trò</Link>,
                      ),
                      getItem(
                          '/setting/accounts',
                          <Link to="/setting/accounts">Quản lý tài khoản</Link>,
                      ),
                      getItem(
                          '/setting/history',
                          <Link to="/setting/history">Nhật ký người dùng</Link>,
                      ),
                  ],
              ),
          ]
        : [
              getItem(
                  '/provider/new',
                  <Link to="/provider/new">Cấp số</Link>,
                  <CodepenOutlined />,
              ),
          ];

    return (
        <div className={clsx(styles.sideBar)}>
            <div>
                <div className={clsx(styles.logo)}>
                    <img src={Logo} alt="Alta" />
                </div>
                <div className="menu">
                    <Menu selectedKeys={[key]} items={items} />
                </div>
            </div>
            <div className={clsx(styles.buttonContainer)}>
                <Button
                    className={clsx(styles.btn)}
                    type="primary"
                    ghost
                    htmlType="submit"
                    icon={<ExportOutlined />}
                    onClick={() => {
                        dispatch(logout());
                        navigate('/auth/login');
                    }}
                >
                    {userLogin ? 'Đăng xuất' : 'Đăng nhập'}
                </Button>
            </div>
        </div>
    );
};

export default SideBar;
