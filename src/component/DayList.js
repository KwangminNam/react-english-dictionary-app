import dummy from "../db/data.json";

function DayList(){
  console.log(dummy);
  return(
    <ul className="list_day">
    {dummy.days.map(daay => (
      <li>Day {daay.day}</li>
    ))}
    {/* "더미"라는 data.json 에서 days객체 안에있는
    
    */}
    <li></li>
  </ul>
  )

}

export default DayList;