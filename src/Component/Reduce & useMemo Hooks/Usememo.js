import { useState, memo,useMemo } from "react";

function Usememo() {
    const [count, setCount] = useState(0)
    const [notes, setNotes] = useState([])
    const calSum = useMemo(()=>{
       return hardCalculation(count)
    },[count]);

    const calSum2 = useMemo(()=>{
        return hardCalculation2(0)
     },[]);

    return (
        <>
            {
                notes.map((e, pos) =>
                    <p>{e}</p>
                )
            }
            <button onClick={() => setNotes([...notes, "add notes"])}>Add notes</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h1>{calSum}</h1>
            <h2>{calSum2}</h2>
        </>
    )
}



function hardCalculation(num) {
    console.log("Call Calulation")
    for (let i = 1; i < 100000000; i++) {
        num += i;
    }

    return num
}

function hardCalculation2(num) {
   
    for (let i = 1; i < 100000000; i++) {
        num += i;
    }

    return num
}



export default memo(Usememo)

