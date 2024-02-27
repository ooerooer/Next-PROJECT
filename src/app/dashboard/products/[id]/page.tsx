import React from 'react'
import Image from 'next/image'
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import { fetchProduct } from '@/app/iib/dataP'
import { updateProduct } from '@/app/iib/productActions'

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
    const id = params.id;
    const product = await fetchProduct(id);

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image className={styles.imgaee} src={product.img || "/noavatar.png"} alt="noavatar" width={50} height={50} />
                </div>
                {product.title}
            </div>
            <div className={styles.fromContainer}>
                <form action={updateProduct} className={styles.form}>
                    <input type="hidden" name='id' value={product._id} />
                    <label>title</label>
                    <input type="text" placeholder={product.title} name='title' />
                    <input type="text" placeholder={product.color} name='color' />
                    <input type="number" placeholder={product.price} name='price' />
                    <textarea name="description" id="description" cols={30} rows={10} placeholder='Enter your product description !'></textarea>

                    <button>Update</button>
                </form>
            </div >
        </div >
    )
}

export default SingleProductPage