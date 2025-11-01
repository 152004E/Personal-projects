import { useContext } from "react";
import { FooterCard } from "./FooterCard";
import { ImgCard } from "./ImgCard";
import { ShareIcon } from "./ShareIcon";
export const Card = () => {
  return (
    <div className="w-[345px]   m-auto  bg-Light-Grayish-Blue  rounded-2xl overflow-hidden relative">
      <ImgCard />
      <div className="px-6 pt-2 ">
        <p className="text-black/80 text-xl font-bold mb-4">
          Lleva tu setup al siguiente nivel con estos increíbles toques
          tecnológicos.
        </p>
        <p className="text-Very-Dark-Grayish-Blue/70 font-bold mb-4">
          ¿Sientes que tu escritorio necesita una mejora? No te preocupes, aquí
          te dejo unos consejos sencillos para que tu espacio gamer luzca
          potente, moderno y listo para la acción.
        </p>
        <div className="border border-Desaturated-Dark-Blue/50  w-full mb-4"></div>

        <FooterCard />
      </div>
        <ShareIcon/>

    </div>
  );
};
