import dummy from '../db/data.json'
import { useParams, useRouteMatch } from 'react-router-dom';

export default function Day(){
  // dummy.words
  const day = useParams().day; 
  const wordList = dummy.words.filter( word =>(word.day=== Number(day)) )
  

  return <>
    <h1>Day{day}</h1>
    <table>
      <tbody>
        {wordList.map(word=>
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          )}
      
      </tbody>
    </table>
  </>
}