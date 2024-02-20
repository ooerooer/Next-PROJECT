import React from 'react'
import styles from './search.module.css'
import { MdSearch } from 'react-icons/md'

const Search = ({ placeholder }: { placeholder: string }) => {
    return (
        <div className={styles.container}>
            <MdSearch />
            <input type="text" placeholder={placeholder} className={styles.int} />
        </div>
    )
}

export default Search