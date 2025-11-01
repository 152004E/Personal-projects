
import {  useState } from "react"
import { ShowContext } from "./ContextShow";

export const ShowContextProvider = ({children}) => {

    const [show , setShow] = useState(false);

  return (
    <ShowContext value={{show , setShow}} >
      {children}
    </ShowContext>
  )
}

