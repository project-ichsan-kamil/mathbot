import React, { useState } from 'react';
import { Layout, Menu, Table, Dropdown, Avatar, Input, Button, Select } from 'antd';
import { UserOutlined, LogoutOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { Search } = Input;
const { Option } = Select;

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [pageSize, setPageSize] = useState(10); // Default pagination size
  const [data, setData] = useState([
    {
      key: '1',
      no: '1',
      nama: 'John Doe',
      kelas: 'A',
      score: 85,
      soal1: '10',
      soal2: '9',
      soal3: '8',
      soal4: '7',
      soal5: '9',
      soal6: '10',
      soal7: '9',
      soal8: '9',
      soal9: '8',
      soal10: '6',
    },
    // Tambahkan lebih banyak data untuk testing pagination
  ]);

  const [searchText, setSearchText] = useState('');

  // Fungsi untuk handle delete
  const handleDelete = (key) => {
    setData(data.filter((item) => item.key !== key));
  };

  // Fungsi untuk handle search
  const handleSearch = (value) => {
    setSearchText(value.toLowerCase());
  };

  // Data setelah filtering berdasarkan pencarian
  const filteredData = data.filter((item) =>
    item.nama.toLowerCase().includes(searchText)
  );

  // Kolom Tabel
  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Nama',
      dataIndex: 'nama',
      key: 'nama',
    },
    {
      title: 'Kelas',
      dataIndex: 'kelas',
      key: 'kelas',
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    },
    ...Array.from({ length: 10 }, (_, index) => ({
      title: `Soal ${index + 1}`,
      dataIndex: `soal${index + 1}`,
      key: `soal${index + 1}`,
    })),
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button
          type="primary"
          danger
          icon={<DeleteOutlined />}
          onClick={() => handleDelete(record.key)}
        >
          Delete
        </Button>
      ),
    },
  ];

  const menuItems = [
    {
      key: 'rekap',
      label: <Link to="/admin/rekap">Rekap</Link>,
    },
  ];

  const profileMenu = (
    <Menu>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  // Fungsi untuk handle perubahan ukuran pagination
  const handlePageSizeChange = (value) => {
    setPageSize(value);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="light" // Mengubah tema sidebar menjadi light
      >
        <div className="logo h-16 text-white font-bold text-center flex items-center justify-center" style={{backgroundColor: "#dda0dd" }}>
          Admin Raperbot
        </div>
        <Menu defaultSelectedKeys={['rekap']} mode="inline" items={menuItems} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background px-20" style={{ backgroundColor: '#dda0dd' }}>
          <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', height: '100%' }}>
            <Dropdown overlay={profileMenu} trigger={['click']}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Dropdown>
          </div>
        </Header>
        <Content style={{ margin: '16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
            <Select defaultValue={10} onChange={handlePageSizeChange}>
                <Option value={10}>10</Option>
                <Option value={25}>25</Option>
                <Option value={50}>50</Option>
              </Select>
              <Search
                placeholder="Cari siswa"
                enterButton={<SearchOutlined />}
                onSearch={handleSearch}
                style={{ width: 300 }}
              />
             
            </div>
            <Table
              columns={columns}
              dataSource={filteredData}
              pagination={{ pageSize }}
              rowKey="no"
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin;
