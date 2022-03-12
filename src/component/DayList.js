import { useEffect,useState } from "react";
import { Link } from "react-router-dom";


function DayList(){
  const [days , setDays] = useState([]);

  useEffect(()=>{
    console.log('change');
  })

  return(
    <ul className="list_day">
      {days.map(맵인자 =>
          <li key={맵인자.id}>
            <Link to={`/day/${맵인자.day}`}>
            데이 {맵인자.day}
            </Link>
            </li>
        )}
    </ul>
  )

}

export default DayList;