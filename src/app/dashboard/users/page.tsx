import React from 'react'
import styles from '@/app/ui/dashboard/users/user.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Search from '@/app/ui/dashboard/search/search'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import { IUsersPromise } from '@/app/types/user'
import { fetchUsers } from '@/app/iib/data'
import { delteUser } from '@/app/iib/userActions'

const Users = async ({ searchParams }: { searchParams: { q: string, page: string } }) => {

    // const users = await fetchUsers(q);
    const q = searchParams?.q || "";
    const page = Number(searchParams?.page) || 1;
    const results: IUsersPromise | undefined = await fetchUsers(q, page);

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
                    {
                        results?.users?.map((user) => (

                            <tr key={user._id}>
                                <td>
                                    <div className={styles.user}>
                                        <Image className={styles.userImage} src={user.img || "/noavatar.png"} alt="avatar" width={50} height={50} />
                                        {
                                            user.username
                                        }
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>14.07.2010</td>
                                <td>{user.isAdmin ? "Admin" : "Client"}</td>
                                <td>{user.isActive ? "Active" : "Passive"}</td>
                                <td>
                                    <div className={styles.btns}>
                                        <Link href={`/dashboard/users/${user._id}`}>
                                            <button className={`${styles.btn} ${styles.view}`}>View</button>
                                        </Link>
                                        <form action={delteUser}>
                                            <input type="text" hidden name='id' value={user._id} />
                                            <button className={`${styles.btn} ${styles.delete}`}>Delete</button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Pagination count={results?.count} />
        </div>
    )
}

export default Users