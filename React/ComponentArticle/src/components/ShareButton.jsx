import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons";
export  const ShareButton = () => {
     const click = () =>{
            console.log("hola")
    }
  return (
     <button  className="cursor-pointer bg-Desaturated-Dark-Blue/30 px-1.5 py-1 rounded-full hover:bg-Desaturated-Dark-Blue transition-all duration-500 hover:scale-[1.08] hover:text-Light-Grayish-Blue" onClick={click}  ><FontAwesomeIcon icon={faShareFromSquare} /></button>
  )
}


