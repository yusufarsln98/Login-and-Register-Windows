import styles from './Register.module.scss';
import Button from '../Button/Button'
import Input from '../Input/Input';
import UserType from '../UserType/UserType';
import { useState } from 'react';

function Register() {

  return (
    <div className={styles.register}>
      
      <div className={styles.banner}>
        <p className={styles.logo}>cmis</p> <p>'e Kayıt Ol</p>
      </div>
      
      <UserType />

      <div className={styles.welcome}>
         <p>Yeni bir</p>
         <p className={styles.logo}>cmis</p> <p>hesabı oluşturun</p>
      </div>

      <Input type={"text"} placeholder={"kullanıcı adı"} />
      <Input type={"text"} placeholder={"isim ve soyisim"} />
      <Input type={"password"} placeholder={"şifre"} />
      <Input type={"password"} placeholder={"şifre tekrar"} />

      <div className={styles.entrance}>
        <a href="">Şifremi Unuttum</a>
        <Button text={"Giriş"} />
      </div>

      <div className={styles.foot}>
        <p className={styles.logo}>cmis</p> <p>hesabı oluşturmak için</p> <a href="">tıklayın</a>
      </div>
      
    </div>
  )
}

export default Register