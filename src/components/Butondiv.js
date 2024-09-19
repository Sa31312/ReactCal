
import styles from "./Buttondiv.module.css";
const Buttonsdiv = ({onButtonClick}) =>{
   const allbuttons = ['c', '1', '2', '+', '3', '4', '5', '-', '6', '7', '8', '/', '9', '0', '.', '=']
    return (
        <div className={styles.outerdivbtn}>
      {
        allbuttons.map(btns =>
          <input type='button' id='btn-c' onClick={onButtonClick} className={styles.button} value={btns} />    
        )  
      }
      
      
      {/* <input type='button' id='btn-c' className={styles.button} value='c' />
      <input type='button' id='btn-c' className={styles.button} value='1' />
      <input type='button' id='btn-c' className={styles.button} value='2' />
      <input type='button' id='btn-c' className={styles.button} value='+' /> */}
    </div>
    )
}
export default Buttonsdiv;

