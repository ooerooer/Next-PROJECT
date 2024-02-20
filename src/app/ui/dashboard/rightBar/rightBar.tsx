import React from 'react'
import styles from './rightbar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

const RightBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astron.png" alt='astronaout' className={styles.bg} fill />
                </div>
                <div className={styles.text}>
                    <span className={styles.notification}>🚀 Available Now</span>
                    <h3 className={styles.title}>
                        How to use the new version of the admin dashboad?
                    </h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illo
                    </p>
                    <button className={styles.btn}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.bgContainer}>
                </div>
                <div className={styles.text}>
                    <span className={styles.notification}>🔥 Coming Soon</span>
                    <h3 className={styles.title}>
                        New server actions are available, partial your productivity
                    </h3>
                    <span className={styles.subtitle}>Boost your productivity</span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illo
                    </p>
                    <button className={styles.btn}>
                        <MdReadMore />
                        Learn
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RightBar