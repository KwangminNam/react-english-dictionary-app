import { Link } from "react-router-dom";
import dummy from "../db/data.json";

function DayList(){
  console.log(dummy);
  return(
    <ul className="list_day">
      {dummy.날짜.map(day =>
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>
            데이 {day.day}
            </Link>
            </li>
        )}
  </ul>
  )

}

export default DayList;