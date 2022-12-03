import React from 'react'
import styles from './Input.module.scss'

function Input({type, name, placeholder, onChange}) {
  return (
    <input className={styles.input} type={type} name={name} placeholder={placeholder} onChange={onChange}/>
  )
}

export default Input