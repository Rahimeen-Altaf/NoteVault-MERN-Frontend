import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const s1 = {
        name: 'rah',
        age: '19'
    }
    
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState(
                {
                    name: 'pinky',
                    age: '22'
                }
            )
        }, 1000);
    }

    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;