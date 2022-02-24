// 1. const Hello = function(){
//   <p>hello</p>
// }
// export default Hello;

// 2. const Hello = ()=> {
//   <p>hello</p>
// }

// export default Hello;
import { useState } from 'react';
import styles from './Hello.module.css';

export default function Hello(){
 
  const [name,setName] = useState('mike');


  function changeName(){
    const newName = name === "mike" ? "jane" : "mike";
    setName(newName);
  }

  return (
    <>
      <h1>hello</h1>
      <h2 id="mikeName" className={styles.name}>{name}</h2>
      <button onClick={changeName}>이름바꿔줘</button>
    </>
  )

}