import styles from './Register.module.scss';
import Button from '../Button/Button'
import Input from '../Input/Input';
import UserType from '../UserType/UserType';
import { useState } from 'react';

function Register() {
  const [userType, setUserType] = useState("student");
  const [user, setUser] = useState({ username: "", 
                                     name: "", 
                                     password: "", 
                                     confirmPassword: "" 
  });

  const handleChange = (e) => {
    const {name, value} = e.target; 
    console.log(name, value);
    setUser((prev) => {
      return {...prev, [name]: value}
    })
  };

  const handleClick = () => {
    // If any of the fields are empty, alert the user
    if (user.username === "" || user.name === "" || user.password === "" || user.confirmPassword === "") {
      alert("Lütfen tüm alanları doldurunuz.");
    }
    // gerekli islemler yapilir. usertype kontrol edilir
  };

  return (
    <div className={styles.register}>
      
      <div className={styles.banner}>
        <p className={styles.logo}>cmis</p> <p>'e Kayıt Ol</p>
      </div>
      
      <UserType userType={userType} setUserType={setUserType}/>

      <div className={styles.welcome}>
         <p>Yeni bir</p>
         <p className={styles.logo}>cmis</p> <p>hesabı oluşturun</p>
      </div>

      <Input type={"text"} name='username' placeholder={"kullanıcı adı"} onChange={handleChange} />
      
      {userType === "student" ? 
        <Input type={"text"} name='name' placeholder={"isim ve soyisim"} onChange={handleChange}/> :
        <Input type={"text"} name='name' placeholder={"topluluk/takım adı"} onChange={handleChange} />    
      }
      <Input type={"password"} name='password' placeholder={"şifre"} onChange={handleChange} />
      <Input type={"password"} name='confirmPassword' placeholder={"şifre tekrar"} onChange={handleChange} />

      <div className={styles.entrance}>
        <Button text={"Kayıt Ol"} onClick={handleClick}/>
      </div>

      <div className={styles.foot}>
        <p className={styles.logo}>cmis</p> <p>hesabınızla giris yapmak için</p> <a href="">tıklayın</a>
      </div>
      
    </div>
  )
}

export default Register