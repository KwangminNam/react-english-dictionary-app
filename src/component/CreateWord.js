import useFetch from "../hooks/useFetch";
import { useRef } from "react";


export default function CreareWord(){

    const days = useFetch('http://localhost:3002/dayss')

    function onSubmit(e){
      e.preventDefault();

              // setIsDone(!isDone);
              fetch(`http://localhost:3002/wordss/`,{
                method : 'POST',
                headers : {
                  "Content-type" : 'application/json',
                },
                body : JSON.stringify({
                    day : dayRef.current.value,
                    eng : engRef.current.value,
                    kor : korRef.current.value,
                    isDone : false
                  }),
              }).then(res=>{
                if(res.ok){
                  alert("생성이 완료 되었습니다");
                }else{
                  alert('오류')
                }
              })
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return(
      <form onSubmit={onSubmit}>
        <div className="input_area">
          <label>Eng</label>
          <input type="text" placeholder="영단어를 입력하세요." ref={engRef}/>
        </div>
        <div className="input_area">
          <label>KO</label>
          <input type="text" placeholder="한글로 입력하세요." ref={korRef} />
        </div>
        <div className="input_area">
          <label>Day</label>
          <select ref={dayRef}>
              {days.map(day => (
                  <option key={day.id} value={day.day}>
                    {day.day}
                  </option>
              ))}
          </select>
        </div>
        <button>저장</button>
      </form>
    )

}