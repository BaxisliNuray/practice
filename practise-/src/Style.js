import Link from "./components/Link";
import styles from './App.module.css'
import Test from "./components/Test"
import {Title} from './StyleComponent.js'
import Bootstrap from "./Bootstrap";
// import './tailwind.css'
// import TailWind from "./TailWind";




function Style() {
  function RandomFunc(name) {
    return name
  }
  
  return (
    <div className={styles.App}>
      <Title>Nuray</Title>
      {/* <Title theme="pastel">Nuray</Title> */}
      <Test />
      <Link id={1} funcName={RandomFunc} />
      <br/>
      <Bootstrap/>
      {/* <TailWind/> */}
    </div>
  );
}

export default Style;
