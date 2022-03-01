import { Link } from "react-router-dom";

function EmptyPage (){
  return(
    <>
      <h3>
        <Link to='/'>잘못된 접근입니다.</Link>
      </h3>
    </>
  )
}

export default EmptyPage;