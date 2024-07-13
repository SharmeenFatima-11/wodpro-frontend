import { createContext, useState } from "react";
export const ExpandedContext = createContext(null)


export const ExpandedProvider = (props) =>{
    const  [expanded, setExpanded] = useState(true);
    return (
        <ExpandedContext.Provider value={{expanded, setExpanded}}>
            {props.children}
        </ExpandedContext.Provider>
    )
}