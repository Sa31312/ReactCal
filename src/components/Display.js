
import styles from ".././App.module.css";
const Display  = ({displayval})=>{
   return <input id="displaycal" value={displayval} readOnly className={styles.displaycal} type='text' />
}
export default Display;