import React from 'react';
import { Table, Divider, Tag } from 'antd';
const ManagementAccountPage = () => {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Status',
          key: 'status',
          dataIndex: 'status',
          render: tags => (
            <span>
              {tags.map(tag => {
                let color = 'geekblue';
                switch (tag) {
                  case 'Active':
                      color = 'green'
                    break;
                  case 'Inactive':
                      color = 'red'
                    break;
                  case 'Banned':
                      color = 'orange'
                      break;
                  default:
                    break;
                }
                return (
                  <Tag color={color} key={'volcano'}>
                    {tag}
                  </Tag>
                );
              })}
            </span>
          ),
        },
        {
          title: 'Role',
          dataIndex: 'role',
          key: 'role',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <span>
              <a>Edit</a>
              <Divider type="vertical" />
              <a>Delete</a>
            </span>
          ),
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          status: ['Active'],
          role: 'Admin'
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          status: ['Inactive'],
          role: 'User'
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          status: ['Banned'],
          role: 'Staff'
        },
        {
          key: '4',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          status: ['Verified'],
          role: 'Admin'
        },
      ];
    return (
        <div>
            <Table columns={columns} dataSource={data}></Table>
        </div>
    );
};

export default ManagementAccountPage;