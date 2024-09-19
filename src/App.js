
import { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Buttonsdiv from "./components/Butondiv";
function App() {
  let [disVal, Values] = useState('');
  const buttonClick = (event)=>{
    console.log('button is clicked' + event.target.value);
    var buttonclickval =event.target.value;
    if(buttonclickval === 'c'){
      Values("");
    }
    else if(buttonclickval === '=') {
      var result = eval(disVal);
      Values(result);
    }
    else{
      let newvalue = disVal +buttonclickval;
      Values(newvalue); 
    }
  }
  return( 
  <div className={styles.calculator}>
      <Display displayval = {disVal}></Display>
    <Buttonsdiv onButtonClick={buttonClick}></Buttonsdiv>
  </div>
  );
}

export default App;
