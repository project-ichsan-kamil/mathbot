import React, { useState, useEffect } from 'react';
import { Layout, Menu, Table, Dropdown, Avatar, Input, Button, Select } from 'antd';
import { UserOutlined, LogoutOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { fetchData, deleteData } from '../components/ApiService';

const { Header, Sider, Content } = Layout;
const { Search } = Input;
const { Option } = Select;

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [pageSize, setPageSize] = useState(10); // Default pagination size
  const [data, setData] = useState([]); // Data from API
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for data fetching

  // Fetch data from API on component mount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const responseData = await fetchData(); // Call fetchData from ApiService
    const processedData = responseData.map((item, index) => ({
      key: item.id, // Assume "id" is available in the API response
      no: index + 1,
      nama: item.nama,
      kelas: item.kelas,
      score: item.score,
      soal1: item.soal1,
      soal2: item.soal2,
      soal3: item.soal3,
      soal4: item.soal4,
      soal5: item.soal5,
      soal6: item.soal6,
      soal7: item.soal7,
      soal8: item.soal8,
      soal9: item.soal9,
      soal10: item.soal10,
    }));
    setData(processedData);
    setLoading(false);
  };

  // Function to handle delete with API integration
  const handleDelete = async (key) => {
    await deleteData(key); // Call deleteData from ApiService
    loadData(); // Reload data after deletion
  };

  // Function to handle search
  const handleSearch = (value) => {
    setSearchText(value.toLowerCase());
  };

  // Data after filtering based on search
  const filteredData = data.filter((item) =>
    item.nama.toLowerCase().includes(searchText)
  );

  // Table columns
  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      render: (text, record, index) => index + 1, // Renders current index + 1
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
          onClick={() => handleDelete(record.key)} // Call the handleDelete function
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

  // Handle pagination size change
  const handlePageSizeChange = (value) => {
    setPageSize(value);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
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
              loading={loading} // Show loading spinner while fetching data
              pagination={{ pageSize }}
              rowKey="key"
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin;