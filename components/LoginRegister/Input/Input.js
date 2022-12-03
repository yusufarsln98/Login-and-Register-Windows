import React from 'react'
import styles from './Input.module.scss'

function Input({type, placeholder, onChange}) {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} onChange={onChange}/>
  )
}

export default Input