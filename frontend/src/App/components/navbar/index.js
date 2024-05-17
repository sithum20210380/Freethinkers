import React, { useEffect, useState } from 'react';
import { Layout, Menu, Modal } from 'antd';
import './index.scss';

import {
    UserOutlined,
    DashboardOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import Logo from '../../Assests/logo.png'

const { Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
      setIsModalVisible(true);
  };

  const handleOk = () => {
      window.location.href = '/';
  };

  const handleCancel = () => {
      setIsModalVisible(false);
  }

  const handleMenuClick = (key) => {
    switch (key) {
      case '1':
        // Navigate to Dashboard page
        break;
      case '2':
        // Navigate to Invite User page
        break;
      case '5':
        showModal();
        break;
      default:
        break;
    }
  };

  return (
    <Sider className='sider'>
      <div>
        {collapsed ? <DashboardOutlined /> : <img src={Logo} alt="logo" className="logo" />}
      </div>
      <div className="user-welcome">
        <p>Welcome, Human</p>
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={({ key }) => handleMenuClick(key)}>
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Invite User
        </Menu.Item>
        <Menu.Item key="5" icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
      <Modal
        title="Logout Confirmation"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className='logout-modal'
      >
        <p>Are you sure you want to logout?</p>
      </Modal>
    </Sider>
  );
};
export default App;