import dummy from '../db/data.json'
import { useParams, useRouteMatch } from 'react-router-dom';
import DayList from './DayList';
import Word from './Word';


export default function Day(){
  // dummy.words
  const day = useParams().day; 
  const wordList = dummy.wordss.filter( word =>(word.day=== Number(day)) )
  
  console.log(wordList);
  return <>
    <h1>Day{day}</h1>
    <table>
      <tbody>
        {wordList.map(맵인자 =>
          <Word 맵인자={맵인자} key={맵인자.id}></Word>
          )}
      </tbody>
    </table>
  </>
  
}

