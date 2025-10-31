import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons";
import avatar from "../assets/images/Kisame.webp"
export const FooterCard = () => {

    const click = () =>{
            console.log("hola")
    }
  return (
    <footer className="flex justify-around items-center">
        <img src={avatar} alt=""  className="w-15 rounded-full cursor-pointer transition-all duration-500 hover:scale-[1.08]" />
      <div>
        <p className="text-black/70 text-sm font-bold ">kisame hoshigaki</p>
        <p className="text-Very-Dark-Grayish-Blue/70 font-bold text-[11px]">28 de junio de 2025</p>
      </div>
      <button  className="cursor-pointer bg-Desaturated-Dark-Blue/30 px-1.5 py-1 rounded-full hover:bg-Desaturated-Dark-Blue transition-all duration-500 hover:scale-[1.08] hover:text-Light-Grayish-Blue" onClick={click}  ><FontAwesomeIcon icon={faShareFromSquare} /></button>
    </footer>
  );
};
