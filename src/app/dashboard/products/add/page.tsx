import React from 'react'
import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css'
import { addProduct } from '@/app/iib/productActions'

export default function AddProductPage() {
    return (
        <div className={styles.container}>
            <form action={addProduct} className={styles.form}>
                <input type="text" placeholder="title" name="title" required />
                <select>
                    <option value="general">Choose a category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                </select>
                <input type="number" placeholder="price" name="price" required />
                <input type="number" placeholder="stock" name="stock" required />
                <input type="text" placeholder="color" name="color" />
                <input type="text" placeholder="size" name="size" />
                <textarea name="desc" id="desc" rows={16} placeholder="Description" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}