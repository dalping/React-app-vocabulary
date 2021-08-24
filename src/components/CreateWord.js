import { useRef } from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import useFetch from "../hooks/useFetch";


export default function CreateWord(){
    const days = useFetch("http://localhost:3001/days");
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e){ //새로고침 방지
        e.preventDefault();

        if(!isLoading){
            setIsLoading(true);
            fetch(`http://localhost:3001/words/`,{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    day: dayRef.current.value,
                    eng: engRef.current.value,
                    kor: korRef.current.value,
                    isDone: false,
                }),
            }).then(res=>{
                if(res.ok){
                    alert("생성이 완료 되었습니다.");
                    history.push(`/day/${dayRef.current.value}`);
                    setIsLoading(false);
                    }
                });
        }
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
    <form>
        <div>
            <label>Eng</label>
            <input type="text" placeholder="computer" ref={engRef}/>
        </div>
        <div>
            <label>Kor</label>
            <input type="text" placeholder="컴퓨터" ref={korRef}/>
        </div>
        <div>
            <label>Day</label>
            <select ref={dayRef} >
                {days.map(day=>(
                    <option key={day.id} value={day.day}>{day.day}</option>
                ))}
            </select>
        </div>
        <button
        style ={{opacity: isLoading? 0.3 : 1,}} 
        onClick={onSubmit}>
            {isLoading ? "Saving..." : "저장"}
        </button>
    </form>
    );
}