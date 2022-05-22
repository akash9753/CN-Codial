import styles from '../styles/settings.module.css';
import { useAuth } from "../providers/AuthProvider";
const Settings = () =>{
    const auth = useAuth()
    console.log(auth.user);
    return (
        <div className={styles.settings}>
     <div className={styles.imgContainer}>
          <img src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png" alt="" />
     </div>

     <div className={styles.field}>
         <div className={styles.fieldName}>Email</div>
         <div className={styles.fieldValue}>{auth.user?.email}</div>
     </div>

     <div className={styles.field}>
         <div className={styles.fieldName}>Name</div>
         <div className={styles.fieldValue}>{auth.user?.name}</div>
     </div>

     <div className={styles.field}>
         <div className={styles.fieldName}>Password</div>
         <input type="password" />
     </div>

     <div className={styles.field}>
         <div className={styles.fieldName}>Confirm Password</div>
         <input type="passowrd" />
     </div>
     
     <div className={styles.btnGrp}>
         <button className={`button ${styles.editBtn}`}>Edit Profile </button>
     </div>

    </div>
    )
}

export default Settings;