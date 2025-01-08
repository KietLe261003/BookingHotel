import React from "react";
import { Table, Divider, Tag } from 'antd';
const TableComponent = () => {
  
return (
    <div>
        <Table columns={columns} dataSource={data}></Table>
    </div>
);
};

export default TableComponent;
