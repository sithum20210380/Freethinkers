import React from "react";
import "./index.scss";
import { Button } from "antd";
import { Table } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import edit from "../../../images/edit.svg"
import trash from "../../../images/trash.svg"
import { Pagination } from 'antd';



export default function AdminDashboard() {
const itemRender = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};





  const dataSource = [
    {
      dtpcode: "1",
      username: "John",
      firstname: "John",
      lastname: "Doe",
      mobile: "1234567890",
      email: "nsandasika123@gmail.com",
      status: "User",
      action:<img src={edit} alt="edit" />,
    },
    {
      dtpcode: "2",
      username: "John",
      firstname: "John",
      lastname: "Doe",
      mobile: "1234567890",
      email: "nsandasika123@gmail.com",
      status: "User",
      action:<img src={edit} alt="edit" />,
    },
    {
      dtpcode: "3",
      username: "John",
      firstname: "John",
      lastname: "Doe",
      mobile: "1234567890",
      email: "nsandasika123@gmail.com",
      status: "User",
      action:<img src={edit} alt="edit" />,
    },
  ];

  const columns = [
    {
      title: "DTP Code",
      dataIndex: "dtpcode",
      key: "dtpcode",
    },
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
    },{
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },{
      title: "Email",
      dataIndex: "email",
      key: "email",
    },{
      title: "Status",
      dataIndex: "status",
      key: "status",
    },{
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  const dataSourcetwo = [
    {
      dtpcode: "1",
      username: "John",
      firstname: "John",
      lastname: "Doe",
      mobile: "1234567890",
      email: "nsandasika123@gmail.com",
      status: "User",
      action:<img src={edit} alt="edit" />,
    },
    {
      dtpcode: "2",
      username: "John",
      firstname: "John",
      lastname: "Doe",
      mobile: "1234567890",
      email: "nsandasika123@gmail.com",
      status: "User",
      action:<img src={edit} alt="edit" />,
    },
    {
      dtpcode: "3",
      username: "John",
      firstname: "John",
      lastname: "Doe",
      mobile: "1234567890",
      email: "nsandasika123@gmail.com",
      status: "User",
      action:<img src={edit} alt="edit" />,
    },
  ];

  const columnstwo = [
    {
      title: "DTP Code",
      dataIndex: "dtpcode",
      key: "dtpcode",
    },
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
    },{
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },{
      title: "Email",
      dataIndex: "email",
      key: "email",
    },{
      title: "Status",
      dataIndex: "status",
      key: "status",
    },{
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  const dataSourceone = [
    {
      dtpcode: "1",
      username: "John",
      paymentvalue: "",
      paymenttype: "",
      action:<img src={trash} alt="edit" />,
    },
    {
      dtpcode: "2",
      username: "John",
      paymentvalue: "",
      paymenttype: "",
      action:<img src={trash} alt="edit" />,
    },
    {
      dtpcode: "3",
      username: "John",
      paymentvalue: "",
      paymenttype: "",
      action:<img src={trash} alt="edit" />,
    },
  ];

  const columnsone = [
    {
      title: "DTP Code",
      dataIndex: "dtpcode",
      key: "dtpcode",
    },
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Payment value",
      dataIndex: "paymentvalue",
      key: "paymentvalue",
    },
    {
      title: "Payment Type",
      dataIndex: "paymenttype",
      key: "paymenttype",
    },{
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  return (
    <div className="admin-dashboard-main-container">
      <div className="admin-system-info">
        <div className="admin-dashboard-main-heading">System Information</div>
        <div className="admin-dashboard-sys-info-cont">
          <div className="admin-dashboard-tot-users">Total Users</div>
          <div className="admin-dashboard-tot-payments">Total Payments</div>
        </div>
      </div>
      <div className="admin-user-info-main-cont">
        <div className="admin-user-info-heading-cont">
          <div className="admin-user-info-heading">User Information</div>
          <div className="admin-user-info-button">
            <Button type="primary">+ Add User</Button>
            
          </div>
        </div>
        <div>
          <Table dataSource={dataSource} columns={columns} pagination={false}/>
        </div>
        <div>
        <Pagination className="pag-admin" total={500} itemRender={itemRender} />
        </div>
        
      </div>
      <div className="admin-user-info-main-cont">
        <div className="admin-user-info-heading-cont">
          <div className="admin-user-info-heading">Payment Information</div>
          {/* <div className="admin-user-info-button">
            <Button type="primary">+ Add User</Button>
            
          </div> */}
        </div>
        <div>
          <Table dataSource={dataSourceone} columns={columnsone} pagination={false}/>
        </div>
        <div>
        <Pagination className="pag-admin" total={500} itemRender={itemRender} />
        </div>
        
      </div>
      <div className="admin-dashboard-sys-info-cont">
          <div className="admin-dashboard-tot-users">Admins</div>
          {/* <div className="admin-dashboard-tot-payments">Total Payments</div> */}
        </div>
        <div className="admin-user-info-main-cont">
        <div className="admin-user-info-heading-cont">
          <div className="admin-user-info-heading">Admin Information</div>
          <div className="admin-user-info-button">
            <Button type="primary">+ Add Admin</Button>
            
          </div>
        </div>
        <div>
          <Table dataSource={dataSourcetwo} columns={columnstwo} pagination={false}/>
        </div>
        <div>
        <Pagination className="pag-admin" total={500} itemRender={itemRender} />
        </div>
        
      </div>
    </div>
  );
}
