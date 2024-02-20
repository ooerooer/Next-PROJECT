import React from 'react'
import styles from './transactions.module.css'
import Image from 'next/image'

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className='trHov'>
                        <td>
                            <div className={styles.user}>
                                <Image src='/noavatar.png' width={40} height={40} alt='user' className={styles.userImage} />
                                Javohir Usmonov
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.pending} ${styles.status} `}>
                                Pending
                            </span>
                        </td>
                        <td>
                            14.07.2010
                        </td>
                        <td>
                            $3000
                        </td>
                    </tr>
                    <tr className='trHov'>
                        <td>
                            <div className={styles.user}>
                                <Image src='/noavatar.png' width={40} height={40} alt='user' className={styles.userImage} />
                                Asilbek Tojiqulov
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.cancelled} ${styles.status} `}>
                                Cancelled
                            </span>
                        </td>
                        <td>
                            14.07.2007
                        </td>
                        <td>
                            $2000
                        </td>
                    </tr>
                    <tr className='trHov'>
                        <td>
                            <div className={styles.user}>
                                <Image src='/noavatar.png' width={40} height={40} alt='user' className={styles.userImage} />
                                Abdulaziz Elboyev
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.done} ${styles.status} `}>
                                Done
                            </span>
                        </td>
                        <td>
                            14.07.2024
                        </td>
                        <td>
                            $-free
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default Transactions