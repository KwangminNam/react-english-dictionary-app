import dummy from "../db/data.json";

function DayList(){
  console.log(dummy);
  return(
    <ul className="list_day">
      {dummy.날짜.map(day =>
          <li key={day.id}>데이 {day.day}</li>
        )}
  </ul>
  )

}

export default DayList;