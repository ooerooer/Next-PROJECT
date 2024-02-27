import React from 'react'
import Image from 'next/image'
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import { updateUser } from '@/app/iib/userActions'
import { fetchUser } from '@/app/iib/data'

const SingleUserPage = async ({ params }: { params: { id: string } }) => {
    const id = params?.id;
    const user = await fetchUser(id);

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image className={styles.imgaee} src={user.img || "/noavatar.png"} alt="noavatar" width={50} height={50} />
                </div>
                {user.username}
            </div>
            <div className={styles.fromContainer}>
                <form action={updateUser} className={styles.form}>
                    <input type="hidden" name='id' value={user.id} />
                    <label>Username</label>
                    <input type="text" placeholder='username' name='username' />
                    <input type="email" placeholder='email' name='email' />
                    <input type="password" placeholder='password' name='password' />
                    <input type="number" placeholder='phone' name='phone' />

                    <select name="isAdmin" id='isAdmin'>
                        <option value="" hidden>Is Admin?</option>
                        <option value={`${true}`} selected={user.isAdmin}>yess</option>
                        <option value={`${false}`} selected={!user.isAdmin}>No</option>
                    </select>

                    <select name="isActive" id="isActive">
                        <option value="" hidden>Is Active</option>
                        <option value={`${true}`} selected={user.isActive}>Yes</option>
                        <option value={`${false}`} selected={!user.isActive}>No</option>
                    </select>

                    <textarea name="address" id="address" cols={30} rows={10} placeholder='Enter your address !'></textarea>

                    <button>Update</button>
                </form>
            </div >
        </div >
    )
}

export default SingleUserPage