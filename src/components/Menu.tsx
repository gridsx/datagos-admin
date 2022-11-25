import React, { FC, useState } from 'react';
import { Button, Menu, MenuProps } from 'antd';
import {
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';


import './menu.css'


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('数据源管理', '1', <PieChartOutlined />),
    getItem('实例管理', '2', <DesktopOutlined />),
    getItem('任务管理', 'sub1', <MailOutlined />, [
        getItem('运行中任务', '3'),
        getItem('历史任务', '4'),
    ]),
];


const SiteNavi: FC = () => {
    return <div>
        <div className={'logo'}>
            DataGOs
        </div>
        <div style={{ width: 200 }}>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                inlineCollapsed={false}
                items={items}
            />
        </div>
    </div>

}

export default SiteNavi;