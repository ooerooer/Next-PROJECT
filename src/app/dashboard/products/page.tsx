import React from 'react'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Search from '@/app/ui/dashboard/search/search'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import { fetchProducts } from '@/app/iib/dataP'
import { IProductsPromise } from '@/app/types/products'

const Products = async ({ searchParams }: { searchParams: { q: string, page: string } }) => {
    const q = searchParams?.q || "";
    const page = Number(searchParams?.page) || 1;
    const results: IProductsPromise | undefined = await fetchProducts(q, page);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder='Search for a product' />
                <Link href="/dashboard/products/add">
                    <button className={styles.addBtn}>Add new</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>stock</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        results?.products?.map((products) => (

                            <tr key={products._id}>
                                <td>
                                    <div className={styles.products}>
                                        <Image className={styles.products} src={products.img || "/noavatar.png"} alt="avatar" width={50} height={50} />
                                        {
                                            products.title
                                        }
                                    </div>
                                </td>
                                <td>{products.price}</td>
                                <td>{products.createdAt ? products.createdAt : "14.07.2010"}</td>
                                <td>{products.stock}</td>
                                <td>
                                    <div className={styles.btns}>
                                        <Link href={`/dashboard/users/${products._id}`}>
                                            <button className={`${styles.btn} ${styles.view}`}>View</button>
                                        </Link>
                                        <button className={`${styles.btn} ${styles.delete}`}>Delete</button>
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

export default Products;