import React, { ReactNode } from 'react'
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
} from "react-icons/md"
import styles from "./sidebar.module.css"
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';

interface MenuItem {
    title: String;
    list: subMenuItem[];
}

interface subMenuItem {
    title: string;
    path: string;
    icon: ReactNode;
}

const menuItems: MenuItem[] = [
    {
        title: "Page",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />,
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />,
            },
        ]
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork />,
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics />,
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: <MdPeople />,
            },
        ]
    },
    {
        title: "Users",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />,
            },
        ]
    }
]

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image
                    src="/noavatar.png"
                    className={styles.userImage}
                    alt=''
                    width='50'
                    height='50'
                />
                <div className={styles.userDetail}>
                    <span className={styles.username}>Usmonov Javohir</span>
                    <span className={styles.userTitle}>Developer</span>
                </div>
            </div>
            <ul>
                {
                    menuItems.map((item, index) => (
                        <li key={index}>
                            <span className={styles.cat}>{item.title}</span>
                            {
                                item.list.map(list => (
                                    <MenuLink key={list.title} menu={list} />
                                ))
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar