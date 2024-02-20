import React from 'react'
import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css'

const AddProductPage = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input type="text" placeholder='username' name='username' required />
                <input type="email" placeholder='email' name='email' required />
                <input type="password" placeholder='password' name='password' required />
                <input type="number" placeholder='phone' name='phone' required />

                <select name="isAdmin" id='isAdmin'>
                    <option value="" hidden>Is Admin?</option>
                    <option value="">Yes</option>
                    <option value="">No</option>
                </select>

                <select name="isActive" id="isActive">
                    <option value="" hidden>Is Active</option>
                    <option value="">Yes</option>
                    <option value="">No</option>
                </select>

                <textarea name="address" id="address" cols={30} rows={10} placeholder='Enter your address !'></textarea>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddProductPage