import { Button, Layout, Menu, Tooltip } from 'antd';
import './dashboard.css';
import { useState } from 'react';
import {
    DiffOutlined,
    FundProjectionScreenOutlined,
    LoginOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PropertySafetyOutlined
} from '@ant-design/icons';

import Transactions from '../Transaction/Transaction'

const { Sider, Content } = Layout;


function Dashboard() {
    const [collapsed, setCollapsed] = useState(true);
    const [selectedTab, setselectedTab] = useState('Record Transaction');

    const handleMenuClick = (e: any) => {
        setselectedTab(e.key)
        console.log(e.key);
    }

    return (
        <>
            <Layout>
                <Sider className='side-bar' trigger={null} collapsible collapsed={collapsed}>
                    <Tooltip placement="right" title={collapsed ? "Expand" : null}>
                        <Button
                            className={collapsed ? 'expand-btn' : 'collapse-btn'}
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                        >
                            {collapsed ? null : (
                                "Collapse"
                            )}
                        </Button>
                    </Tooltip>

                    <Menu
                        mode="inline"
                        className='menu-bar'
                        defaultSelectedKeys={[selectedTab]}
                        onSelect={handleMenuClick}
                        items={[
                            {
                                key: 'Dashboard',
                                icon: <FundProjectionScreenOutlined />,
                                label: 'Dashboard',
                            },
                            {
                                key: 'Record Transaction',
                                icon: <DiffOutlined />,
                                label: 'Record Transaction',
                            },
                            {
                                key: 'All Incomes',
                                icon: <LoginOutlined />,
                                label: 'All Incomes',
                            },
                            {
                                key: 'All Expenses',
                                icon: <LogoutOutlined />,
                                label: 'All Expenses',
                            },
                            {
                                key: 'All Loans',
                                icon: <PropertySafetyOutlined />,
                                label: 'All Loans',
                            }

                        ]}
                    />
                </Sider>
                    <Content style={{ background: '#EEE7DA' }}>
                        <h1 style={{textAlign:"center", marginBottom:50}}> {selectedTab} </h1>
                        <h1></h1>
                        {selectedTab == "Dashboard" ? (
                            ""
                        ) : null}
                        {selectedTab == "Record Transaction" ? <Transactions /> : null}
                    </Content>
            </Layout>
        </>
    )
}

export default Dashboard