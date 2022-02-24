// 1. const Hello = function(){
//   <p>hello</p>
// }
// export default Hello;

// 2. const Hello = ()=> {
//   <p>hello</p>
// }

// export default Hello;

export default function Hello(){
  
  function showName(){
    console.log('john');
  }

  function showAge(age){
    console.log(age);
  }

  function showText(e){
    console.log(e.target.value);
  }
  return (
    <>
      <h1>hello</h1>
      <button onClick={showName}> show name</button>
      <button onClick={
        ()=>{
          showAge(35)
        }
      }> show age</button>
      <input type="text" onChange={showText}/>
    </>
  )

}