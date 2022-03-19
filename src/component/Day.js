import { useEffect,useState } from "react";
import { useParams, useRouteMatch} from 'react-router-dom';
import DayList from './DayList';
import Word from './Word';
import useFetch from "../hooks/useFetch";


export default function Day(){
  // dummy.words
  const day = useParams().day;  
  const words = useFetch(`http://localhost:3002/wordss?day=${day}`);


  return <>
    <h1>Day{day}</h1>
    <table>
      <tbody>
        {words.map(word =>
          <Word word={word} key={word.id}></Word>
          )}
      </tbody>
    </table>
  </>
  
}

