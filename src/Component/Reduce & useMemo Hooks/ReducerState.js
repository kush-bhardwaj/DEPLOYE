import { useReducer, useState } from "react"

function actionHandle(state,action){
        switch(action.TASK){
            case "addnotes":
                return {...state,notes:[...state.notes,"add notes"]}
            case "counter":
                return {...state,count:state.count+1}
        }
}

const defaultData = {
    count:0,
    notes:[]
}
export default function ReducerState() {
    const [state, dispatch] = useReducer(actionHandle,defaultData)
    return (
        <>
            {
                state?.notes.map((e, pos) =>
                    <p>{e}</p>
                )
            }
            <button onClick={()=>dispatch({TASK:"addnotes"})}>Add notes</button>


            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({TASK:"counter"})}>Increment</button>
        </>
    )
}