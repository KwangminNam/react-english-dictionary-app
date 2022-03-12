import { useState } from "react"


export default function Word({맵인자}){
  const [isShow,setIsShow] = useState(false);
  const [isDone,setIsDone] = useState(맵인자.isDone);
 

  function toggleShow(){
      setIsShow(!isShow);
  }

  function toggleDone(){
    setIsDone(!isDone);
  }

 
  return(
       <tr className={isDone ? 'off' : ''}>
          <td><input type="checkbox" checked={isDone} onChange={toggleDone}/></td>
          <td>{맵인자.eng}</td>
          <td>{isShow && 맵인자.kor}</td>
          <td>
            <button onClick={toggleShow}>뜻 {isShow ? '숨기기' :'보기'}</button>
            <button className='btn_del'>삭제</button>
          </td>
      </tr>
  )
}