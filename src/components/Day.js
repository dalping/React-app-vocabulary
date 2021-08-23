import { useParams } from "react-router";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day(){
    const {day} = useParams(); // Route path="/day/:day"로 넘겨받은 객체의 첫번째 인자를 넘겨받음

    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    return(
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map(word=>(
                        <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </>
    );
}