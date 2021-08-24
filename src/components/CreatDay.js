import useFetch from "../hooks/useFetch";
import { useHistory } from "react-router";
import { useState } from "react";

export default function CreateDay(){
    const days = useFetch("http://localhost:3001/days");
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    function addDay(e){ //새로고침 방지
        e.preventDefault();
        if(!isLoading){
            setIsLoading(true);
            fetch(`http://localhost:3001/days`,{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    day: days.length + 1
                }),
            }).then(res=>{
                if(res.ok){
                    alert("생성이 완료 되었습니다.");
                    history.push(`/`);
                    setIsLoading(false);
                    }
                });
        }
    }

    return (
    <div>
        <h3>현재 일수 : {days.length}일</h3>
        <button onClick={addDay}>Day 추가</button>
    </div>
    );
}