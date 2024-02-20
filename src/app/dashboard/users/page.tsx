"use client"

import React from 'react'
import styles from '@/app/ui/dashboard/users/user.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Search from '@/app/ui/dashboard/search/search'
import Pagination from '@/app/ui/dashboard/pagination/pagination'

const Users = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder='Search for a user' />
                <Link href="/dashboard/users/add">
                    <button className={styles.addBtn}>Add new</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image className={styles.userImage} src="/noavatar.png" alt="avatar" width={50} height={50} />
                                Javohir Usmonov
                            </div>
                        </td>
                        <td>javohir@gmail.com</td>
                        <td>14.07.2010</td>
                        <td>admin</td>
                        <td>active</td>
                        <td>
                            <div className={styles.btns}>
                                <Link href={`/dashboard/users/1`}>
                                    <button className={`${styles.btn} ${styles.view}`}>View</button>
                                </Link>
                                <button className={`${styles.btn} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default Users