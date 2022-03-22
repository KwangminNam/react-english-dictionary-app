import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";



function DayList(){
  const days = useFetch('http://localhost:3001/dayss');
  
  return(
  <>
      <ul className="list_day">
      {days.map(word =>
          <li key={word.id}>
            <Link to={`/day/${word.day}`}>
            day {word.day}
            </Link>
            </li>
        )}
    </ul>
  </>
  )

}

export default DayList;